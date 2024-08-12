import Navbar from "../components/layouts/Navbar";
import { AuthContext } from "../contexts/Auth.contexts";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Setting() {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="m-2 p-4 font-bold text-4xl text-baseblue-200">COMING SOON</h1>
        <p className="max-w-sm text-center text-zinc-500">Setting is not available yet. Go to explore and manage product instead.</p>
      </div>
    </>
  );
}
