export const getStatusClassName = (status: "running" | "stopped") => {
	if (status === "stopped") {
		return "instanceTable__table__tableBody__row__column column__4 status--stopped";
	} else {
		return "instanceTable__table__tableBody__row__column column__4 status--running";
	}
};

export const getActionClassName = (status: "running" | "stopped") => {
	return status === "running"
		? "instanceTable__table__tableBody__row__column column__5 action--stop"
		: "instanceTable__table__tableBody__row__column column__5 action--start";
};

export const getAction = (status: "running" | "stopped") => {
	return status === "running" ? "stop" : "start";
};
