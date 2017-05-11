import React, { Component } from "react";
import "./App.css";
import TimerDisplay from "./TimerDisplay";
import TimerMixin from "react-timer-mixin";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    setTimer = () => {

    }
    resetTimer = () => {

    }
    hideTimerInput = () => {

    }


    render() {
        const { seconds } = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Pomodoro Timer</h2>
                </div>
                <TimerDisplay seconds={seconds} />
            </div>
        );
    }
}

export default App;
