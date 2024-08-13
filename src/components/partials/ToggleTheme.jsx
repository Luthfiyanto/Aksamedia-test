import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <button onClick={toggleDarkMode} className="right-4 bottom-4 fixed bg-baseblue-200 dark:bg-darkblue shadow-sm dark:shadow-white p-2 rounded-full text-white dark:text-white transition-all animate-bounce ease-in-out">
      {darkMode ? "🌜" : "🌞"}
    </button>
  );
}
