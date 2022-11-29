import React, { useState, useEffect } from "react";
import SetTimerForm from "./SetTimerForm";
import TimerDisplay from "./TimerDisplay";
const Timer = () => {
	const [visibility, setVisibility] = useState(true);
	const [timer, setTimer] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	const [active, setActive] = useState(false);
	const handleReset = () => {
		setActive((prevState) => !prevState);
		setTimer({
			hours: 0,
			minutes: 0,
			seconds: 0,
		});
	};

	useEffect(() => {
		const timerId = setInterval(() => {
			active &&
				setTimer((prevState) => ({
					...prevState,
					hours:
						prevState.minutes === 0 && prevState.hours
							? prevState.hours - 1
							: prevState.hours,
					minutes:
						prevState.seconds === 0 && prevState.minutes
							? prevState.minutes - 1
							: prevState.minutes,
					seconds: prevState.seconds > 0 ? prevState.seconds - 1 : 59,
				}));
		}, 1000);
		return () => clearInterval(timerId);
	}, [active]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setVisibility(true);
		setActive((prevState) => !prevState);
	};
	const handlePauseStart = () => {
		setActive((prevState) => !prevState);
	};
	const handleChange = ({ target }) => {
		setTimer((prevState) => ({
			...prevState,
			[target.name]: target.value,
		}));
	};
	const handleCallForm = () => {
		setVisibility((prevState) => !prevState);
	};
	return (
		<>
			<TimerDisplay
				pause={active}
				onPause={handlePauseStart}
				data={timer}
				onCall={handleCallForm}
				onReset={handleReset}
			/>
			<SetTimerForm
				onChange={handleChange}
				visibility={visibility}
				onSubmit={handleSubmit}
			/>
		</>
	);
};

export default Timer;
