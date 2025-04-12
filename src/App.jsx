import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import CrossIcon from "./Components/icons/CrossIcon";
import TodoComputed from "./Components/TodoComputed";
import TodoCreate from "./Components/TodoCreate";
import TodoFilter from "./Components/TodoFilter";
import TodoList from "./Components/TodoList";

// const initialStateTodos = [
//     {
//         id: 1,
//         title: "Go to the gym",
//         completed: true,
//     },
//     {
//         id: 2,
//         title: "Complete JS bluuweb course",
//         completed: false,
//     },
//     {
//         id: 3,
//         title: "Meditation",
//         completed: false,
//     },
//     {
//         id: 4,
//         title: "Pick up childrens at school",
//         completed: false,
//     },
//     {
//         id: 5,
//         title: "Complete App React",
//         completed: true,
//     },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])  

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

    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />

            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={filterButton()}
                    changeCompleted={changeCompleted}
                    deleteTodo={deleteTodo}
                />

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
