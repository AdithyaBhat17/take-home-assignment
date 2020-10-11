import React from "react";
import InstanceHeader from "../../components/InstanceHeader";
import InstanceInfo from "../../components/InstanceInfo";
import InstanceContainer from "../../containers/InstanceContainer";

import "./index.scss";

function InstancePage() {
	return (
		<div className="instancePage">
			<InstanceHeader />
			<InstanceContainer />
		</div>
	);
}

export default InstancePage;
