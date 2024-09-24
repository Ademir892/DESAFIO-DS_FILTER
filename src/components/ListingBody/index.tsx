import { useContext, useEffect, useState } from 'react';
import './styles.css';
import { findByPrice } from '../../utils/product-service';
import { ProductContextCount } from '../../utils/context-cart';

type FormPrice = {
  min?: number;
  max?: number;
};

export default function ListingBody({ filters }: { filters: FormPrice }) {
    const [filteredProducts, setFilteredProducts] = useState<ProductDTO[]>([]);
    
    const { setProductContextCount } = useContext(ProductContextCount); 
    useEffect(() => {
        if (filters.min !== undefined || filters.max !== undefined) {
            const products = findByPrice(filters.min || 0, filters.max || Number.MAX_VALUE);
            setFilteredProducts(products); 
            setProductContextCount(products.length); 
        }
    }, [filters, setProductContextCount]);

    return (
        <div className='cart'>
            <div className='dsf-container listing-card pad-top10'>
                {filteredProducts.map(product => (
                    <div className="product-listing" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
