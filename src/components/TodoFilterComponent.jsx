function TodoFilterComponent(props) {
  return (
    <>
      <div className="flex items-center justify-center gap-10 text-sm p-2">
        <div>
          <button
            className="font-semibold text-blue-400 dark:hover:text-white"
            onClick={props.getData}
          >
            All
          </button>
        </div>
        <div>
          <button
            className="font-semibold text-gray-400 dark:hover:text-white"
            onClick={props.clearCompleted}
          >
            Active
          </button>
        </div>
        <div>
          <button
            className="font-semibold text-gray-400 dark:hover:text-white"
            onClick={props.completedTodo}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoFilterComponent;
