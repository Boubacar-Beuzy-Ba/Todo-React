import "./App.css";
import bgImgMobLight from "./assets/bg-mobile-light.jpg";
import bgDesktopLight from "./assets/bg-desktop-light.jpg";
import bgDesktopDark from "./assets/bg-desktop-dark.jpg";
import bgImgMobDark from "./assets/bg-mobile-dark.jpg";
import HeaderComponent from "./components/HeaderComponent";
import InputComponent from "./components/InputComponent";
import TodoBodyComponent from "./components/TodoBodyComponent";
import React, { useEffect } from "react";
import { useState } from "react";
import todoLists from "./data/todos.json";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [theme, setTheme] = useState("dark");
  const [todo, setTodo] = useState(todoLists);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

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
  const addTodo = (newTodo) => {
    setTodo([
      ...todo,
      { id: Math.random(), name: newTodo, completed: "false" },
    ]);
  };

  function handleDeleteTodo(id) {
    setTodo((prevTodo) => prevTodo.filter((item) => item.id !== id));
    console.log(`Todo Item with ID ${id} successfully deleted.`);
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
        <InputComponent onSubmit={addTodo} deleteTodo={handleDeleteTodo} />
      </div>

      <div className="bg-white dark:bg-[#393A4B] mx-4 sm:mx-auto sm:w-[541px] rounded-lg mt-4 md:mt-20 h-96 py-1 shadow-lg relative">
        <TodoBodyComponent
          data={getCurrentPageItems()}
          deleteTodo={handleDeleteTodo}
          currentPage={currentPage}
          totalPages={Math.ceil(todo.length / itemsPerPage)}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          darkMode={darkMode}
        />
      </div>
      <div className="sm:w-[540px] sm:mx-auto text-center text-sm text-gray-400 mt-16">
        Drag and drop to reorder list
      </div>
    </div>
  );
  function getCurrentPageItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return todo.slice(startIndex, endIndex);
  }
}

export default App;
