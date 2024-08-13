import Card from "../components/partials/Card";
import { AppContext } from "../contexts/App.contexts";
import { useContext, useState, useEffect } from "react";

export default function ListData() {
  const { product } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 7;

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
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
    localStorage.setItem("currentPage", newPage);
  };
  return (
    <>
      <section className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-4 p-3">
        {currentItems.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </section>

      <div className="flex justify-center dark:bg-darkblue p-5">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)} className="dark:border-zinc-500 m-2 p-2 border border-blue-800 rounded-md w-10 text-blue-800 dark:text-zinc-500">
            {page}
          </button>
        ))}
      </div>
    </>
  );
}
