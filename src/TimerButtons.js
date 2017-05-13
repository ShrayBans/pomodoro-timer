import React from "react";
// import { Button } from "react-toolbox/lib/button";
// import { Input } from "react-toolbox/lib/input";

const TimerButtons = (props) => {
    const {
        setTimer,
        startTimer,
        resetTimer,
        pauseTimer,
        handleTimerInput,
        handleBreakInput,
        timerInput,
        breakInput,
        mode,
    } = props;

    const startTimerDisplay = () => {
        startTimer();
    }

    const isSetting = mode === "setting";
    const isPaused = mode === "paused";
    const isStopped = mode === "paused" || mode === "setting";
    const isBreakReady = mode === "break-ready";

    return (
        <div>
            {!isStopped && <button label="Pause Timer" onClick={pauseTimer}>Pause Timer</button>}
            {isSetting && <button label="Set Timer" onClick={setTimer}>Set Timer</button>}
            {isSetting && <button label="Start Timer" onClick={startTimerDisplay}>Start Timer</button>}
            {isPaused && <button label="Resume Timer" onClick={startTimerDisplay}>Resume Timer</button>}
            {isBreakReady && <button label="Start Break" onClick={startTimerDisplay}>Start Break</button>}
            {isStopped && <button label="Reset Timer" onClick={resetTimer}>Reset Timer</button>}

            {isSetting &&
                <div>
                    <h3>Timer (in mins)</h3>
                    <input value={timerInput} onChange={handleTimerInput} />
                </div>
            }
            {isSetting &&
                <div>
                    <h3>Break (in mins)</h3>
                    <input value={breakInput} onChange={handleBreakInput} />
                </div>
            }
        </div>
    );
};

export default TimerButtons;
