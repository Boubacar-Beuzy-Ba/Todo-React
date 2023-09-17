import { Button } from "antd";
import RoundCheckComponent from "./RoundCheckComponent";

function TodoBodyComponent() {
  return (
    <>
      <div className="flex mx-4 sm:mx-3 h-12 mt-3 items-center border-b border-gray-200 justify-around content-center">
        <RoundCheckComponent />
        <p className="text-sm grow text-gray-500">
          Complete online Javascript course
        </p>
        <Button
          className="border-none text-gray-300 shadow-none text-sm text-center"
          shape="circle"
          size="small"
        >
          X
        </Button>
      </div>
    </>
  );
}

export default TodoBodyComponent;
