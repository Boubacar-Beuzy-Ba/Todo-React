import { Button } from "antd";

function TodoFilterComponent() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Button
          type="text"
          className="font-semibold text-blue-400 dark:focus:text-white active:text-white"
        >
          All
        </Button>
        <Button
          type="text"
          className="font-semibold text-gray-400 dark:focus:text-white"
        >
          Active
        </Button>
        <Button
          type="text"
          className="font-semibold text-gray-400 dark:focus:text-white"
        >
          Completed
        </Button>
      </div>
    </>
  );
}

export default TodoFilterComponent;
