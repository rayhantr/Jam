import React from "react";
import { InputField } from "../../FormFields";

const StepEight = (props) => {
	const {
		formField: { hourlyRate },
	} = props;

	return (
		<div>
			<InputField label={hourlyRate.label} name={hourlyRate.name} type="text" placeholder="Hourly Rate" />
		</div>
	);
};

export default StepEight;
