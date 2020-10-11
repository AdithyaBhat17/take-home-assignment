export interface UserLoginForm {
	email?: string;
	password?: string;
}

export interface IListItem {
	label: string;
	value: string;
}

export interface IInstanceData {
	id: number;
	costPerHour: number;
	name: string;
	provider: string;
	status: "stopped" | "running";
}
