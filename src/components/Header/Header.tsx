import { SearchBar } from '../SearchBar/SearchBar';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import type { ChangeEvent } from 'react';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating';

interface Props {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  sortBy: SortOption;
  onSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Header = ({ searchTerm, onSearchChange, sortBy, onSortChange }: Props) => (
  <header className="main-header">
    <h1 className="logo">Car Showroom</h1>
    <SearchBar value={searchTerm} onChange={onSearchChange} />
    <div className="controls-container">
      <select 
        className="form-control sort-select" 
        value={sortBy} 
        onChange={onSortChange}
      >
        <option value="default">За замовчуванням</option>
        <option value="price-asc">Від найдешевших</option>
        <option value="price-desc">Від найдорожчих</option>
        <option value="rating">За рейтингом</option>
      </select>
      <ThemeToggle />
    </div>
  </header>
);