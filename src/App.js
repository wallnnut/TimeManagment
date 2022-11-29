import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./app/components/NavBar/NavBar";
import Main from "./app/components/pages/Main";
import Projects from "./app/components/pages/Projects";
import UserPage from "./app/components/pages/UserPage";
function App() {
	return (
		<div className="font-family-mono">
			<header>
				<NavBar />
			</header>
			<Switch>
				<Route exact path="/main" component={Main} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/user" component={UserPage} />
			</Switch>
		</div>
	);
}

export default App;
