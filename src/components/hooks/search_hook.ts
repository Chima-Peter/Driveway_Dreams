/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { SearchContext } from "../context/search_context";

// Create a custom hook for accessing the context
const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearchContext must be used within a SearchProvider");
    }
    return context;
};

export default useSearchContext