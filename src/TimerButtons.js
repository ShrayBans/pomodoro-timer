import React from "react";
// import { Button } from "react-toolbox/lib/button";
import { Input } from "react-toolbox/lib/input";

const TimerButtons = (props) => {
    const {
        setTimer,
        startTimer,
        resetTimer,
        pauseTimer,
        handleTimerInput,
        handlebreakInput,
        timerInput,
        breakInput,
        mode,
    } = props;

    const startTimerDisplay = () => {
        startTimer();
    }
    const isSetting = mode === "setting";
    const isStopped = mode === "paused" || mode === "setting";
    const isBreakReady = mode === "break-ready";

    return (
        <div>
            {!isStopped && <button label="Pause Timer" onClick={pauseTimer}>Pause Timer</button>}
            {isStopped && <button label="Set Timer" onClick={setTimer}>Set Timer</button>}
            {isStopped && <button label="Start Timer" onClick={startTimerDisplay}>Start Timer</button>}
            {isBreakReady && <button label="Start Break" onClick={startTimerDisplay}>Start Break</button>}
            {isStopped && <button label="Reset Timer" onClick={resetTimer}>Reset Timer</button>}
            {isSetting && <input type='number' label='Timer (in mins)' value={timerInput} onChange={handleTimerInput}  />}
            {isSetting && <input type='number' label='Break (in mins)' value={breakInput} onChange={handlebreakInput}  />}
        </div>
    );
};

export default TimerButtons;
