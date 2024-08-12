import { useRef, useState, useEffect } from "react";
import Menu from "../partials/Menu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  // get data user from local storage
  const dataUser = JSON.parse(localStorage.getItem("user"));

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);
  return (
    <>
      <nav className="top-0 z-30 sticky">
        <div className="flex justify-between items-center bg-baseblue-100 p-4 text-white">
          <h1 className="font-bold text-xl">Aksastock</h1>
          <ul className="flex gap-2">
            <li className="nav-item">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a href="/explore">Explore</a>
            </li>
            <li className="nav-item">
              <a href="/manage">Manage</a>
            </li>
            <li className="nav-item">
              <a href="/setting">Setting</a>
            </li>
          </ul>
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="flex items-center gap-2"
          >
            <p>{dataUser.name}</p>
            <img src={dataUser.image} alt="image" className="rounded-full w-10 h-10" />
          </button>
        </div>
      </nav>
      {showMenu && (
        <div ref={menuRef} className="transition-all ease-in-out">
          <Menu />
        </div>
      )}
    </>
  );
}
