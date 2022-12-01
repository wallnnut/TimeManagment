import React, { useState, useEffect } from "react";
import SelectField from "../SelectField/SelectField";
import TextArea from "../TextArea/TextArea";
import Timer from "../Timer/Timer";
import "./Main.css";
const Main = () => {
	return (
		<div className="container">
			<Timer />
			<SelectField />
			<TextArea />
		</div>
	);
};

export default Main;
