import Navbar from "./components/layouts/Navbar";
import ListData from "./ListData";

import { AppContext } from "./contexts/App.contexts";
import { useContext, useEffect } from "react";

export default function Explore() {
  const { getAllProduct } = useContext(AppContext);

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <Navbar />
      <ListData />
    </>
  );
}
