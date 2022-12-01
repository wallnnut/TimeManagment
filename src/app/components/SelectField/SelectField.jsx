import React from "react";
import Select from "react-select";
import "./SelectField.css";

const SelectField = () => {
	const options = [
		{ value: "Задача1", label: "Задача1" },
		{ value: "Задача2", label: "Задача2" },
		{ value: "Задача3", label: "Задача3" },
	];
	return (
		<div className="select">
			<Select
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						backgroundColor: "rgb(43,43,43);",
						maxWidth: "300px",
						margin: "0 auto",
					}),
				}}
				options={options}
			/>
		</div>
	);
};

export default SelectField;

