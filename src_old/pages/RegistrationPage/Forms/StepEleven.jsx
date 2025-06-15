import React from "react";
import { InputField, SelectField } from "components/FormFields";

const StepEleven = (props) => {
	const {
		formField: { address, city, zipCode, country },
	} = props;

	return (
		<div>
			<SelectField label={country.label} name={country.name}>
				<option value="">Select country</option>
				<option value="bd">Bangladesh</option>
				<option value="us">USA</option>
				<option value="in">India</option>
			</SelectField>
			<SelectField label={city.label} name={city.name}>
				<option value="">Select city</option>
				<option value="dhaka">Dhaka</option>
				<option value="ctg">Chittagong</option>
				<option value="london">London</option>
			</SelectField>
			<InputField label={zipCode.label} name={zipCode.name} type="text" placeholder="ZipCode" />
			<InputField label={address.label} name={address.name} type="textarea" placeholder="Address" />
		</div>
	);
};

export default StepEleven;
