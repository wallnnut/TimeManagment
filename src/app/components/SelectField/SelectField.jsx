import React from "react";
import Select from "react-select";

const SelectField = () => {
	const options = [
		{ value: "Задача1", label: "Задача1" },
		{ value: "Задача2", label: "Задача2" },
		{ value: "Задача3", label: "Задача3" },
	];
	return <Select options={options} />;
};

export default SelectField;
