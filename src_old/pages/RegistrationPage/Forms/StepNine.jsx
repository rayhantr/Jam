import React from "react";
import { InputField } from "components/FormFields";

const StepNine = (props) => {
	const {
		formField: { title, overview },
	} = props;

	return (
		<div>
			<InputField label={title.label} name={title.name} type="text" placeholder="Title" />
			<InputField label={overview.label} name={overview.name} type="text" placeholder="Overview" />
		</div>
	);
};

export default StepNine;
