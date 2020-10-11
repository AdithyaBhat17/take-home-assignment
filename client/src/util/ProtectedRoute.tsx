import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import UserLoginPage from "../pages/UserLoginPage";

interface IProtectedRouteProps {
	component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
	exact: boolean;
	path?: string;
}

const ProtectedRoute = (props: IProtectedRouteProps) => {
	if (localStorage.getItem("token")) {
		return <Route exact={props.exact} path={props.path} component={props.component} />;
	} else {
		return <Route path="*" component={UserLoginPage} />;
	}
};

export default ProtectedRoute;
