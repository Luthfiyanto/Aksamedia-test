function App() {
  return (
    <>
      <section className="flex flex-col justify-center sm:items-center gap-2 sm:gap-4 bg-baseblue-100 min-h-screen">
        <h1 className="p-7 font-extrabold text-6xl text-white sm:text-7xl sm:text-center">Welcome to Aksastock</h1>
        <p className="p-7 text-white text-xl sm:text-center">Aksastock is a stock management application.</p>

        <div className="bg-white m-6 mt-4 px-7 py-3 rounded-lg">
          <a href="/login" className="text-blue-500">
            Sign in here
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
