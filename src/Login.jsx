export default function Login() {
  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="my-3 font-bold text-3xl text-baseblue-300">Welcome to Aksastore</h1>
        <h3 className="my-3 font-medium text-baseblue-300 text-lg">Sign in</h3>
        <form className="grid grid-cols-1 shadow-md m-6 p-6 w-1/2 md:w-1/3 h-64 text-zinc-500">
          <label htmlFor="email" className="my-3 h-10">
            <input type="email" id="email" name="email" placeholder="" className="border-b-2 focus:border-baseblue-100 w-full transition-all ease-in-out outline-none peer/email" />
            <p className="relative -top-12 peer-focus/email:-top-12 peer-placeholder-shown/email:-top-7 text-sm peer-focus/email:text-sm peer-focus/email:text-baseblue-100 peer-placeholder-shown/email:text-base transition-all ease-in-out">
              Email
            </p>
          </label>
          <label htmlFor="password" className="h-10">
            <input type="password" id="password" name="password" placeholder="" className="border-b-2 focus:border-baseblue-100 w-full transition-all ease-in-out outline-none peer/password" />
            <p className="relative -top-12 peer-focus/password:-top-12 peer-placeholder-shown/password:-top-7 text-sm peer-focus/password:text-sm peer-focus/password:text-baseblue-100 peer-placeholder-shown/password:text-base transition-all ease-in-out">
              Password
            </p>
          </label>
          <a href="" className="relative -top-4 text-right text-xs sm:text-sm">
            Forgot Password?
          </a>
          <button type="submit" className="bg-baseblue-100 px-2 py-1 rounded-full text-white">
            Login
          </button>
        </form>
        <p className="text-sm text-zinc-500">
          Dont have an account?
          <a href="" className="text-baseblue-100">
            {" "}
            Sign Up here
          </a>
        </p>
      </section>
    </>
  );
}
