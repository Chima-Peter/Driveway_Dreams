// src/context/ModalContext.tsx
import React, { createContext, useState, ReactNode } from "react";

// Define types for the context state
export interface SearchContextType {
    auth: boolean;
    setAuth: (auth: boolean) => void;
}

// Create the context with a default value of undefined
export const ModalContext = createContext<ModalContextType | undefined>(undefined);


// Create the provider component
const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState(false); // this state controls when the login/signup modal would open. by default, it's set to false, but when user clicks on login button in nav bar, then the modal would open. click on close and it will be closed automatically

    const value = { auth, setAuth };

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export default ModalProvider
