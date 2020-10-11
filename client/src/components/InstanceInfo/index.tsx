import React from "react";
import Switch from "../Switch";

import "./index.scss";

interface IInstanceInfoProps {
	runningCost: number;
	stoppedCost: number;
	onChangeCurrency: (indianCurrency: boolean) => void;
}

let isIndianCurrency = false;
function InstanceInfo(props: IInstanceInfoProps) {
	return (
		<div className="instanceInfo">
			<div className="instanceInfo__costDetails">
				<div className="instanceInfo__costDetails__cost">
					<div className="instanceInfo__costDetails__cost--running__title">
						{isIndianCurrency ? "\u20B9" : "\u0024"} {props.runningCost.toFixed(2)} / hr
					</div>
					<div className="instanceInfo__costDetails__cost--running__label">Running Instances</div>
				</div>
				<div className="instanceInfo__costDetails__cost">
					<div className="instanceInfo__costDetails__cost--stopped__title">
						{isIndianCurrency ? "\u20B9" : "\u0024"} {props.stoppedCost.toFixed(2)} / hr
					</div>
					<div className="instanceInfo__costDetails__cost--stopped__label">Stopped Instances</div>
				</div>
			</div>
			<div className="instanceInfo__currencyConvertor">
				<div className="instanceInfo__currencyConvertor__value value--INR">INR</div>
				<Switch
					onChangeCurrency={(indianCurrency: boolean) => {
						isIndianCurrency = indianCurrency;
						props.onChangeCurrency(indianCurrency);
					}}
				/>
				<div className="instanceInfo__currencyConvertor__value value--USD">USD</div>
			</div>
		</div>
	);
}

export default InstanceInfo;
