import { useState } from 'react';
import type { ChangeEvent } from 'react'; 
import { useGetVehiclesQuery } from '../../features/vehicles/vehiclesApi';
import { Loader } from '../../components/Loader/Loader';
import { VehicleCard } from '../../components/VehicleCard/VehicleCard';
import { Header } from '../../components/Header/Header';
import type { Vehicle } from '../../types/vehicle';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating';

function App() {
  const { data: vehicles, isLoading, isError } = useGetVehiclesQuery();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  if (isLoading) return <Loader />;
  if (isError) return <h2 style={{ textAlign: 'center', marginTop: '50px', color: '#ef4444' }}>Помилка завантаження!</h2>;

  const processedVehicles = vehicles
    ?.filter((v: Vehicle) => {
      const low = searchTerm.toLowerCase();
      return v.title.toLowerCase().includes(low) || v.brand.toLowerCase().includes(low);
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <main className="container">
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        sortBy={sortBy} 
        onSortChange={(e: ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value as SortOption)}
      />

      <section className="vehicle-grid">
        {processedVehicles?.map((vehicle: Vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
        {processedVehicles?.length === 0 && (
          <div className="empty-state">Нічого не знайдено 😕</div>
        )}
      </section>
    </main>
  );
}

export default App;