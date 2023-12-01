import { Button } from "antd";
import { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";

function TodoItem({ data, onChange, deleteTodo }) {
  const [todoCompleted, setTodoCompleted] = useState(false);

  const handleCheck = () => {
    setTodoCompleted(!todoCompleted);
    onChange && onChange(data.id, !todoCompleted, data);
  };

  return (
    <>
      <div
        key={data.id}
        className="flex mx-4 sm:mx-3 h-12 mt-3 items-center border-b border-gray-200 justify-around content-center"
      >
        <div
          className={
            todoCompleted
              ? "bg-gradient-to-r from-[#55DDFF] to-[#C058F3] rounded-full w-5 h-5 border mr-2 flex items-center justify-center"
              : "rounded-full w-5 h-5 border mr-2 flex items-center justify-center"
          }
        >
          <input
            id={data.id}
            type="checkbox"
            className="hidden"
            onChange={handleCheck}
          />
          <label htmlFor={data.id} className="round-full">
            <CheckOutlined className="w-4 h-4'" />
          </label>
        </div>
        <p
          className={
            todoCompleted
              ? "line-through text-sm grow text-gray-600 dark:text-gray-100"
              : "text-sm grow text-gray-600 dark:text-gray-100"
          }
        >
          {data.name}
        </p>
        <Button
          className="border-none text-gray-500 dark:text-gray-400 shadow-none text-sm text-center"
          shape="circle"
          size="small"
          onClick={() => {
            deleteTodo(data.id);
          }}
        >
          X
        </Button>
      </div>
    </>
  );
}

export default TodoItem;
