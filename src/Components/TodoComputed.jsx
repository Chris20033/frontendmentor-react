function TodoComputed({ itemsLeft, deleteCompleted }) {
    return (
        <section className="flex justify-between rounded-b-md bg-white p-4 dark:bg-gray-800">
            <span className="text-gray-400">{itemsLeft()} items left</span>
            <button onClick={() => deleteCompleted()} className="text-gray-400">
                Clear Complete
            </button>
        </section>
    );
}

export default TodoComputed;
