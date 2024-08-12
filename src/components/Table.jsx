import TableItem from "./partials/TableItem";
import { AppContext } from "../contexts/App.contexts";
import { useContext, useState, useEffect } from "react";

export default function Table() {
  const { product } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 7;

  useEffect(() => {
    const storedPage = localStorage.getItem("currentTablePage");
    if (storedPage) {
      setCurrentPage(parseInt(storedPage));
    }
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(product.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    localStorage.setItem("currentTablePage", newPage);
  };
  return (
    <>
      <section className="m-5">
        <h1 className="text-center text-3xl font-bold text-baseblue-300">Product List</h1>
      </section>
      <section className="flex justify-center w-full">
        <table className="border sm:w-4/5">
          <thead className="">
            <tr className="border">
              <th className="p-2 text-baseblue-300 text-center">Product ID</th>
              <th className="p-2 text-baseblue-300 text-center">Product Name</th>
              <th className="p-2 text-baseblue-300 text-center">Price</th>
              <th className="p-2 text-baseblue-300 text-center">Stock</th>
              <th className="p-2 text-baseblue-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <TableItem key={index} product={item} index={index} />
            ))}
          </tbody>
        </table>
      </section>
      <section className="flex justify-center m-5">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)} className="m-2 p-2 border border-blue-800 rounded-md w-10 text-blue-800">
            {page}
          </button>
        ))}
      </section>
    </>
  );
}
