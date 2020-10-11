import React from "react";
import { IInstanceData } from "../../interface/common";

import "./index.scss";
import { getStatusClassName, getActionClassName, getAction } from "./Util";

interface IInstanceTableProps {
	headerList: string[];
	bodyList: IInstanceData[];
	onChangeInstanceStatus: (selectedRow: IInstanceData) => void;
	isIndianCurrency: boolean;
}

function InstanceTable(props: IInstanceTableProps) {
	return (
		<div className="instanceTable">
			<div className="instanceTable__title">Instances</div>
			<div className="instanceTable__table">
				<div className="instanceTable__table__tableHeader">
					{props.headerList.map((header, index) => {
						return (
							<div className={`instanceTable__table__tableHeader__head head__${index + 1}`}>{header}</div>
						);
					})}
				</div>
				<div className="instanceTable__table__tableBody">
					{props.bodyList.map((row, index) => {
						return (
							<div className="instanceTable__table__tableBody__row" key={row.id}>
								<div className="instanceTable__table__tableBody__row__column column__1">{row.id}</div>
								<div className="instanceTable__table__tableBody__row__column column__2">{row.name}</div>
								<div className="instanceTable__table__tableBody__row__column column__3">
									{props.isIndianCurrency ? "\u20B9" : "\u0024"} {row.costPerHour.toFixed(2)}
								</div>
								<div className={getStatusClassName(row.status)}>{row.status}</div>
								<div
									className={getActionClassName(row.status)}
									onClick={() => props.onChangeInstanceStatus(row)}
								>
									{getAction(row.status)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default InstanceTable;
