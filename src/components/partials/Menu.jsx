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
      <section className="right-0 absolute border-2 bg-white shadow-sm rounded-l-md w-36">
        <ul className="flex flex-col gap-1 text-zinc-500">
          <a href="/dashboard">
            <li className="sm:hidden menu-item">Dashboard</li>
          </a>
          <a href="/explore">
            <li className="sm:hidden menu-item">Explore</li>
          </a>
          <a href="/manage">
            <li className="sm:hidden menu-item">Manage</li>
          </a>
          <a href="/setting">
            <li className="sm:hidden menu-item">Setting</li>
          </a>

          <button className="text-left">
            <li
              className="menu-item"
              onClick={() => {
                handleLogout();
              }}
            >
              Log out
            </li>
          </button>
        </ul>
      </section>
    </>
  );
}
