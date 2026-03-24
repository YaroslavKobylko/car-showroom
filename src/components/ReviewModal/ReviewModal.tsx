import { useState } from 'react';
import type { Review } from '../../types/vehicle';

interface Props {
  onClose: () => void;
  onSubmit: (review: Omit<Review, 'date'>) => void;
}

export const ReviewModal = ({ onClose, onSubmit }: Props) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      setError('Ім\'я та коментар є обов\'язковими полями.');
      return;
    }
    if (comment.length > 500) {
      setError('Коментар не може перевищувати 500 символів.');
      return;
    }

    onSubmit({
      reviewerName: name,
      reviewerEmail: 'localuser@showroom.com',
      comment,
      rating,
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close">&times;</button>
        <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '1.5rem' }}>Додати свій відгук</h3>
        
        {error && <p style={{ color: '#ef4444', backgroundColor: '#fef2f2', padding: '10px', borderRadius: '6px', marginBottom: '15px' }}>{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <label className="form-group">
            Ваше ім'я:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Введіть ваше ім'я" />
          </label>
          <label className="form-group">
            Оцінка (1-5):
            <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="form-control">
              {[5, 4, 3, 2, 1].map(num => <option key={num} value={num}>{num} Зірок</option>)}
            </select>
          </label>
          <label className="form-group">
            Коментар:
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows={4} className="form-control" style={{ resize: 'vertical' }} placeholder="Поділіться своїми враженнями..." />
          </label>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px', padding: '14px' }}>
            Надіслати відгук
          </button>
        </form>
      </div>
    </div>
  );
};