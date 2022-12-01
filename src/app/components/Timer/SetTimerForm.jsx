import React, { useState } from "react";
import "./SetTimerForm.css";

const SetTimerForm = ({ onChange, visibility, onSubmit }) => {
	return (
		<div className={visibility ? "hidden" : "modal"}>
			<div className="form-wrapper">
				<h1 className="form__title">Установите таймер</h1>
				<form onSubmit={onSubmit}>
					<p className="form__label hours">
						<label htmlFor="">Часы</label>
					</p>
					<input
						className="form__input"
						name="hours"
						onChange={onChange}
						type="number"
					/>
					<p className="form__label hours">
						<label htmlFor="">Минуты</label>
					</p>
					<input
						className="form__input"
						name="minutes"
						onChange={onChange}
						type="number"
					/>
					<p className="form__label hours">
						<label htmlFor="">Секунды</label>
					</p>
					<input
						min="1"
						max="59"
						className="form__input"
						name="seconds"
						onChange={onChange}
						type="number"
					/>
					<button className="form__btn-set">Установить таймер</button>
				</form>
			</div>
		</div>
	);
};

export default SetTimerForm;
