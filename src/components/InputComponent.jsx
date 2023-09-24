import { Input } from "antd";
import RoundCheckComponent from "./RoundCheckComponent";

function InputComponent() {
  return (
    <>
      <div className="mx-4 sm:mx-auto mt-8 w-auto">
        <div>
          {/* <Input
            className="h-12"
            placeholder="Create a new todo..."
            prefix={<RoundCheckComponent />}
            allowClear
          /> */}
          <input
            type="search"
            className="h-12 p-4 text-black dark:text-white dark:bg-[#393A4B] bg-white rounded-lg w-full clear-right"
            placeholder="Create a new todo ..."
          />
        </div>
      </div>
    </>
  );
}

export default InputComponent;
