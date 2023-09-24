import { Button } from "antd";
import TodoFilterComponent from "./TodoFilterComponent";

function TodoFooterComponent() {
  return (
    <>
      <div className="flex justify-between sm:mx-auto mx-4 md:mx-10 mt-8 text-gray-400 text-sm items-center">
        <div>
          <p>5 items left</p>
        </div>
        <div className="md:flex hidden">
          <TodoFilterComponent />
        </div>
        <div>
          <Button
            className="text-sm capitalize text-gray-400 dark:focus:text-white"
            size="small"
            type="text"
          >
            Clear completed
          </Button>
        </div>
      </div>
    </>
  );
}

export default TodoFooterComponent;
