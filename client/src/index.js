/* istanbul ignore file */

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import ProtectedRoute from "./util/ProtectedRoute";

import "./index.css";

const InstancePage = lazy(() => import("./pages/InstancePage"));
const UserLoginPage = lazy(() => import("./pages/UserLoginPage"));

ReactDOM.render(
	<Suspense fallback={<div>Loading...</div>}>
		<Router>
			<Switch>
				<Route exact path={"/"} component={UserLoginPage} />
				<Route exact path={"/login"} component={UserLoginPage} />
				<ProtectedRoute exact path={"/instance"} component={InstancePage} />
				<Route path={"*"} component={UserLoginPage} />
			</Switch>
		</Router>
	</Suspense>,
	document.getElementById("root")
);
