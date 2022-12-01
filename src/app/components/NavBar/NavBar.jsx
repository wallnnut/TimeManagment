import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { UserCircleIcon } from "@heroicons/react/24/outline/";

const NavBar = () => {
	return (
		<div className="nav-wrapper">
			<ul className="nav__list">
				<div className="list__wrapper">
					<li className="nav__list-item">
						<Link to="/main">Главная</Link>
					</li>
					<li className="nav__list-item">
						<Link to="/projects">Проекты</Link>
					</li>
					<li className="nav__list-item">
						<Link to="/">Аналитика</Link>
					</li>
				</div>
				<li className="nav__list-item icon">
					<Link to="/user">
						<UserCircleIcon className="h-8 w-8" />
						name
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
