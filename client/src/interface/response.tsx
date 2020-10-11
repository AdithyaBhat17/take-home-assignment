import { IInstanceData } from "./common";

export interface ILoginResponse {
	message: string;
	success: boolean;
}

export interface IInstanceResponse {
	instances: IInstanceData[];
	success: boolean;
}
