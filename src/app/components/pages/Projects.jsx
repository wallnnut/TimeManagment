import React, { useEffect, useState } from "react";

const Projects = () => {
	const [tasks, setTasks] = useState();
	useEffect(() => {
		fetch("http://localhost:3004/tasks").then((response) =>
			response.json().then((data) => {
				setTasks(data);
			})
		);
	}, []);
	return (
		<div>
			<h1>Все проекты</h1>
			<div>Создать</div>
			<div>
				<h1>Задачи</h1>
				<div>
					<ul>
						{tasks && tasks.map((task) => <li>{task.title}</li>)}
					</ul>
				</div>
			</div>
			<div>Пагинация</div>
		</div>
	);
};

export default Projects;
