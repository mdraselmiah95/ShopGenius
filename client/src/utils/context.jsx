import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [catagories, setCatagories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <Context.Provider
      value={{
        catagories,
        setCatagories,
        products,
        setProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
