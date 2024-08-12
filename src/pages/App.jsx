import { useState } from "react";

function App() {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-4 bg-baseblue-100 min-h-screen">
        <h1 className="m-7 font-extrabold text-7xl text-white">Welcome to Aksastock</h1>
        <p className="text-white text-xl">Aksastock is a stock management application.</p>

        <div className="bg-white mt-4 px-7 py-3 rounded-lg">
          <a href="/login" className="text-blue-500">
            Sign in here
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
