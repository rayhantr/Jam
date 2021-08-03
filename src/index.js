/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import MultiStepForm from "./pages/MultiStepForm";
import Profile from "./pages/Profile";
import ProfileUserPublic from "./components/ProfilePage/PublicView/ProfileUserPublic";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./index.scss";
// import "./components/Buttons/button.scss";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		{/* <MultiStepForm /> */}
		<Profile />
		{/* <ProfileUserPublic /> */}
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
