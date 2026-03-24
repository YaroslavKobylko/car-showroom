import { Link } from 'react-router-dom';
import type { Vehicle } from '../../types/vehicle';

interface Props {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: Props) => {
  return (
    <article className="vehicle-card">
      <div className="vehicle-image-wrapper">
        <img src={vehicle.thumbnail} alt={vehicle.title} className="vehicle-image" />
      </div>
      
      <div className="vehicle-content">
        <span className="vehicle-brand">{vehicle.brand}</span>
        <h2 className="vehicle-title">{vehicle.title}</h2>
        <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
          <span className="rating-badge" style={{ fontSize: '0.9rem' }}>★ {vehicle.rating}</span>
        </div>
        
        <div className="vehicle-bottom">
          <p className="vehicle-price">${vehicle.price.toLocaleString()}</p>
          <Link to={`/vehicles/${vehicle.id}`} className="btn-primary">
            Детальніше
          </Link>
        </div>
      </div>
    </article>
  );
};