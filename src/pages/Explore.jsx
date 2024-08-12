import Navbar from "../components/layouts/Navbar";
import ListData from "../components/ListData";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/App.contexts";
import { AuthContext } from "../contexts/Auth.contexts";
import { useContext, useEffect } from "react";

export default function Explore() {
  const { getAllProduct } = useContext(AppContext);
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    getAllProduct();
  }, [navigate, getAllProduct]);
  return (
    <>
      <Navbar />
      <ListData />
    </>
  );
}
