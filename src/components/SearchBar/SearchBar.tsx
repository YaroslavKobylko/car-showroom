interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: Props) => (
  <div className="search-container">
    <input 
      type="text" 
      className="search-input" 
      placeholder="Пошук..." 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
    />
  </div>
);