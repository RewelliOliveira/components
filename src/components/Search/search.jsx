import { useState } from "react";
import styles from './search.module.css';

function Search() {
  const [query, setQuery] = useState("");
  const items = [
    "Despesas",
    "Receitas",
    "Investimentos",
    "Poupança",
    "Empréstimos",
    "poupanca"
  ];

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={handleSearch}
        className={styles.input}
      />
      {query && (
        <ul className={styles.list}>
          {filteredItems.map((item, index) => (
            <li key={index} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
