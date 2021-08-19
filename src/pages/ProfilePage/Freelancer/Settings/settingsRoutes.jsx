import React from "react";
import PwdSecurity from "./PwdSecurity";
import GetPaid from "./GetPaid";
import ContactInfo from "./ContactInfo";
import BillingMethod from "./BillingMethod";
import MembershipConnects from "./MembershipConnects";
import NotificationS from "./NotificationS";
import ConnectedServices from "./ConnectedServices";
import TaxInfo from "./TaxInfo";
import MyProfile from "./MyProfile";
import Teams from "./Teams";
import MembersPermissions from "./MembersPermissions";

const Contact = () => {
	return <h1>Contact</h1>;
};

const settingsRoutes = [
	// User Settings
	{ path: "/profile/settings", title: "Profile Settings", icon: <i className="fas fa-user-cog"></i>, component: Contact },
	{ path: "/profile/settings/my-profile", title: "My Profile", icon: <i className="fas fa-user-edit"></i>, component: MyProfile },
	{ path: "/profile/settings/pwd-security", title: "Password & Security", icon: <i className="fas fa-lock"></i>, component: PwdSecurity },
	{ path: "/profile/settings/notification", title: "Notification Settings", icon: <i className="fas fa-bell"></i>, component: NotificationS },
	{ path: "/profile/settings/contact-info", title: "Contact Info", icon: <i className="fas fa-address-book"></i>, component: ContactInfo },
	{ path: "/profile/settings/get-paid", title: "Get Paid", icon: <i className="fas fa-wallet"></i>, component: GetPaid },
	{ path: "/profile/settings/my-teams", title: "My Teams", icon: <i className="fas fa-users-cog"></i>, component: Contact },
	{ path: "/profile/settings/connected-services", title: "Connected Services", icon: <i className="fas fa-link"></i>, component: ConnectedServices },
	{ path: "/profile/settings/home", title: "Billing Methods", icon: <i className="fas fa-file-invoice-dollar"></i>, component: BillingMethod },
	// Company Settings
	{ path: "/profile/settings/membership-connects", title: "Membership & Connects", icon: <i className="fas fa-project-diagram"></i>, component: MembershipConnects },
	{ path: "/profile/settings/agency", title: "Agency Settings", icon: <i className="fas fa-building"></i>, component: Contact },
	{ path: "/profile/settings/teams", title: "Teams", icon: <i className="fas fa-users-cog"></i>, component: Teams },
	{ path: "/profile/settings/members-permissions", title: "Members & Permissions", icon: <i className="fas fa-handshake"></i>, component: MembersPermissions },
	{ path: "/profile/settings/tax-info", title: "Tax Information", icon: <i className="fas fa-funnel-dollar"></i>, component: TaxInfo },
];

export default settingsRoutes;
