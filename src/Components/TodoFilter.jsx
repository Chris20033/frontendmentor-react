function TodoFilter({ filter, setFilter }) {
    return (
        <section className="container mx-auto mt-8">
            <div className="mt-6 flex justify-evenly rounded-md bg-white p-4 dark:bg-gray-800">
                <button
                    onClick={() => setFilter("All")}
                    className={
                        filter == "All"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-black hover:text-blue-600 dark:text-white"
                    }
                >
                    All
                </button>
                <button
                    onClick={() => setFilter("Active")}
                    className={
                        filter == "Active"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-black hover:text-blue-600 dark:text-white"
                    }
                >
                    Active
                </button>
                <button
                    onClick={() => setFilter("Completed")}
                    className={
                        filter == "Completed"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-black hover:text-blue-600 dark:text-white"
                    }
                >
                    Completed
                </button>
            </div>
        </section>
    );
}

export default TodoFilter;
