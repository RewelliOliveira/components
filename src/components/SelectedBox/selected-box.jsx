import { useState } from "react";
import { DollarSign, TrendingUp, PieChart } from "lucide-react";
import styles from "./selected-box.module.css";

function SelectBox() {
  const [selectedOption, setSelectedOption] = useState("receitas");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectBox}>
        <select
          value={selectedOption}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="despesas">Despesas</option>
          <option value="receitas">Receitas</option>
          <option value="investimentos">Investimentos</option>
        </select>
        <div className={styles.iconDisplay}>
          {selectedOption === "despesas" && <DollarSign />}
          {selectedOption === "receitas" && <TrendingUp />}
          {selectedOption === "investimentos" && <PieChart />}
        </div>
        <p className={styles.selectedText}>Opção selecionada: {selectedOption}</p>
      </div>
    </div>
  );
}

export default SelectBox;
