import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth.contexts";
import DarkModeToggle from "../components/partials/ToggleTheme";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Email or Password cannot be empty");
      return;
    }
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="my-3 font-bold text-3xl text-baseblue-300 dark:text-white">Welcome to Aksastore</h1>
        <h3 className="my-3 font-medium text-baseblue-300 text-lg dark:text-white">Sign in</h3>
        <form className="grid grid-cols-1 shadow-md m-6 p-6 w-2/3 md:w-1/2 lg:w-1/3 h-64 text-zinc-500">
          <label htmlFor="email" className="my-3 h-10">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              className="dark:bg-zinc-900 border-b-2 focus:border-baseblue-100 w-full transition-all ease-in-out outline-none peer/email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="relative -top-12 peer-focus/email:-top-12 peer-placeholder-shown/email:-top-7 text-sm peer-focus/email:text-sm peer-focus/email:text-baseblue-100 peer-placeholder-shown/email:text-base transition-all ease-in-out">
              Email
            </p>
          </label>
          <label htmlFor="password" className="h-10">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=""
              className="dark:bg-zinc-900 border-b-2 focus:border-baseblue-100 w-full transition-all ease-in-out outline-none peer/password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="relative -top-12 peer-focus/password:-top-12 peer-placeholder-shown/password:-top-7 text-sm peer-focus/password:text-sm peer-focus/password:text-baseblue-100 peer-placeholder-shown/password:text-base transition-all ease-in-out">
              Password
            </p>
          </label>
          <a href="" className="relative -top-4 text-right text-xs sm:text-sm">
            Forgot Password?
          </a>
          <button type="submit" onClick={(e) => handleSubmit(e)} className="bg-baseblue-100 dark:bg-white px-2 py-1 rounded-full text-white dark:text-darkblue">
            Login
          </button>
        </form>
        <p className="text-sm text-zinc-500">
          Dont have an account?
          <a href="" className="text-baseblue-100 dark:text-white">
            {" "}
            Sign Up here
          </a>
        </p>
      </section>
      <DarkModeToggle />
    </>
  );
}
