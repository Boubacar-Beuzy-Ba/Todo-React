import { Button, Pagination } from "antd";
import TodoFooterComponent from "./TodoFooterComponent";
import TodoFilterComponent from "./TodoFilterComponent";
import TodoItem from "./TodoItem";

function TodoBodyComponent(props) {
  return (
    <div>
      {props.data &&
        props.data.map((data) => {
          return (
            <TodoItem key={data.id} data={data} deleteTodo={props.deleteTodo} />
          );
        })}
      <Pagination
        current={props.currentPage}
        total={props.totalPages * props.itemsPerPage}
        pageSize={props.itemsPerPage}
        onChange={(page) => props.onPageChange(page)}
        className={`flex items-center justify-end space-x-2 my-4 mr-4 ${
          props.darkMode ? "text-white" : "text-black"
        }`}
        prevIcon={
          <div className={props.darkMode ? "text-white" : "text-black"}>
            {"< Prev"}
          </div>
        }
        nextIcon={
          <div className={props.darkMode ? "text-white" : "text-black"}>
            {"Next >"}
          </div>
        }
        itemRender={(current, type, originalElement) => {
          if (type === "prev" || type === "next") {
            return originalElement;
          }
          return (
            <div
              className={`${
                current === props.currentPage ? "bg-gray-700 text-white" : ""
              } ${props.darkMode ? "text-white" : "text-black"} `}
            >
              {current}
            </div>
          );
        }}
      />
      <TodoFooterComponent
        data={props.data.length}
        clearCompleted={props.clearCompleted}
        getData={props.getData}
        completedTodo={props.completedTodo}
      />
      <div className="sm:w-[540px] md:hidden sm:mx-auto bg-white dark:bg-[#393A4B] rounded-lg mt-6 h-12 mx-4 py-2 shadow-lg">
        <TodoFilterComponent
          getData={props.getData}
          clearCompleted={props.clearCompleted}
          completedTodo={props.completedTodo}
        />
      </div>
    </div>
  );
}

export default TodoBodyComponent;
