/* eslint-disable no-unused-vars */
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import MaterialTheme from "./MaterialTheme";
import MultiStepForm from "./pages/MultiStepForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomizedTabs from "./pages/Playground";
import MyProposal from "./components/ProfilePage/Freelancer/MyProposal";
import FreelancerProfile from "./components/ProfilePage/Freelancer/FreelancerProfile";
import FreelancerFeed from "./components/Feeds/Freelancer/FreelancerFeed";

import "./index.scss";

function App() {
	return (
		<ThemeProvider theme={MaterialTheme}>
			<Header />
			<main>
				{/* <MultiStepForm /> */}
				{/* <MyProposal /> */}
				{/* <CustomizedTabs /> */}
				{/* <FreelancerProfile /> */}
				<FreelancerFeed />
			</main>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
