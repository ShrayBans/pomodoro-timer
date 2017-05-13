import React from "react";
// import { Button } from "react-toolbox/lib/button";
// import { Input } from "react-toolbox/lib/input";

const ToDoListDisplay = (props) => {
    const {
        todos,
        selectTodo,
        deleteTodo,
    } = props;

    const todoDisplay = todos.map((todo, i) =>
        <div key={i} onClick={() => selectTodo(todo.uuid)}>
            {todo.name}
            <span onClick={() => deleteTodo(todo.uuid)}>X</span>
        </div>
    );

    return (
        <div>
            {todoDisplay}
        </div>
    );
};

export default ToDoListDisplay;
