import { useState } from "react";

function InputComponent({ onSubmit }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(text);
      setText("");
    }
  };
  return (
    <>
      <div className="mx-4 sm:mx-auto mt-8 w-auto">
        <div>
          <input
            type="search"
            className="h-12 p-4 text-black dark:text-white dark:bg-[#393A4B] bg-white rounded-lg w-full clear-right"
            placeholder="Create a new todo ..."
            value={text}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
          />
        </div>
      </div>
    </>
  );
}

export default InputComponent;
