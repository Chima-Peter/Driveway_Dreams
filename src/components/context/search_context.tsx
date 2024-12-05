// src/context/ModalContext.tsx
import React, { createContext, useState, ReactNode } from "react";

// Define types for the context search object
export interface SearchType {
    make: string,
    model: string,
    price_from: number,
    price_to: number,
    fuel: string,
    condition: string,
    category: string,
    color: string
}

// types for the context state
export interface SearchContextType {
    search: SearchType;
    setSearch: (search: SearchType) => void
}

// Create the context with a default value of undefined
export const SearchContext = createContext<SearchContextType | undefined>(undefined);


// Create the provider component
const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    // this is the state that manages user's search
    const [search, setSearch] = useState<SearchType>({
        make: '',
        model: '',
        price_from: 0,
        price_to: 0,
        fuel: '',
        condition: '',
        category: '',
        color: ''
    }); 


    return <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>;
};

export default SearchProvider
