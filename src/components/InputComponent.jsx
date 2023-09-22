import { Input } from "antd";
import RoundCheckComponent from "./RoundCheckComponent";

function InputComponent() {
  return (
    <>
      <div className="mx-4 sm:mx-auto mt-8 bg-white dark:bg-[#393A4B] w-auto">
        <div>
          <Input
            className="h-12 curs"
            placeholder="Create a new todo..."
            prefix={<RoundCheckComponent />}
            allowClear
          />
        </div>
      </div>
    </>
  );
}

export default InputComponent;
