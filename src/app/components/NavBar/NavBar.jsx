import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	console.log(Date.now());
	return (
		<div className=" bg-orange-400 font-mono">
			<ul className=" text-gray-100 flex justify-between">
				<div className="flex p-4">
					<li className="mr-8">
						<Link to="/main">Главная</Link>
					</li>
					<li className="mr-8">
						<Link to="/projects">Проекты</Link>
					</li>
					<li className="mr-8">
						<Link to="/">Аналитика</Link>
					</li>
				</div>
				<li className="mr-8 p-4">
					<Link to="/user">Пользователь</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
