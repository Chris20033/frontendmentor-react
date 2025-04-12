import TodoItem from "./TodoItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

function TodoList({ todos, changeCompleted, deleteTodo }) {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                    className="mt-8 rounded-t-md bg-white px-4 dark:bg-gray-800 [&>article]:p-4"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvider) => (
                                <TodoItem
                                    todo={todo}
                                    changeCompleted={changeCompleted}
                                    deleteTodo={deleteTodo}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.dragHandleProps}
                                    {...draggableProvider.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}

                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
}

export default TodoList;
