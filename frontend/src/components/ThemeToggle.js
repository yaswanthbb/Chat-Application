// ThemeToggle.js
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-[#3a3a3a] dark:bg-[#E9F1FF] transition"
    >
      {theme === "dark" ? (
        <MdOutlineLightMode/>
      ) : (
        <MdOutlineDarkMode className="text-white"/>
      )}
    </button>
  );
};

export default ThemeToggle;
