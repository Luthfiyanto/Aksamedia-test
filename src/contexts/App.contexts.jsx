import { createContext, useState } from "react";
import data from "../store/data.json";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [product, setProduct] = useState([]);

  const getAllProduct = () => {
    const dataProduct = data;
    setProduct(dataProduct);
  };
  return <AppContext.Provider value={{ product, getAllProduct }}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
