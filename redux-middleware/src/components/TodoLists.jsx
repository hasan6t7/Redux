import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos, removeTodo, toggleTodo } from "../redux/features/todos/todoSlice";

const TodoLists = () => {
  const { items, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("")

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleAddTodo = () => {
    dispatch(addTodo(text));
    setText("");
  }

  console.log(items)

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>
  };

  return (
    <div className="flex flex-col items-center space-y-4 my-20">
      <h2 className="text-xl font-bold">Todo List App with Redux Middleware</h2>

      <div className="flex space-x-2">
        <input
        value={text}
        onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add a task"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <button onClick={handleAddTodo} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Add
        </button>
      </div>

      {/* displaying task */}
      <ul>

        { items.length > 0 && items.map((todo) => (
          <li key={todo.id} className="flex items-center justify-start space-x-4 px-4 py-2 border-b">

                <span onClick={() => dispatch(toggleTodo(todo.id))} className={`${todo.completed ? 'line-through text-gray-500': ''}`}>{todo.title || todo.text}</span>
                <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500 hover:underline">Remove</button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
