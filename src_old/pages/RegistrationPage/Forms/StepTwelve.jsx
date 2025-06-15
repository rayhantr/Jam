import React from "react";
import { InputField } from "components/FormFields";

const StepTwelve = (props) => {
	const {
		formField: { contactNo },
	} = props;

	return (
		<div>
			<InputField label={contactNo.label} name={contactNo.name} type="text" placeholder="Contact No" />
		</div>
	);
};

export default StepTwelve;
