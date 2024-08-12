import { createContext, useState } from "react";
import dataUser from "../store/user.json";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(() => {
    const storedAuth = JSON.parse(localStorage.getItem("isAuth"));
    return storedAuth || false;
  });

  const login = async (email, password) => {
    try {
      const user = dataUser.find((user) => user.email === email && user.password === password);
      if (!user) {
        return;
      }
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(user));
    } catch {
      console.log("error");
    }
  };

  const logout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    setIsAuth(false);
  };

  return <AuthContext.Provider value={{ isAuth, setIsAuth, login, logout }}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
