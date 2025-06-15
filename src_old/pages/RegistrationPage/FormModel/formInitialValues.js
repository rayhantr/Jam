/* eslint-disable import/no-anonymous-default-export */
import registrationFormModel from "./registrationFormModel";

const {
	formField: {
		firstName,
		lastName,
		email,
		catService1,
		catService2,
		expertise,
		expertiseLvl,
		education,
		languageProf,
		languages,
		hourlyRate,
		title,
		overview,
		contactNo,
		address,
		city,
		zipCode,
		country,
	},
} = registrationFormModel;

export default {
	[firstName.name]: "",
	[lastName.name]: "",
	[email.name]: "",
	[catService1.name]: "",
	[catService2.name]: "",
	[expertise.name]: "",
	[expertiseLvl.name]: "",
	[education.name]: "",
	[languageProf.name]: "",
	[languages.name]: "",
	[hourlyRate.name]: "",
	[title.name]: "",
	[overview.name]: "",
	[contactNo.name]: "",
	[address.name]: "",
	[city.name]: "",
	[zipCode.name]: "",
	[country.name]: "",
};
