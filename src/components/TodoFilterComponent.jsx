import { Button } from "antd";

function TodoFilterComponent() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Button type="text" className="font-semibold text-blue-400">
          All
        </Button>
        <Button type="text" className="font-semibold text-gray-400">
          Active
        </Button>
        <Button type="text" className="font-semibold text-gray-400">
          Completed
        </Button>
      </div>
    </>
  );
}

export default TodoFilterComponent;
