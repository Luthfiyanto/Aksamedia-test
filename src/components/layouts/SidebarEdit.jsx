import { useState, useContext } from "react";
import InputText from "../partials/InputText";
import { ProductContext } from "../../contexts/Product.contexts";

export default function SidebarEdit() {
  const { productId, productName, description, productPrice, productStock, productImage, setProductId, setProductName, setDescription, setProductPrice, setProductStock, setProductImage } = useContext(ProductContext);
  return (
    <>
      <section className="flex flex-col gap-4 bg-white dark:bg-darkblue shadow-md dark:shadow-white p-5 rounded-e-md w-4/5 min-h-screen">
        <h1 className="my-6 font-semibold text-3xl text-baseblue-300 dark:text-baseblue-100">Manage Product</h1>
        <InputText type={"text"} value={productId} trigger={setProductId} dataName={"Product ID"} />
        <InputText type={"text"} value={productName} trigger={setProductName} dataName={"Product Name"} />
        <InputText type={"text"} value={description} trigger={setDescription} dataName={"Description"} />
        <div className="flex">
          <InputText type={"number"} value={productPrice} trigger={setProductPrice} dataName={"Price"} />
          <InputText type={"number"} value={productStock} trigger={setProductStock} dataName={"Stock"} />
        </div>

        <div>
          <input type="file" id="productImage" name="productImage" className="text-white" />
        </div>
        <button className="bg-baseblue-200 hover:bg-baseblue-300 py-2 rounded-xl text-white">Save</button>
      </section>
    </>
  );
}
