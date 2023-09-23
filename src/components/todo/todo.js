import React, { useState, useEffect } from "react";
import "./todo.css";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [todosCount, setTodosCount] = useState(0);

  useEffect(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (savedTodoList) {
      setTodoList(savedTodoList);
      setTodosCount(savedTodoList.length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddTodo = () => {
    if (userInput.trim() === "") {
      alert("Enter valid text.");
      return;
    }

    const newTodo = {
      text: userInput,
      uniqueNo: todosCount + 1,
      ischecked: false,
    };

    setTodoList([...todoList, newTodo]);
    setTodosCount(todosCount + 1);
    setUserInput("");
  };

  const handleTodoStatusChange = (todoId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.uniqueNo === todoId) {
        todo.ischecked = !todo.ischecked;
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodoList = todoList.filter((todo) => todo.uniqueNo !== todoId);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="todos-bg-container">
      <div className="container">
        <div className="row">
          <div>
          <div className="logo-cont">
            <h1 className="todos-heading">TO-DO <span className="masscolor">List</span></h1>
          </div>
            <h1 className="create-task-heading">
              Create Task
            </h1>
            <br/>
            <input
              type="text"
              className="inputform"
              placeholder="What needs to be done?"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <br/>
            <br/>
            <button className="logbut" onClick={handleAddTodo}>
              Add
            </button>
            <h1 className="todo-items-heading">
              My Tasks
            </h1>
            <ul className="todo-items-container">
              {todoList.map((todo) => (
                <li
                  key={todo.uniqueNo}
                  className={`todo-item-container d-flex flex-row ${
                    todo.ischecked ? "checked" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={todo.ischecked}
                    onChange={() => handleTodoStatusChange(todo.uniqueNo)}
                  />
                  <div className="label-container">
                    <label
                      htmlFor={`checkbox${todo.uniqueNo}`}
                      className="checkbox-label"
                    >
                      {todo.text}
                    </label>
                    <div className="delete-icon-container">
                      <i className="fa fa-trash dustbin" onClick={() => handleDeleteTodo(todo.uniqueNo)}></i>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <br/>
          </div>
          <div className="col-12">
            <h1 className="credits">Developed by Nihar.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
