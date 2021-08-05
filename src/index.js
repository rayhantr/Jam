/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/styles";
import MaterialTheme from "./MaterialTheme";
import MultiStepForm from "./pages/MultiStepForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CustomizedTabs from "./pages/Playground";
import MyProposal from "./components/ProfilePage/Freelancer/MyProposal";
import FreelancerProfile from "./components/ProfilePage/Freelancer/FreelancerProfile";

import "./index.scss";

ReactDOM.render(
	// <React.StrictMode>
	<ThemeProvider theme={MaterialTheme}>
		<Header />
		<main>
			{/* <MultiStepForm /> */}
			{/* <MyProposal /> */}
			{/* <CustomizedTabs /> */}
			<FreelancerProfile />
		</main>
		<Footer />
	</ThemeProvider>,
	// </React.StrictMode>,

	document.getElementById("root")
);

reportWebVitals();
