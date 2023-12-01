import TodoFilterComponent from "./TodoFilterComponent";

function TodoFooterComponent(props) {
  return (
    <>
      <div className="flex justify-between font-semibold sm:mx-auto mx-4 md:mx-10 mt-8 text-gray-400 text-sm items-center">
        <div className="">
          <p>{props.data} items left</p>
        </div>
        <div className="md:flex hidden">
          <TodoFilterComponent
            getData={props.getData}
            completedTodo={props.completedTodo}
          />
        </div>
        <div>
          <button
            className="text-sm capitalize text-gray-400 dark:hover:text-white"
            size="small"
            type="text"
            onClick={props.clearCompleted}
          >
            Clear completed
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoFooterComponent;
