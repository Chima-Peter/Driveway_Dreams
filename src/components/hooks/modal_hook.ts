/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { ModalContext } from "../context/modal_context";

// Create a custom hook for accessing the context
const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};

export default useModalContext