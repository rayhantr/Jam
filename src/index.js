/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import MultiStepForm from "./pages/MultiStepForm";
import Profile from "./pages/Profile";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./index.scss";
// import "./components/Buttons/button.scss";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		{/* <MultiStepForm />, */}
		<Profile />,
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
