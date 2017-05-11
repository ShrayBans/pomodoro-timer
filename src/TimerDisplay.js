import React, { Component } from 'react';
import './Timer.css';

class TimerDisplay extends Component {
  render() {
      const { seconds } = this.props;
    return (
        <div className="Timer">
            <div className="Timer-header">
                { seconds }
            </div>

        </div>
    );
  }
}

export default TimerDisplay;
