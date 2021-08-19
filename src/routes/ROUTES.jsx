// import React from "react";
// import RenderRoutes from "./RenderRoutes";
import MultiStepForm from "pages/RegistrationPage/MultiStepForm";
import FreelancerProfile from "pages/ProfilePage/Freelancer/FreelancerProfile";
import FreelancerFeed from "pages/Feeds/Freelancer/FreelancerFeed";
import ProfileSettings from "pages/ProfilePage/Freelancer/Settings/ProfileSettings";
import MyProposal from "pages/ProfilePage/Freelancer/MyProposal";

const ROUTES = [
	{ path: "/", exact: true, component: FreelancerFeed },
	{ path: "/profile", exact: true, component: FreelancerProfile },
	{ path: "/profile/settings", component: ProfileSettings },
	{ path: "/profile/myProposal", component: MyProposal },
	{ path: "/register", exact: true, component: MultiStepForm },
];

export default ROUTES;
