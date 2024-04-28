'use client';

import { http } from '@/services/api';
import { ICard, IProduct } from '@/interface';
import React, {
   Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState
} from 'react';

type IProductContextData = {
   itemsInCart: ICard[];
   setItemsInCart: Dispatch<SetStateAction<ICard[]>>;
   getProducts: () => Promise<void>;
}

interface AppProviderProps {
   children: ReactNode;
}

const DataContext = createContext<IProductContextData | undefined>(undefined);

const DataProvider: React.FC<AppProviderProps> = ({
    children
}: AppProviderProps) => {
    const [itemsInCart, setItemsInCart] = useState<ICard[]>([]);
    
    async function getProducts() {
        const response = await http.get('/products?page=1&rows=8&sortBy=id&orderBy=ASC');

        const productApi = response.data.products.map((product: IProduct) => {
            let price = product.price;
            price = price.replace(/\.\d+$/, "");
            
            return {
            id: product.id,
            name: product.name,
            brand: product.brand,
            description: product.description,
            photo: product.photo,
            price: `R$${price}`,
            amount: 1,
            }
        })

        return productApi
    }
 

    const contextValue = {
        itemsInCart,
        setItemsInCart,
        getProducts,
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error(
            'useDataContext deve ser usado dentro de um ClientesProvider'
        );
    }
    return context;
};

export { DataProvider, useDataContext };
