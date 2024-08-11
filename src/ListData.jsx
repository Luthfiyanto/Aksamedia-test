import Card from "./components/partials/Card";
import { AppContext } from "./contexts/App.contexts";
import { useContext, useState } from "react";

export default function ListData() {
  const { product } = useContext(AppContext);

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(product.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <section className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-4 p-3">
        {currentItems.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} image={item.image} />
        ))}
      </section>

      <div className="flex justify-center m-5">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)} className="m-2 p-2 border border-blue-800 rounded-md w-10 text-blue-800">
            {page}
          </button>
        ))}
      </div>
    </>
  );
}
