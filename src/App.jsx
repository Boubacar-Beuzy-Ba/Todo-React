import "./App.css";
import bgImgMobLight from "./assets/bg-mobile-light.jpg";
import bgDesktopLight from "./assets/bg-desktop-light.jpg";
import bgDesktopDark from "./assets/bg-desktop-dark.jpg";
import bgImgMobDark from "./assets/bg-mobile-dark.jpg";
import HeaderComponent from "./components/HeaderComponent";
import InputComponent from "./components/InputComponent";
import TodoBodyComponent from "./components/TodoBodyComponent";
import TodoFooterComponent from "./components/TodoFooterComponent";
import TodoFilterComponent from "./components/TodoFilterComponent";
import React, { useEffect } from "react";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div>
      <picture>
        <source
          srcSet={darkMode ? bgDesktopDark : bgDesktopLight}
          media="(min-width: 600px)"
        ></source>
        <img
          src={darkMode ? bgImgMobDark : bgImgMobLight}
          alt="Background Mobile light"
          className="w-full object-fill sm:h-[300px]"
        />
      </picture>
      <div className="sm:w-[540px] sm:mx-auto">
        <HeaderComponent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <InputComponent />
      </div>

      <div className="bg-white dark:bg-[#393A4B] mx-4 sm:mx-auto sm:w-[541px] rounded-lg mt-4 md:mt-20 h-96 py-1 shadow-lg relative">
        <TodoBodyComponent />
        <TodoBodyComponent />
        <TodoBodyComponent />
        <TodoBodyComponent />
        <TodoBodyComponent />
        <TodoFooterComponent />
      </div>
      <div className="sm:w-[540px] md:hidden sm:mx-auto bg-white dark:bg-[#393A4B] rounded-lg mt-6 h-12 mx-4 py-2 shadow-lg">
        <TodoFilterComponent />
      </div>
      <div className="sm:w-[540px] sm:mx-auto text-center text-sm text-gray-400 mt-16">
        Drag and drop to reorder list
      </div>
    </div>
  );
}

export default App;
