import React from "react";
import {
	PlayIcon,
	PauseIcon,
	ClockIcon,
	StopIcon,
} from "@heroicons/react/24/outline/";
import "./timerDisplay.css";

const Timer = ({ onCall, data, onPause, pause, onReset }) => {
	const { hours, minutes, seconds } = data;

	return (
		<div className="timer">
			<span className="timer__data">
				{hours === "" ? "00" : hours < 10 ? "0" + hours : hours}
			</span>
			<span className="timer__data">:</span>
			{minutes === "" ? "00" : minutes < 10 ? "0" + minutes : minutes}
			<span className="timer__data">:</span>
			{seconds === "" ? "00" : seconds < 10 ? "0" + seconds : seconds}
			<span className="timer__data"></span>
			<button className="timer__timer-btn playpause" onClick={onPause}>
				{pause ? (
					<PauseIcon className="h-8 w-8" />
				) : (
					<PlayIcon className="h-8 w-8" />
				)}
			</button>
			<button onClick={onReset} className="timer__timer-btn reset">
				<StopIcon className="h-8 w-8" />
			</button>
			<button onClick={onCall} className="timer__timer-btn set">
				<ClockIcon className="h-8 w-8" />
			</button>
		</div>
	);
};

export default Timer;
