import logoBlack from '../assets/logo-black.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="mb-3">
              <img
                src={logoBlack}
                alt="НЕПТУН"
                style={{
                  height: '60px',
                  width: 'auto',
                  maxWidth: '200px',
                }}
              />
            </div>
            <p className="text-light mb-4" style={{ opacity: 0.9 }}>
              Более 10 лет успешной работы на рынке России и стран СНГ. 
              Качественная продукция напрямую от производителей.
            </p>
            <div className="d-flex gap-3">
              <a
                href="#"
                className="text-white fs-4"
                aria-label="ВКонтакте"
              >
                VK
              </a>
              <a
                href="#"
                className="text-white fs-4"
                aria-label="Telegram"
              >
                TG
              </a>
              <a
                href="#"
                className="text-white fs-4"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          <div className="col-lg-2">
            <h5 className="fw-bold mb-3 text-white">Навигация</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-light text-decoration-none" style={{ opacity: 0.9 }}>
                  Главная
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none" style={{ opacity: 0.9 }}>
                  О компании
                </a>
              </li>
              <li className="mb-2">
                <a href="#catalog" className="text-light text-decoration-none" style={{ opacity: 0.9 }}>
                  Каталог
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-light text-decoration-none" style={{ opacity: 0.9 }}>
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5 className="fw-bold mb-3 text-white">Контакты</h5>
            <ul className="list-unstyled">
              <li className="mb-2 text-light" style={{ opacity: 0.9 }}>
                📞 +7 (995) 227-13-91
              </li>
              <li className="mb-2 text-light" style={{ opacity: 0.9 }}>
                ✉️ info@neptyn.ru
              </li>
              <li className="mb-2 text-light" style={{ opacity: 0.9 }}>
                г. Армавир, ул. Володарского, д. 1/10
              </li>
              <li className="mb-2 text-light" style={{ opacity: 0.9 }}>
                🕐 Пн-Сб: 8:00 - 17:00; Вс: 8:00 - 15:00
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5 className="fw-bold mb-3 text-white">Информация</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none" style={{ opacity: 0.9 }}>
                  Политика конфиденциальности
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none" style={{ opacity: 0.9 }}>
                  Условия использования
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none" style={{ opacity: 0.9 }}>
                  Доставка и оплата
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0" style={{ opacity: 0.9 }}>
              © {currentYear} НЕПТУН. Все права защищены.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-light mb-0" style={{ opacity: 0.9 }}>
              Разработано с ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
