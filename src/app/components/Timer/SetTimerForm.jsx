import React, { useState } from "react";

const SetTimerForm = ({ onChange, visibility, onSubmit }) => {
	return (
		<div className={visibility ? "hidden" : ""}>
			<h1>Form</h1>
			<form onSubmit={onSubmit} action="">
				<p>
					<label htmlFor="">Часы</label>
				</p>
				<input name="hours" onChange={onChange} type="number" />
				<p>
					<label htmlFor="">Минуты</label>
				</p>
				<input name="minutes" onChange={onChange} type="number" />
				<p>
					<label htmlFor="">Секунды</label>
				</p>
				<input name="seconds" onChange={onChange} type="number" />
				<button>Установить таймер</button>
			</form>
		</div>
	);
};

export default SetTimerForm;
