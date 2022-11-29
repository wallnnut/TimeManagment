import React, { useState, useEffect } from "react";
import SelectField from "../SelectField/SelectField";
import TextArea from "../TextArea/TextArea";
import Timer from "../Timer/Timer";
const Main = () => {
	return (
		<>
			<Timer />
			<SelectField />
			<TextArea />
		</>
	);
};

export default Main;
