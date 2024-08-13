import SidebarEdit from "../components/layouts/SidebarEdit";
import Navbar from "../components/layouts/Navbar";
import Table from "../components/Table";
import { ProductContext } from "../contexts/Product.contexts";
import { AuthContext } from "../contexts/Auth.contexts";
import { AppContext } from "../contexts/App.contexts";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Manage() {
  const { getAllProduct } = useContext(AppContext);
  const { isAuth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

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
      <div className="fixed">
        <div className={`flex ${open ? "" : "-translate-x-96"} transition-all ease-in-out duration-500`}>
          <SidebarEdit />
          <div className="flex justify-center items-center">
            <button className="bg-white shadow-md py-7 pr-1 rounded-e-2xl" onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-baseblue-300 size-7">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Table />
    </>
  );
}
