import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";

function App() {
  const [darkMode, setDarkMode] = useState('dark');

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const themeAttr = htmlElement?.getAttribute("mode");
    const newTheme = themeAttr === "dark" ? "light" : "dark";
    htmlElement?.setAttribute("mode", newTheme);
  }, [darkMode])

  return (
    <main className="min-h-screen w-screen p-10 bg-bgColor">
      <div className="border border-borderColor w-14 h-7 rounded-2xl flex flex-col justify-center px-1 py-2">
        <button 
          className={`text-lg text-textColor transition-all transform duration-500 ${darkMode === 'dark' ? 'translate-x-full m-5' : 'translate-x-0'}`}
          onClick={() => setDarkMode(darkMode === 'dark' ? 'light' : 'dark')}
        >
          {darkMode === 'dark' ? (
            <LuMoonStar />
          ) : (
            <FiSun />
          )}
        </button>
      </div>
    </main>
  );
}

export default App;