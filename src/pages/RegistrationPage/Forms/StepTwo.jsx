import React from "react";
import { SelectField } from "components/FormFields";

const StepTwo = (props) => {
	const {
		formField: { catService1, catService2 },
	} = props;

	return (
		<div>
			<SelectField label={catService1.label} name={catService1.name}>
				<option value="">Select service</option>
				<option value="web">Web and Android Development</option>
				<option value="gfx">Graphics Design</option>
				<option value="cwr">Content Writer</option>
			</SelectField>
			<SelectField label={catService2.label} name={catService2.name}>
				<option value="">Select specific service</option>
				<option value="web">Web Development</option>
				<option value="android">Android Development</option>
				<option value="ui">UI Design</option>
			</SelectField>
		</div>
	);
};

export default StepTwo;
