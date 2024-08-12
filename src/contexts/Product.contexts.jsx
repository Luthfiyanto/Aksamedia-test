import { createContext, useState } from "react";
import data from "./../store/data.json";
import fs from "fs";
import path from "path";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [productPrice, setProductPrice] = useState(10);
  const [productStock, setProductStock] = useState(1);
  const [productImage, setProductImage] = useState("");

  const addProduct = async () => {
    try {
      const newProduct = {
        id: productId,
        title: productName,
        description: description,
        price: productPrice,
        stock: productStock,
        image: productImage,
      };
      const existingProduct = data;
      existingProduct.push(newProduct);

      const filePath = path.join(__dirname, "./../store/data.json");

      await fs.writeFile(filePath, JSON.stringify(existingProduct), (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productId,
        productName,
        description,
        productPrice,
        productStock,
        productImage,
        addProduct,
        setProductId,
        setProductName,
        setDescription,
        setProductPrice,
        setProductStock,
        setProductImage,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
