import { useState } from 'react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все' },
    { id: 'fish', name: 'Рыба' },
    { id: 'seafood', name: 'Морепродукты' },
    { id: 'caviar', name: 'Икра' },
  ];

  const products = [
    // Рыба (12 товаров)
    { id: 1, name: 'Горбуша свежемороженая', category: 'fish', price: '350 ₽/кг', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', description: 'Свежемороженая горбуша премиум качества' },
    { id: 2, name: 'Минтай свежемороженый', category: 'fish', price: '180 ₽/кг', image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400', description: 'Минтай высокого качества' },
    { id: 3, name: 'Камбала дальневосточная', category: 'fish', price: '280 ₽/кг', image: 'https://images.unsplash.com/photo-1540002809-43a60f45b32d?w=400', description: 'Камбала с Дальнего Востока' },
    { id: 4, name: 'Нерка свежемороженая', category: 'fish', price: '550 ₽/кг', image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=400', description: 'Нерка - красная рыба премиум класса' },
    { id: 5, name: 'Сельдь атлантическая', category: 'fish', price: '220 ₽/кг', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400', description: 'Атлантическая сельдь жирная' },
    { id: 6, name: 'Скумбрия свежемороженая', category: 'fish', price: '320 ₽/кг', image: 'https://images.unsplash.com/photo-1583224944037-0ae743f24d14?w=400', description: 'Скумбрия натуральная' },
    { id: 7, name: 'Треска свежемороженая', category: 'fish', price: '290 ₽/кг', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', description: 'Треска филе без кожи' },
    { id: 8, name: 'Чавыча свежемороженая', category: 'fish', price: '680 ₽/кг', image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=400', description: 'Чавыча - король лососевых' },
    { id: 9, name: 'Сардина тихоокеанская', category: 'fish', price: '200 ₽/кг', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400', description: 'Сардина натуральная' },
    { id: 10, name: 'Терпуг свежемороженый', category: 'fish', price: '380 ₽/кг', image: 'https://images.unsplash.com/photo-1540002809-43a60f45b32d?w=400', description: 'Терпуг дальневосточный' },
    { id: 11, name: 'Филе горбуши', category: 'fish', price: '420 ₽/кг', image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400', description: 'Филе горбуши без кожи и костей' },
    { id: 12, name: 'Филе минтая', category: 'fish', price: '250 ₽/кг', image: 'https://images.unsplash.com/photo-1583224944037-0ae743f24d14?w=400', description: 'Филе минтая премиум' },
    
    // Морепродукты (12 товаров)
    { id: 13, name: 'Крабовое мясо', category: 'seafood', price: '1200 ₽/кг', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400', description: 'Крабовое мясо натуральное' },
    { id: 14, name: 'Кальмары свежемороженые', category: 'seafood', price: '450 ₽/кг', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400', description: 'Кальмары очищенные' },
    { id: 15, name: 'Креветки тигровые', category: 'seafood', price: '950 ₽/кг', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400', description: 'Креветки тигровые крупные' },
    { id: 16, name: 'Мидии свежемороженые', category: 'seafood', price: '380 ₽/кг', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400', description: 'Мидии в раковине' },
    { id: 17, name: 'Осьминог свежемороженый', category: 'seafood', price: '750 ₽/кг', image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=400', description: 'Осьминог целый' },
    { id: 18, name: 'Лангусты', category: 'seafood', price: '2500 ₽/кг', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400', description: 'Лангусты свежие' },
    { id: 19, name: 'Гребешки морские', category: 'seafood', price: '890 ₽/кг', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400', description: 'Гребешки в раковине' },
    { id: 20, name: 'Креветки королевские', category: 'seafood', price: '1100 ₽/кг', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400', description: 'Креветки королевские' },
    { id: 21, name: 'Кальмары кольца', category: 'seafood', price: '480 ₽/кг', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400', description: 'Кальмары кольца панированные' },
    { id: 22, name: 'Устрицы свежие', category: 'seafood', price: '1500 ₽/кг', image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=400', description: 'Устрицы свежие' },
    { id: 23, name: 'Мясо краба имитация', category: 'seafood', price: '650 ₽/кг', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400', description: 'Мясо краба имитация' },
    { id: 24, name: 'Креветки варёные', category: 'seafood', price: '850 ₽/кг', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400', description: 'Креветки варёно-мороженые' },
    
    // Икра (6 товаров)
    { id: 25, name: 'Красная икра горбуши', category: 'caviar', price: '3500 ₽/кг', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400', description: 'Икра горбуши премиум' },
    { id: 26, name: 'Красная икра кеты', category: 'caviar', price: '4200 ₽/кг', image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=400', description: 'Икра кеты крупная' },
    { id: 27, name: 'Красная икра нерки', category: 'caviar', price: '5500 ₽/кг', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400', description: 'Икра нерки премиум' },
    { id: 28, name: 'Чёрная икра осетра', category: 'caviar', price: '15000 ₽/кг', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400', description: 'Чёрная икра осетровая' },
    { id: 29, name: 'Икра щуки', category: 'caviar', price: '2800 ₽/кг', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400', description: 'Икра щуки пастеризованная' },
    { id: 30, name: 'Икра форели', category: 'caviar', price: '3200 ₽/кг', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400', description: 'Икра форели натуральная' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="catalog" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#0066cc' }}>
            Каталог продукции
          </h2>
          <p className="lead text-muted">
            Широкий ассортимент рыбы и морепродуктов
          </p>
        </div>

        {/* Фильтры */}
        <div className="d-flex justify-content-center mb-5 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`btn px-4 py-2 ${
                selectedCategory === category.id
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              }`}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                borderRadius: '25px',
                transition: 'all 0.3s ease',
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Сетка товаров */}
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div className="col-md-6 col-lg-4" key={product.id}>
              <div className="card h-100 border-0 shadow-sm hover-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text text-muted small">{product.description}</p>
                  <p className="card-text fw-bold" style={{ color: '#0066cc', fontSize: '1.2rem' }}>
                    {product.price}
                  </p>
                </div>
                <div className="card-footer bg-white border-0 pb-3">
                  <button
                    className="btn btn-primary w-100"
                    style={{ borderRadius: '25px' }}
                  >
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
