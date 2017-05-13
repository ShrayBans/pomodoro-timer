import React, { Component } from "react";
import "./App.css";
import Timer from "./Timer";
import TimerDisplay from "./TimerDisplay";
import ToDoListDisplay from "./ToDoListDisplay";
import ToDoList from "./ToDoList";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerInput: "",
            breakInput: "",
            toDoInput: "",
            todos: [],
            selectedToDoUuid: "",
        };
    }

    //import lodash, import chance

    handleTimerInput = (evt) => {
        this.setState({ timerInput: evt.target.value })
    }

    handleBreakInput = (evt) => {
        this.setState({ breakInput: evt.target.value })
    }

    handleToDoInput = (evt) => {
        this.setState({ toDoInput: evt.target.value })
    }

    handleToDoEnter = (evt) => {
        const { todos, toDoInput } = this.state;
        const newId = todos.length - 1 > -1
                ? todos[todos.length - 1].uuid + 1
                : 1;
        const newTodo = { name: toDoInput, uuid: newId }
        if (evt.key === "Enter") {
            this.setState({ toDoInput: "", todos: [...todos, newTodo] });
        }
    }

    selectTodo = (uuid) => {
        this.setState({ selectedToDoUuid: uuid });
    }

    deleteTodo = (uuid) => {
        const { todos } = this.state;
        const newTodos = todos.filter(todo => todo.uuid !== uuid)
        this.setState({ todos: newTodos });
    }

    render = () => {
        const { todos, toDoInput, breakInput, timerInput, selectedToDoUuid } = this.state;
        let selectedTodoName;
        todos.forEach((todo) => {
            if (todo.uuid === selectedToDoUuid) {
                selectedTodoName = todo.name;
            }
        });
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Pomodoro Timer and To-Do List</h2>
                    Selected Todo: {selectedTodoName || "None"}
                    <br/>
                    Timer: <TimerDisplay type="simple" seconds={timerInput * 60} />
                    Break: <TimerDisplay type="simple" seconds={breakInput * 60}/>
                    Todos: <ToDoListDisplay
                                todos={todos}
                                selectedToDoUuid={selectedToDoUuid}
                                selectTodo={this.selectTodo}
                                deleteTodo={this.deleteTodo}/>
                </div>
                <Timer
                    breakInput={breakInput}
                    timerInput={timerInput}
                    handleTimerInput={this.handleTimerInput}
                    handleBreakInput={this.handleBreakInput}
                    />
                <ToDoList
                    handleToDoEnter={this.handleToDoEnter}
                    handleToDoInput={this.handleToDoInput}
                    toDoInput={toDoInput}/>
            </div>
        );
    }
}

export default App;
