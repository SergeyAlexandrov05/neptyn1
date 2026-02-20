const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800"
              alt="О компании Нептун"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#0066cc' }}>
              О компании «Нептун»
            </h2>
            <p className="lead text-muted mb-4">
              История качества и профессионализма, насчитывающая более десяти лет успешной работы
            </p>
            <p className="mb-3">
              Мы являемся одним из ведущих поставщиков морепродуктов, свежей рыбы и субпродуктов 
              на рынке России и стран СНГ. Наш опыт — ваша гарантия качества.
            </p>
            <p className="mb-3">
              Мы работаем напрямую с производителями, что позволяет нам обеспечить высокое качество 
              и конкурентные цены. Мы закупаем рыбу без посредников, что значительно снижает стоимость 
              для наших клиентов.
            </p>
            <p className="mb-4">
              Мы поставляем свежемороженую рыбу оптом по всей России: Москва, Екатеринбург, 
              Новосибирск, Тюмень, Омск, Красноярск, Иркутск, Чита, Хабаровск и Владивосток. 
              Наша логистика обеспечивает быструю доставку и оптимальные условия хранения.
            </p>
            <div className="d-flex gap-3">
              <div className="text-center">
                <h3 className="fw-bold" style={{ color: '#0066cc' }}>10+</h3>
                <p className="text-muted mb-0">лет опыта</p>
              </div>
              <div className="text-center">
                <h3 className="fw-bold" style={{ color: '#0066cc' }}>50+</h3>
                <p className="text-muted mb-0">регионов</p>
              </div>
              <div className="text-center">
                <h3 className="fw-bold" style={{ color: '#0066cc' }}>1000+</h3>
                <p className="text-muted mb-0">клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
