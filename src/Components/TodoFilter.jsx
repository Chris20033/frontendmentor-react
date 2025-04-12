function TodoFilter({ filter, setFilter }) {
    return (
        <section className="container mx-auto mt-8">
            <div className="mt-6 flex justify-evenly rounded-md bg-white p-4 transition-all duration-1000 dark:bg-gray-800">
                <button
                    onClick={() => setFilter("All")}
                    className={
                        filter == "All"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-black hover:text-blue-600"
                    }
                >
                    All
                </button>
                <button
                    onClick={() => setFilter("Active")}
                    className={
                        filter == "Active"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-black hover:text-blue-600"
                    }
                >
                    Active
                </button>
                <button
                    onClick={() => setFilter("Completed")}
                    className={
                        filter == "Completed"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-black hover:text-blue-600"
                    }
                >
                    Completed
                </button>
            </div>
        </section>
    );
}

export default TodoFilter;
