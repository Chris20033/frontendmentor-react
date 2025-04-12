import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";
import React from "react";

const TodoItem = React.forwardRef(({ todo, changeCompleted, deleteTodo, ...props }, ref) => {
    const { id, title, completed } = todo;
    return (
        <div>
            <article {...props} ref={ref} className="flex items-center justify-around gap-4 border-b border-gray-300 bg-white p-3  dark:bg-gray-800">
                <button
                    onClick={() => changeCompleted(id)}
                    className={
                        completed
                            ? "flex h-6 w-6 items-center justify-center rounded-full border-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:border-white"
                            : "inline-block h-6 w-6 rounded-full border-2 dark:border-white"
                    }
                >
                    {completed && <CheckIcon />}
                </button>
                <p
                    className={`grow text-gray-400 dark:text-gray-300 ${completed && "line-through"}`}
                >
                    {title}
                </p>
                <button onClick={() => deleteTodo(id)} className="">
                    <CrossIcon />
                </button>
            </article>
        </div>
    )
})

export default TodoItem;
