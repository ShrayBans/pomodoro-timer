import React from "react";

const TimerDisplay = (props) => {
    const { seconds } = props;

    const timeDisplay = (secs) => {
        var sec_num = parseInt(secs, 10);
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) hours   = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        return (hours || "00" ) + ":" + (minutes || "00") + ":" + (seconds || "00");
    }

    return (
        <div>
            { timeDisplay(seconds) }
        </div>
    );
};

export default TimerDisplay;
