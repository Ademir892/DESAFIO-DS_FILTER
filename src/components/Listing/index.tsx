import { useState } from "react";
import Filter from "../Filter";
import ListingBody from "../ListingBody";


export default function ListingPage() {
  const [filters, setFilters] = useState({
    formMaxPrice: Number.MAX_VALUE,
    formMinPrice: 0,
  });

  // Função que será chamada pelo componente Filter para atualizar os filtros
  function handleFilterChange(newFilters: any) {
    setFilters(newFilters);

  }

  return (
    <div>
      {/* Passa a função de atualização de filtros para o componente Filter */}
      <Filter onFilterChange={handleFilterChange} />
      
      {/* Passa os filtros atualizados para o componente ListingBody */}
      <ListingBody filters={filters} />
    </div>
  );
}
