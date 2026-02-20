const Hero = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.9) 0%, rgba(0, 51, 102, 0.95) 100%), url("https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '80px',
      }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="display-1 fw-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Рыба и морепродукты оптом
            </h1>
            <p className="lead mb-5" style={{ fontSize: '1.3rem', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              Более 10 лет успешной работы на рынке России и стран СНГ. 
              Качественная продукция напрямую от производителей по конкурентным ценам.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a
                href="#catalog"
                className="btn btn-warning btn-lg px-5 py-3 fw-bold"
                style={{ borderRadius: '50px' }}
              >
                Смотреть каталог
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
                style={{ borderRadius: '50px' }}
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
