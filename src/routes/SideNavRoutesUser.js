import React from "react";
import Dashboard from "pages/UserLanding/Dashboard";
import TimeTracker from "pages/UserLanding/TimeTracker";
import Support from "pages/UserLanding/Support";
import Reports from "pages/UserLanding/Reports";
import Projects from "pages/UserLanding/Projects";
import Tasks from "pages/UserLanding/Tasks";
import Team from "pages/UserLanding/Team";
import Plans from "pages/UserLanding/Plans";

const InProduction = React.lazy(() => import("components/Misc/InProduction"));

const mainPath = "user";

export const UserDashboardRoutes = [
	// User Settings
	{ path: "/" + mainPath + "/dashboard", title: "Dashboard", icon: "fas fa-tachometer-alt", component: Dashboard },
	{ path: "/" + mainPath + "/time-tracker", title: "Time Tracker", icon: "fas fa-stopwatch", component: TimeTracker },
	{ header: "Analyze" },
	{ path: "/" + mainPath + "/calender", title: "Calender", icon: "fas fa-calendar-alt", component: InProduction },
	{ path: "/" + mainPath + "/reports", title: "Reports", icon: "fas fa-clipboard-list", component: Reports },
	{ header: "Manage" },
	{ path: "/" + mainPath + "/projects", title: "Projects", icon: "fas fa-columns", component: Projects },
	{ path: "/" + mainPath + "/tasks", title: "Tasks", icon: "fas fa-tasks", component: Tasks },
	{ path: "/" + mainPath + "/team", title: "Team", icon: "fas fa-users", component: Team },
	{ path: "/" + mainPath + "/support", title: "Support", icon: "fas fa-headset", component: Support },
	{ path: "/" + mainPath + "/plans", title: "Plans", icon: "fas fa-tags", component: Plans },
];
