export default function Menu() {
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
          <li className="menu-item">Log out</li>
        </ul>
      </section>
    </>
  );
}
