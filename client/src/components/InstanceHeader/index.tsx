import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./index.scss";

function InstanceHeader(props: RouteComponentProps) {
	const logout = () => {
		localStorage.clear();
		props.history.push("/login");
	};

	return (
		<div className="instanceHeader">
			<div className="instanceHeader__title">Dashboard</div>
			<div
				className="instanceHeader__logout"
				onClick={() => {
					logout();
				}}
			>
				logout
			</div>
		</div>
	);
}

export default withRouter(InstanceHeader);
