import { AuthContext } from "../../contexts/Auth.contexts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function Menu() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <section className="right-0 fixed border-2 bg-white shadow-sm rounded-l-md w-36 sm:-translate-y-12">
        <ul className="flex flex-col gap-1 text-zinc-500">
          <li className="menu-item">
            <button className="sm:hidden text-left" onClick={() => navigate("/dashboard")}>
              Dashboard
            </button>
          </li>
          <li className="menu-item">
            <button className="sm:hidden text-left" onClick={() => navigate("/explore")}>
              Explore
            </button>
          </li>
          <li className="menu-item">
            <button className="sm:hidden text-left" onClick={() => navigate("/manage")}>
              Manage
            </button>
          </li>
          <li className="menu-item">
            <button className="sm:hidden text-left" onClick={() => navigate("/setting")}>
              Setting
            </button>
          </li>
          <li className="menu-item">
            <button className="text-left" onClick={handleLogout}>
              Log out
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}
