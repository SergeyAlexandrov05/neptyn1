import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=800',
      alt: 'Свежая рыба',
      title: 'Свежемороженая рыба'
    },
    {
      src: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800',
      alt: 'Морепродукты',
      title: 'Ассортимент морепродуктов'
    },
    {
      src: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800',
      alt: 'Крабовое мясо',
      title: 'Крабовое мясо'
    },
    {
      src: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800',
      alt: 'Креветки',
      title: 'Свежие креветки'
    },
    {
      src: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
      alt: 'Устрицы',
      title: 'Свежие устрицы'
    },
    {
      src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800',
      alt: 'Красная рыба',
      title: 'Красная рыба премиум'
    },
    {
      src: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800',
      alt: 'Филе рыбы',
      title: 'Филе рыбы'
    },
    {
      src: 'https://images.unsplash.com/photo-1540002809-43a60f45b32d?w=800',
      alt: 'Рыбный магазин',
      title: 'Наш склад'
    },
  ];

  return (
    <section id="gallery" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#0066cc' }}>
            Галерея
          </h2>
          <p className="lead text-muted">
            Фотографии нашей продукции и складов
          </p>
        </div>

        <div className="row g-4">
          {galleryImages.map((image, index) => (
            <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
              <div
                className="card border-0 shadow-sm hover-card"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="card-img-top"
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">
                    {image.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Модальное окно для просмотра изображения */}
        {selectedImage && (
          <div
            className="modal show d-block"
            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content bg-transparent border-0">
                <div className="modal-body p-0 text-center">
                  <img
                    src={selectedImage}
                    alt="Просмотр"
                    className="img-fluid rounded"
                    style={{ maxHeight: '80vh' }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
