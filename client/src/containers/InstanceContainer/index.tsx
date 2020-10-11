import React, { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import InstanceInfo from "../../components/InstanceInfo";
import InstanceTable from "../../components/InstanceTable";

import { IInstanceData } from "../../interface/common";
import { IInstanceResponse } from "../../interface/response";
import { callGetApi, callPutApi } from "../../util/callApi";
import { getInProperFormat, runningInstanceTotalCost, stoppedInstanceTotalCost, updateInstanceStatus } from "./Util";
import { headerList } from "./Constants";

import "./index.scss";

function InstanceContainer(props: RouteComponentProps) {
	const [instanceData, setInstanceData] = useState<IInstanceData[]>([]);
	const [isIndianCurrency, setIsIndianCurrency] = useState<boolean>(false);
	const [runningInstanceCost, setRunningInstanceCost] = useState<number>(0);
	const [stoppedInstanceCost, setStoppedInstanceCost] = useState<number>(0);

	useEffect(() => {
		callGetApi<IInstanceResponse>("/api/instances").then((res) => {
			if (res && res.success) {
				setInstanceData(getInProperFormat(res.instances, isIndianCurrency, false));
				setRunningInstanceCost(runningInstanceTotalCost(res.instances));
				setStoppedInstanceCost(stoppedInstanceTotalCost(res.instances));
			} else {
				props.history.push("/login");
			}
		});
	}, []);

	useEffect(() => {
		if (instanceData.length === 0) return;
		const formattedInstanceData = getInProperFormat(instanceData, isIndianCurrency);
		setInstanceData(formattedInstanceData);
		setRunningInstanceCost(runningInstanceTotalCost(formattedInstanceData));
		setStoppedInstanceCost(stoppedInstanceTotalCost(formattedInstanceData));
	}, [isIndianCurrency]);

	const onChangeInstanceStatus = (selectedRow: IInstanceData) => {
		const status = selectedRow.status === "stopped" ? "start" : "stop";
		callPutApi(`/api/instances/${status}/${selectedRow.id}`, selectedRow).then((res) => {
			console.log("then res ", res, selectedRow);
		});
		const updatedInstanceData = updateInstanceStatus(selectedRow, instanceData);
		setRunningInstanceCost(runningInstanceTotalCost(updatedInstanceData));
		setStoppedInstanceCost(stoppedInstanceTotalCost(updatedInstanceData));
		setInstanceData(updatedInstanceData);
	};

	return (
		<div className="instanceContainer">
			<InstanceInfo
				onChangeCurrency={(isIndianCurrency: boolean) => {
					setIsIndianCurrency(isIndianCurrency);
				}}
				runningCost={runningInstanceCost}
				stoppedCost={stoppedInstanceCost}
			/>
			<InstanceTable
				headerList={headerList}
				bodyList={instanceData}
				onChangeInstanceStatus={(row) => {
					onChangeInstanceStatus(row);
				}}
				isIndianCurrency={isIndianCurrency}
			/>
		</div>
	);
}

export default withRouter(InstanceContainer);
