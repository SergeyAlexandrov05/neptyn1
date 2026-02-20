import qualityIcon from '../assets/icons/quality.gif';
import certificateIcon from '../assets/icons/certificate.gif';
import deliveryIcon from '../assets/icons/delivery.gif';
import freezingIcon from '../assets/icons/freezing.gif';
import priceIcon from '../assets/icons/price.gif';
import assortmentIcon from '../assets/icons/assortment.gif';

const Advantages = () => {
  const advantages = [
    {
      icon: qualityIcon,
      title: 'Прямые поставки',
      description: 'Работаем напрямую с производителями, без посредников. Это гарантирует лучшую цену и качество.'
    },
    {
      icon: certificateIcon,
      title: 'Высокое качество',
      description: 'Вся продукция имеет необходимые сертификаты качества, подтверждающие соответствие санитарным нормам.'
    },
    {
      icon: deliveryIcon,
      title: 'Быстрая доставка',
      description: 'Оптимизированная логистика обеспечивает быструю доставку в любые регионы России.'
    },
    {
      icon: freezingIcon,
      title: 'Шоковая заморозка',
      description: 'Современное оборудование для шоковой заморозки сохраняет всю пользу и вкус продукции.'
    },
    {
      icon: priceIcon,
      title: 'Конкурентные цены',
      description: 'Отсутствие посредников позволяет нам предлагать лучшие цены на рынке.'
    },
    {
      icon: assortmentIcon,
      title: 'Широкий ассортимент',
      description: 'Более 100 видов рыбы и морепродуктов: от привычной до экзотической.'
    }
  ];

  return (
    <section id="advantages" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#0066cc' }}>
            Наши преимущества
          </h2>
          <p className="lead text-muted">
            Почему выбирают именно нас
          </p>
        </div>

        <div className="row g-4">
          {advantages.map((advantage, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div 
                className="card h-100 border-0 shadow-sm hover-card advantage-card"
                style={{
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="card-body p-4 text-center">
                  <div className="advantage-icon-wrapper mb-3">
                    <img
                      src={advantage.icon}
                      alt={advantage.title}
                      className="advantage-icon"
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'contain',
                        opacity: '0.6',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </div>
                  <h4 className="card-title fw-bold mb-3" style={{ color: '#0066cc' }}>
                    {advantage.title}
                  </h4>
                  <p className="card-text text-muted">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .advantage-card:hover .advantage-icon {
          opacity: 1 !important;
          transform: scale(1.15);
        }
        
        .advantage-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 102, 204, 0.15) !important;
        }
      `}</style>
    </section>
  );
};

export default Advantages;
