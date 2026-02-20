import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    setIsSubmitted(true);
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#0066cc' }}>
            Связаться с нами
          </h2>
          <p className="lead text-muted">
            Оставьте заявку и мы свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                {isSubmitted ? (
                  <div className="text-center py-5">
                    <div
                      className="mb-4"
                      style={{ fontSize: '4rem' }}
                    >
                      ✓
                    </div>
                    <h3 className="fw-bold mb-3" style={{ color: '#28a745' }}>
                      Спасибо за заявку!
                    </h3>
                    <p className="text-muted">
                      Мы свяжемся с вами в ближайшее время
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-bold">
                          Имя *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label fw-bold">
                          Телефон *
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+7 (999) 999-99-99"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label fw-bold">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label fw-bold">
                          Сообщение *
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Опишите вашу заявку или вопрос"
                        ></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg px-5 py-3 fw-bold"
                          style={{ borderRadius: '50px' }}
                        >
                          Отправить заявку
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Контактная информация */}
            <div className="row mt-5 g-4">
              <div className="col-md-4">
                <div className="text-center">
                  <div
                    className="mb-3"
                    style={{ fontSize: '2.5rem' }}
                  >
                    📞
                  </div>
                  <h5 className="fw-bold mb-2">Телефон</h5>
                  <p className="text-muted mb-0">
                    <a href="tel:+79952271391" className="text-decoration-none text-muted">
                      +7 (995) 227-13-91
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div
                    className="mb-3"
                    style={{ fontSize: '2.5rem' }}
                  >
                    ✉️
                  </div>
                  <h5 className="fw-bold mb-2">Email</h5>
                  <p className="text-muted mb-0">
                    <a href="mailto:info@neptyn.ru" className="text-decoration-none text-muted">
                      info@neptyn.ru
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div
                    className="mb-3"
                    style={{ fontSize: '2.5rem' }}
                  >
                    📍
                  </div>
                  <h5 className="fw-bold mb-2">Адрес</h5>
                  <p className="text-muted mb-0">
                    г. Армавир, ул. Володарского, д. 1/10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
