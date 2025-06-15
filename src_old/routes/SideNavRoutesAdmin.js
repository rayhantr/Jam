import React from "react";
import Dashboard from "pages/Admin/Dashboard";
import Plans from "pages/Admin/Plans";
import Orders from "pages/Admin/Orders";
import Reports from "pages/Admin/Reports";
import Features from "pages/Admin/Features";
import ThemeSettings from "pages/Admin/ThemeSettings";
import HeaderSection from "pages/Admin/HeaderSection";
import AboutSection from "pages/Admin/AboutSection";
import AnalyticSection from "pages/Admin/AnalyticSection";
import Pages from "pages/Admin/Pages";
import Blogs from "pages/Admin/Blogs";
import Users from "pages/Admin/Users";
import Support from "pages/Admin/Support";
import PaymentGateway from "pages/Admin/PaymentGateway";
import Roles from "pages/Admin/Roles";
import Admins from "pages/Admin/Admins";
import Languages from "pages/Admin/Languages";
import SystemEnv from "pages/Admin/SystemEnv";
import SEOSettings from "pages/Admin/SEOSettings";
import CronOption from "pages/Admin/CronOption";
import SiteOption from "pages/Admin/SiteOption";

const InProduction = React.lazy(() => import("components/Misc/InProduction"));

const mainPath = "admin";

export const SideBarRoutes = [
	// User Settings
	{ path: "/" + mainPath + "/dashboard", title: "Dashboard", icon: "fas fa-tachometer-alt", component: Dashboard },
	{ header: "Order Management" },
	{ path: "/" + mainPath + "/plans", title: "Plans", icon: "fas fa-tags", component: Plans },
	{ path: "/" + mainPath + "/orders", title: "Orders", icon: "fas fa-boxes", component: Orders },
	{ path: "/" + mainPath + "/reports", title: "Reports", icon: "fas fa-clipboard-list", component: Reports },
	{ header: "Website Management" },
	{ path: "/" + mainPath + "/section-features", title: "Features Section", icon: "fas fa-columns", component: Features },
	{ path: "/" + mainPath + "/section-theme", title: "Theme Settings", icon: "fas fa-tools", component: ThemeSettings },
	{ path: "/" + mainPath + "/section-header", title: "Header Section", icon: "fas fa-sliders-h", component: HeaderSection },
	{ path: "/" + mainPath + "/section-about", title: "About Section", icon: "fas fa-address-card", component: AboutSection },
	{ path: "/" + mainPath + "/section-analytic", title: "Analytic Section", icon: "fas fa-chart-bar", component: AnalyticSection },
	{ path: "/" + mainPath + "/pages", title: "Pages", icon: "fas fa-file-alt", component: Pages },
	{ path: "/" + mainPath + "/blogs", title: "Blogs", icon: "fas fa-blog", component: Blogs },
	{ header: "Customer Management" },
	{ path: "/" + mainPath + "/users", title: "Users", icon: "fas fa-users", component: Users },
	{ header: "Support Management" },
	{ path: "/" + mainPath + "/support", title: "Support", icon: "fas fa-headset", component: Support },
	{ header: "Options & Settings" },
	{ path: "/" + mainPath + "/payment-gateways", title: "Payment Gateways", icon: "fab fa-cc-visa", component: PaymentGateway },
	{
		title: "Admin and Roles",
		icon: "fas fa-shield-alt",
		children: [
			{ path: "/" + mainPath + "/roles", title: "Roles", component: Roles },
			{ path: "/" + mainPath + "/admins", title: "Admins", component: Admins },
		],
	},
	{
		title: "Settings",
		icon: "fas fa-cogs",
		children: [
			{ path: "/" + mainPath + "/languages", title: "Languages", component: Languages },
			{ path: "/" + mainPath + "/system-env", title: "System Environment", component: SystemEnv },
			{ path: "/" + mainPath + "/seo-settings", title: "SEO Settings", component: SEOSettings },
			{ path: "/" + mainPath + "/menu-settings", title: "Menu Settings", component: InProduction },
		],
	},
	{
		title: "Site Options",
		icon: "fas fa-cog",
		children: [
			{ path: "/" + mainPath + "/cron", title: "Cron Option", component: CronOption },
			{ path: "/" + mainPath + "/site", title: "Site Option", component: SiteOption },
		],
	},
];
