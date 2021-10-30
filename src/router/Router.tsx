import React from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/login/Login";
import { Home } from "../components/pages/home/Home";
import { Update } from "../components/pages/home/Update";
import { Page404 } from "../components/pages/Page404";

export const Router = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Login />
			</Route>
			<Route path="/home">
				<Home />
			</Route>
			<Route path="/Update">
				<Update />
			</Route>
			<Route path="*">
				<Page404 />
			</Route>
		</Switch>
	);
};



