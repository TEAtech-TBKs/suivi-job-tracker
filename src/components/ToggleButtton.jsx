import { useEffect, useState } from "react";

const ToggleButton = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="flex items-center gap-3  fixed top-0 -bottom-80 -right-2 z-50">
      {/* Label for accessibility */}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
      </span>

      <button
        onClick={() => setDark((prev) => !prev)}
        className={`
          relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none
          ${dark ? "bg-[rgb(var(--accent))]" : "bg-[rgb(var(--accent))]"} 
        `}
      >
        {/* The Text (ON/OFF) */}
        <span
          className={`
            absolute text-[10px] font-bold transition-opacity duration-300
            ${dark ? "left-2 text-white opacity-100" : "left-2 opacity-0"}
          `}
        >
          ON
        </span>
        <span
          className={`
            absolute text-[10px] font-bold transition-opacity duration-300
            ${!dark ? "right-2 text-gray-500 opacity-100" : "right-2 opacity-0"}
          `}
        >
          OFF
        </span>

        {/* The Sliding Circle */}
        <span
          className={`
            inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300
            ${dark ? "translate-x-9" : "translate-x-1"}
          `}
        />
      </button>
    </div>
  );
};

export default ToggleButton;