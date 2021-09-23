import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import SideNav, { SideNavComponent } from "components/NavBars/SideNav";
import { SideNavResponsive } from "components/NavBars/SideNav";
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
import InProduction from "components/Misc/InProduction";

const settingsRoutes = [
	// User Settings
	{ path: "/profile/settings", title: "Profile Settings", icon: <i className="fas fa-user-cog fa-fr"></i>, component: InProduction },
	{ path: "/profile/settings/my-profile", title: "My Profile", icon: <i className="fas fa-user-edit fa-fr"></i>, component: MyProfile },
	{ path: "/profile/settings/pwd-security", title: "Password & Security", icon: <i className="fas fa-lock fa-fr"></i>, component: PwdSecurity },
	{ path: "/profile/settings/notification", title: "Notification Settings", icon: <i className="fas fa-bell fa-fr"></i>, component: NotificationS },
	{ path: "/profile/settings/contact-info", title: "Contact Info", icon: <i className="fas fa-address-book fa-fr"></i>, component: ContactInfo },
	{ path: "/profile/settings/get-paid", title: "Get Paid", icon: <i className="fas fa-wallet fa-fr"></i>, component: GetPaid },
	{ path: "/profile/settings/my-teams", title: "My Teams", icon: <i className="fas fa-users-cog fa-fr"></i>, component: InProduction },
	{ path: "/profile/settings/connected-services", title: "Connected Services", icon: <i className="fas fa-link fa-fr"></i>, component: ConnectedServices },
	{ path: "/profile/settings/home", title: "Billing Methods", icon: <i className="fas fa-file-invoice-dollar fa-fr"></i>, component: BillingMethod },
	// Company Settings
	{ path: "/profile/settings/membership-connects", title: "Membership & Connects", icon: <i className="fas fa-project-diagram fa-fr"></i>, component: MembershipConnects },
	{ path: "/profile/settings/agency", title: "Agency Settings", icon: <i className="fas fa-building fa-fr"></i>, component: InProduction },
	{ path: "/profile/settings/teams", title: "Teams", icon: <i className="fas fa-users-cog fa-fr"></i>, component: Teams },
	{ path: "/profile/settings/members-permissions", title: "Members & Permissions", icon: <i className="fas fa-handshake fa-fr"></i>, component: MembersPermissions },
	{ path: "/profile/settings/tax-info", title: "Tax Information", icon: <i className="fas fa-funnel-dollar fa-fr"></i>, component: TaxInfo },
];

const ProfileSettings = () => {
	return (
		// <Container fluid="lg" className="my-3 my-lg-4 px-0 px-md-3">
		<div className="pt-3 pt-md-0">
			<Row className="g-0 g-md-3 mt-5 mt-md-0">
				<SideNavResponsive itemsList={settingsRoutes} header="Settings" />

				<Col xs={12} md={3} className="d-none d-md-block">
					<Card className="p-3 sticky-top-2">
						<SideNav itemsList={settingsRoutes} />
					</Card>
				</Col>
				{/* Nav Components */}
				<Col xs={12} md={9}>
					<SideNavComponent itemsList={settingsRoutes} />
				</Col>
			</Row>
		</div>

		// </Container>
	);
};

export default ProfileSettings;
