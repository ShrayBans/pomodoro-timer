import React, { Component } from "react";
import "./App.css";
import Timer from "./Timer";

class App extends Component {
    render = () =>
        (
            <div className="App">
                <div className="App-header">
                    <h2>Pomodoro Timer</h2>
                </div>
                <Timer />
            </div>
        );
}

export default App;
