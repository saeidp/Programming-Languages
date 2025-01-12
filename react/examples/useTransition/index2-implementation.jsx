import React, { useState, useTransition } from 'react';
import ReactDOM from 'react-dom/client'
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Start a transition for filtering
    startTransition(() => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <div>
      <h1>Search Items</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
