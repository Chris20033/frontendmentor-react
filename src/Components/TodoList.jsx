import TodoItem from "./TodoItem";

function TodoList({ todos, changeCompleted, deleteTodo }) {
    return (
        <div className="mt-8 rounded-t-md bg-white px-4 transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    changeCompleted={changeCompleted}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
