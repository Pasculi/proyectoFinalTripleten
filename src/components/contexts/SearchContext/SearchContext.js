import React, { createContext } from "react";

export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  return <SearchContext.Provider>{children}</SearchContext.Provider>;
};

export default SearchProvider;
