import { useState } from "react";
import ButtonFilter from "../ButtonFilter";
import "./styles.css";

type FormPrice = {
  min?: number;
  max?: number;
};

export default function Filter({ onFilterChange }: { onFilterChange: (filter: FormPrice) => void }) {
  const [formPrice, setFormPrice] = useState<FormPrice>({ min: undefined, max: undefined });

  function handleInputChange(event: any) {
    const { name, value } = event.target;

    setFormPrice((prev) => ({
      ...prev,
      [name]: value === "" ? undefined : Number(value),
    }));
  }


  function handleFilterSubmit(event: any) {
    event.preventDefault();
    onFilterChange(formPrice);
  }

  return (
    <main>
      <section>
        <div className="dsf-container filter-content mt-20">
          <form onSubmit={handleFilterSubmit}>
            <div>
              <input
                className="preco-input"
                name="min"
                value={formPrice.min !== undefined ? formPrice.min : ""} 
                type="number"
                placeholder="  Preço mínimo"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                className="preco-input"
                name="max"
                value={formPrice.max !== undefined ? formPrice.max : ""} 
                type="number"
                placeholder="  Preço máximo"
                onChange={handleInputChange}
              />
            </div>
            <div className="pad-left20 pad-top10">
              <ButtonFilter />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
