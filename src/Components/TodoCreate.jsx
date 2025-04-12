import { useState } from "react";

function TodoCreate({ createTodo }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim().length > 0) {
            createTodo(title);
        }

        return setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-5 overflow-hidden rounded-md bg-white pl-4 dark:bg-gray-800"
        >
            <span className="inline-block h-4.5 w-5 rounded-full border-2 dark:border-white"></span>
            <input
                className="h-full w-full py-1 py-4 text-black dark:bg-gray-800 dark:text-gray-300"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
}

export default TodoCreate;
