/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import MultiStepForm from "./pages/MultiStepForm";
import Profile from "./pages/Profile";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<MultiStepForm />,{/* <Profile />, */}
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
