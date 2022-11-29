import React from "react";
import {
	PlayIcon,
	PauseIcon,
	ClockIcon,
	StopIcon,
} from "@heroicons/react/24/outline/";

const Timer = ({ onCall, data, onPause, pause, onReset }) => {
	const { hours, minutes, seconds } = data;

	return (
		<div className="timer bg-orange-400 inline-block rounded-lg p-3 text-gray-50">
			<span className="timer__display">
				{hours === "" ? "00" : hours < 10 ? "0" + hours : hours}
			</span>
			<span className="timer__display">:</span>
			{minutes === "" ? "00" : minutes < 10 ? "0" + minutes : minutes}
			<span className="timer__display"></span>
			<span className="timer__display">:</span>
			{seconds === "" ? "00" : seconds < 10 ? "0" + seconds : seconds}
			<span className="timer__display"></span>
			<button className="timer__timer-btn_playpause" onClick={onPause}>
				{pause ? (
					<PlayIcon className="h-6 w-6" />
				) : (
					<PauseIcon className="h-6 w-6" />
				)}
			</button>
			<button onClick={onReset} className="timer__timer-btn_reset">
				<StopIcon className="h-6 w-6" />
			</button>
			<button onClick={onCall} className="timer__timer-btn_set">
				<ClockIcon className="h-6 w-6" />
			</button>
		</div>
	);
};

export default Timer;
