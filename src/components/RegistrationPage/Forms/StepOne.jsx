import React from "react";
import { InputField } from "../../FormFields";

const StepOne = (props) => {
	const {
		formField: { firstName, lastName, email },
	} = props;

	return (
		<>
			<InputField label={firstName.label} name={firstName.name} type="text" placeholder="Jane" />
			<InputField label={lastName.label} name={lastName.name} type="text" placeholder="Doe" />
			<InputField label={email.label} name={email.name} type="email" placeholder="jane@formik.com" />
		</>
	);
};

export default StepOne;
