import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        placeholder="Search order🔎"
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-xs text-stone-700 transition-all duration-300 placeholder:text-stone-400 focus:w-32 focus:bg-stone-50 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none sm:w-64 sm:text-sm sm:focus:w-70"
      />
    </form>
  );
}

export default SearchOrder;
