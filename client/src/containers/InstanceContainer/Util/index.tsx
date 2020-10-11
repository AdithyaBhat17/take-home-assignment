import { IInstanceData } from "../../../interface/common";

export const updateInstanceStatus = (selectedRow: IInstanceData, instanceList: IInstanceData[]) => {
	const tempInstanceData: IInstanceData[] = [...instanceList];
	if (selectedRow.status === "stopped") {
		tempInstanceData[selectedRow.id - 1].status = "running";
	} else if (selectedRow.status === "running") {
		tempInstanceData[selectedRow.id - 1].status = "stopped";
	}
	return tempInstanceData;
};

export const runningInstanceTotalCost = (instanceData: IInstanceData[]) => {
	const cost = instanceData.reduce((total, data, index, array) => {
		if (data.status === "running") {
			return (total += data.costPerHour);
		} else {
			return total;
		}
	}, 0);
	return cost;
};

export const stoppedInstanceTotalCost = (instanceData: IInstanceData[]) => {
	const cost = instanceData.reduce((total, data, index, array) => {
		if (data.status === "stopped") {
			return (total += data.costPerHour);
		} else {
			return total;
		}
	}, 0);
	return cost;
};

export const convertToUSDCurrency = (cost: number, isUSDCurrency: boolean) => {
	return isUSDCurrency ? cost * 70 : cost / 70;
};

export const getInProperFormat = (
	instanceList: IInstanceData[],
	selectedIndianCurrency: boolean,
	convert?: boolean
) => {
	if (convert === false) return instanceList;
	return instanceList.map((data) => {
		if (selectedIndianCurrency) {
			data.costPerHour = convertToUSDCurrency(data.costPerHour, true);
		} else {
			data.costPerHour = convertToUSDCurrency(data.costPerHour, false);
		}
		return data;
	});
};
