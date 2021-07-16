/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";
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

export default [
	// Step 1
	Yup.object().shape({
		[firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
		[lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
		[email.name]: Yup.string().email("Invalid email address").required(`${email.requiredErrorMsg}`),
	}),
	// Step 2
	Yup.object().shape({
		[catService1.name]: Yup.string().nullable().required(`${catService1.requiredErrorMsg}`),
		[catService2.name]: Yup.string().nullable().required(`${catService2.requiredErrorMsg}`),
	}),
	// Step 3
	Yup.object().shape({
		[expertise.name]: Yup.string().required(`${expertise.requiredErrorMsg}`),
	}),
	// Step 4
	Yup.object().shape({
		[expertiseLvl.name]: Yup.string().required(`${expertiseLvl.requiredErrorMsg}`),
	}),
	// Step 5
	Yup.object().shape({
		[education.name]: Yup.string(),
	}),
	// Step 6
	Yup.object().shape({
		[education.name]: Yup.string(),
	}),
	// Step 7
	Yup.object().shape({
		[languageProf.name]: Yup.string().required(`${languageProf.requiredErrorMsg}`),
		[languages.name]: Yup.string(),
	}),
	// Step 8
	Yup.object().shape({
		[hourlyRate.name]: Yup.string().required(`${hourlyRate.requiredErrorMsg}`),
	}),
	// Step 9
	Yup.object().shape({
		[title.name]: Yup.string(),
		[overview.name]: Yup.string(),
	}),
	// Step 10
	Yup.object().shape({
		[education.name]: Yup.string(),
	}),
	// Step 11
	Yup.object().shape({
		[address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
		[city.name]: Yup.string().nullable().required(`${city.requiredErrorMsg}`),
		[zipCode.name]: Yup.string()
			.required(`${zipCode.requiredErrorMsg}`)
			.test("len", `${zipCode.invalidErrorMsg}`, (val) => val && val.length === 4),
		[country.name]: Yup.string().nullable().required(`${country.requiredErrorMsg}`),
	}),
	// Step 12
	Yup.object().shape({
		[contactNo.name]: Yup.string().required(`${contactNo.requiredErrorMsg}`),
	}),
];
