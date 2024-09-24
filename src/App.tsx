import Header from "./components/Header";
import Filter from "./components/Filter";
import ListingBody from "./components/ListingBody";
import "./index.css";
import { useState } from "react";
import { ProductContextCount } from "./utils/context-cart";


type FormPrice = {
  min?: number;
  max?: number;
};

function App() {
  const [filters, setFilters] = useState<FormPrice>({
    min: undefined,
    max: undefined,
  });

  const [productContextCount, setProductContextCount] = useState<number>(0);

  // Função para atualizar os filtros
  function handleFilterChange(filter: FormPrice) {
    setFilters(filter);
  }

  return (
    <>
      <ProductContextCount.Provider value={{productContextCount, setProductContextCount}}>
        <Header />
        <Filter onFilterChange={handleFilterChange} />
        <ListingBody filters={filters} />
        </ProductContextCount.Provider>
    </>
  );
}

export default App;
