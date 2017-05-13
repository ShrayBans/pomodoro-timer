import React, { Component } from "react";
import "./App.css";
import Timer from "./Timer";
import TimerDisplay from "./TimerDisplay";
import ToDoListDisplay from "./ToDoListDisplay";
import ToDoList from "./ToDoList";
import _ from "lodash";
import Chance from "chance";
const chance = new Chance();



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
        const newId = chance.guid();
        const newTodo = { name: toDoInput, uuid: newId };
        if (evt.key === "Enter") {
            this.setState({ toDoInput: "", todos: [...todos, newTodo] });
        }
    }

    selectTodo = (uuid) => {
        this.setState({ selectedToDoUuid: uuid });
    }

    deleteTodo = (uuid) => {
        const { todos } = this.state;
        const newTodos = _.filter(todos, todo => todo.uuid !== uuid)
        this.setState({ todos: newTodos });
    }

    render = () => {
        const { todos, toDoInput, breakInput, timerInput, selectedToDoUuid } = this.state;
        const selectedTodoName = _.find(todos, { uuid: selectedToDoUuid });
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
