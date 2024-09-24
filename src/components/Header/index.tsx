import { useContext } from "react";
import { ProductContextCount } from "../../utils/context-cart";
import "../Header/styles.css";

export default function Header() {
  // Obtém o valor do contexto corretamente
  const { productContextCount } = useContext(ProductContextCount);

  return (
    <header>
      <nav className="nav-bar header-content dsf-header-container">
        <div className="dsf-container header-content">
          <div>
            <h1>DsFilter</h1>
          </div>
          {/* Usa o valor do contexto obtido, em vez do próprio objeto do contexto */}
          <div className="nav-count">{productContextCount} produto(s)</div>
        </div>
      </nav>
    </header>
  );
}
