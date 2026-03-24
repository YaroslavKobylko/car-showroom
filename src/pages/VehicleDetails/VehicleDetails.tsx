import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetVehicleByIdQuery } from '../../features/vehicles/vehiclesApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addLocalReview } from '../../features/comments/commentsSlice';
import { useTheme } from '../../hooks/useTheme';
import { Loader } from '../../components/Loader/Loader';
import { ReviewModal } from '../../components/ReviewModal/ReviewModal';
import type { Review } from '../../types/vehicle';

// Виносимо порожній масив у константу, щоб useSelector не повертав нове посилання при кожному виклику
const EMPTY_REVIEWS: Review[] = [];

export const VehicleDetails = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const numericId = Number(vehicleId);
  const { theme, toggleTheme } = useTheme();

  const { data: vehicle, isLoading, isError } = useGetVehicleByIdQuery(numericId, { 
    skip: !vehicleId 
  });
  
  const dispatch = useAppDispatch();
  
  const localReviews = useAppSelector(
    (state) => state.comments.localReviews[numericId] ?? EMPTY_REVIEWS
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'newest' | 'highest' | 'lowest'>('newest');

  if (isLoading) return <Loader />;
  
  if (isError || !vehicle) {
    return (
      <h2 style={{ textAlign: 'center', marginTop: '50px', color: '#ef4444' }}>
        Автомобіль не знайдено!
      </h2>
    );
  }

  const allReviews: Review[] = [...(vehicle.reviews || []), ...localReviews];
  
  const sortedReviews = [...allReviews].sort((a, b) => {
    if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === 'highest') return b.rating - a.rating;
    if (sortBy === 'lowest') return a.rating - b.rating;
    return 0;
  });

  const handleAddReview = (reviewData: Omit<Review, 'date'>) => {
    const newReview: Review = { ...reviewData, date: new Date().toISOString() };
    dispatch(addLocalReview({ vehicleId: numericId, review: newReview }));
    setIsModalOpen(false);
  };

  return (
    <main className="container">
      <header className="details-header">
        <Link to="/" className="back-link">&larr; Повернутися до списку</Link>
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>
      
      <article className="details-grid">
        <div className="details-image-container">
          <img src={vehicle.thumbnail} alt={vehicle.title} />
        </div>
        <div className="details-info">
          <span className="vehicle-brand">{vehicle.brand}</span>
          <h1>{vehicle.title}</h1>
          <div className="price-row">
            <p className="price" style={{ margin: 0 }}>
              ${vehicle.price.toLocaleString()}
            </p>
            <span className="rating-badge">★ {vehicle.rating}</span>
            {vehicle.discountPercentage > 0 && (
              <span className="discount-badge">-{vehicle.discountPercentage}%</span>
            )}
          </div>
          <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
            {vehicle.description}
          </p>
          <div className="characteristics-box">
            <h3>Характеристики:</h3>
            <ul className="characteristics-list">
              <li><strong>Категорія:</strong> <span style={{ textTransform: 'capitalize' }}>{vehicle.category}</span></li>
              <li><strong>Артикул:</strong> {vehicle.sku}</li>
              <li><strong>Наявність:</strong> {vehicle.availabilityStatus}</li>
              <li><strong>Гарантія:</strong> {vehicle.warrantyInformation}</li>
              <li><strong>Доставка:</strong> {vehicle.shippingInformation}</li>
              <li><strong>Повернення:</strong> {vehicle.returnPolicy}</li>
              <li className="full-width"><strong>Теги:</strong> {vehicle.tags.join(', ')}</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="reviews-section">
        <h2>
          <span>Відгуки ({sortedReviews.length})</span>
          <div className="reviews-controls">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'highest' | 'lowest')} 
              className="form-control sort-select"
            >
              <option value="newest">Найновіші</option>
              <option value="highest">Найвищий рейтинг</option>
              <option value="lowest">Найнижчий рейтинг</option>
            </select>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary">
              Додати відгук
            </button>
          </div>
        </h2>
        
        {sortedReviews.length > 0 ? (
          <ul className="review-list">
            {sortedReviews.map((rev, index) => (
              <li key={index} className="review-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <strong>{rev.reviewerName}</strong>
                  <span style={{ color: '#fbbf24' }}>
                    {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                  </span>
                </div>
                <p style={{ margin: '0 0 10px 0', lineHeight: '1.5' }}>{rev.comment}</p>
                <small style={{ color: 'var(--text-muted)' }}>
                  {new Date(rev.date).toLocaleDateString()}
                </small>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-state">Поки що немає відгуків. Будьте першим!</div>
        )}
      </section>

      {isModalOpen && (
        <ReviewModal 
          onClose={() => setIsModalOpen(false)} 
          onSubmit={handleAddReview} 
        />
      )}
    </main>
  );
};