import { createContext} from "react";

export type ProductContextCountType = {
    productContextCount: number;
    setProductContextCount: (productContextCount: number) => void;
};

// O nome do contexto deve ser o mesmo do tipo, mas o provedor deve ser de ProductContextCount
export const ProductContextCount = createContext<ProductContextCountType>({
    productContextCount: 0,
    setProductContextCount: () => {}
});


