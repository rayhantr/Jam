/* eslint-disable import/no-anonymous-default-export */
export default {
	formId: "registrationForm",
	formField: {
		firstName: {
			name: "firstName",
			label: "First name*",
			requiredErrorMsg: "First name is required",
		},
		lastName: {
			name: "lastName",
			label: "Last name*",
			requiredErrorMsg: "Last name is required",
		},
		catService1: {
			name: "catService1",
			label: "What is the main service you offer?",
			requiredErrorMsg: "Service category is required",
		},
		catService2: {
			name: "catService2",
			label: "Specific Service",
			requiredErrorMsg: "Please select a service",
		},
		expertise: {
			name: "expertise",
			label: "Please select your skill",
			requiredErrorMsg: "Minimum of 1 skill is required",
		},
		expertiseLvl: {
			name: "expertiseLvl",
			label: "What is your level of experience in this field?",
			requiredErrorMsg: "Choose a skill level",
		},
		education: {
			name: "education",
			label: "Education",
		},
		languageProf: {
			name: "languageProf",
			label: "What is your English proficiency?",
			requiredErrorMsg: "English proficiency is required",
		},
		languages: {
			name: "languages",
			label: "Choose other languages",
		},
		hourlyRate: {
			name: "hourlyRate",
			label: "Hourly Rate",
			requiredErrorMsg: "Hourly Rate is required",
		},
		title: {
			name: "title",
			label: "Title",
		},
		overview: {
			name: "overview",
			label: "Overview",
		},
		contactNo: {
			name: "contactNo",
			label: "Mobile Number",
			requiredErrorMsg: "Mobile Number is required",
		},
		email: {
			name: "email",
			label: "Email*",
			requiredErrorMsg: "Email is required",
		},
		address: {
			name: "address",
			label: "Address*",
			requiredErrorMsg: "Address is required",
		},
		city: {
			name: "city",
			label: "City*",
			requiredErrorMsg: "City is required",
		},
		state: {
			name: "state",
			label: "State/Province/Region",
		},
		zipCode: {
			name: "zipCode",
			label: "ZipCode*",
			requiredErrorMsg: "ZipCode is required",
			invalidErrorMsg: "ZipCode is not valid (e.g. 1000)",
		},
		country: {
			name: "country",
			label: "Country*",
			requiredErrorMsg: "Country is required",
		},
		acceptedTerms: {
			name: "acceptedTerms",
			label: "acceptedTerms*",
			requiredErrorMsg: "You have to accept terms",
		},
	},
};
