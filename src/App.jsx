import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TodoComputed from "./Components/TodoComputed";
import TodoCreate from "./Components/TodoCreate";
import TodoFilter from "./Components/TodoFilter";
import TodoList from "./Components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const filterButton = () => {
        if (filter == "Completed")
            return todos.filter((todo) => todo.completed);
        else if (filter == "Active")
            return todos.filter((todo) => !todo.completed);
        else return todos;
    };

    const changeCompleted = (id) => {
        const newArray = todos.map((todo) =>
            todo.id == id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(newArray);
    };

    const itemsLeft = () => {
        let items = todos.filter((todo) => !todo.completed).length;

        return items;
    };

    const deleteCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />

            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filterButton()}
                        changeCompleted={changeCompleted}
                        deleteTodo={deleteTodo}
                    />
                </DragDropContext>

                <TodoComputed
                    itemsLeft={itemsLeft}
                    deleteCompleted={deleteCompleted}
                />

                <TodoFilter filter={filter} setFilter={setFilter} />

                <Footer />
            </main>
        </div>
    );
};

export default App;
