import React from "react";
// import { Button } from "react-toolbox/lib/button";
// import { Input } from "react-toolbox/lib/input";

const TimerButtons = (props) => {
    const {
        toDoInput,
        handleToDoInput,
        handleToDoEnter,
    } = props;

    return (
        <div>
            <div>
                <h3>Enter Your To-Dos Here: </h3>
                <input value={toDoInput} onChange={handleToDoInput} onKeyPress={handleToDoEnter}/>
            </div>
        </div>
    );
};

export default TimerButtons;
