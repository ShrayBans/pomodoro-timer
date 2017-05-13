import React, { Component } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerButtons from "./TimerButtons";

import "./Timer.css";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastMode: "active",
            mode: "setting", //setting, active,  paused, break-ready, break
            seconds: 0,
            timerInput: "",
            breakInput: "",
        };
    }

    setTimer = () => {
        const { timerInput } = this.state;
        if (parseInt(timerInput, 10)) {
            this.setState({ seconds: timerInput * 60 });
        }
    }
    resetTimer = () => {
        const { timerInput } = this.state;
        if (parseInt(timerInput, 10)) {
            this.setState({ seconds: timerInput * 60 });
        }
        this.setState({ mode: "setting" });
    }

    pauseTimer = () => {
        clearInterval(this.timer);
        this.setState({ mode: "paused", lastMode: this.state.mode });
    }

    startTimer = () => {
        const { seconds, mode, lastMode } = this.state
        if (seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
            if (mode === "setting" || mode === "break-ready") {
                console.log("lastMode", lastMode);
                this.setState({ mode: lastMode, seconds: seconds });
            } else {
                this.setState({ mode: lastMode });
            }
        }
    }

    handleTimerInput = (word) => {
        this.setState({ timerInput: word })
    }

    handleBreakInput = (word) => {
        this.setState({ breakInput: word })
    }

    countDown = () => {
        const { seconds } = this.state;
        this.setState({ seconds: seconds - 1 });
        if (seconds < 1) {
            clearInterval(this.timer);
            this.setState({ mode: "break-ready" });
        }
    }
    //
    // componentWillUnmount() {
    //     clearInterval(this.timer);
    // }

    render() {
        const { seconds, timerInput, breakInput, mode } = this.state;
        console.log("moderender", mode);
        return (
            <div className="Timer">
                <div className="Timer-header">
                    <TimerDisplay seconds={seconds} />
                </div>
                <div className="Timer-header">
                    <TimerButtons
                        breakInput={breakInput}
                        timerInput={timerInput}
                        handleTimerInput={this.handleTimerInput}
                        handleBreakInput={this.handleBreakInput}
                        pauseTimer={this.pauseTimer}
                        startTimer={this.startTimer}
                        setTimer={this.setTimer}
                        resetTimer={this.resetTimer}
                        mode={mode} />
                </div>
            </div>
        );
    }
}

export default Timer;
