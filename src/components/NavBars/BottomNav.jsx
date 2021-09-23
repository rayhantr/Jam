/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import { Avatar, Button, Collapse, Drawer, makeStyles } from "@material-ui/core";
import { globalCss } from "MaterialTheme";
import { NavLink } from "react-router-dom";
import SearchModal from "components/Modal/SearchModal";
import { Link, withRouter } from "react-router-dom";
import SideNav from "./SideNav";
import { Col, Row } from "react-bootstrap";
import { QuickNav } from "components/Poppers/ProfilePopper";

// Fab styles
const useStyles = makeStyles({
	root: {
		borderRadius: "0.5rem",
		// boxShadow: "none",
	},
	sizeSmall: {
		width: "auto",
		height: "auto",
		minWidth: "3rem",
	},
	label: {
		fontSize: globalCss.fontSize,
	},
});

// drawer styles
const drawerStyles = makeStyles({
	root: {
		width: "calc(100vw - 5.5rem)",
		height: "fill-available",
		// margin: "0.5rem",
		borderRadius: "0.5rem",
	},
});

// bottom nav items
const bNavItems = [
	{ path: "/", title: "Home", icon: <i className="fas fa-home"></i> },
	{ path: "/notifications", title: "Notifications", icon: <i className="fas fa-bell"></i> },
	{ path: "/messages", title: "Messages", icon: <i className="fas fa-comments"></i> },
	{ path: "/profile", title: "Profile", icon: <i className="fas fa-user"></i> },
];

const drawerItems = [
	// User Settings
	{
		path: "#",
		title: "Find Work",
		icon: <i className="fas fa-search-dollar"></i>,
		subNav: [
			{ id: 1, path: "#", title: "Find Work" },
			{ id: 2, path: "#", title: "Saved Jobs" },
			{ id: 3, path: "#", title: "Proposals" },
			{ id: 4, path: "#", title: "Profile" },
			{ id: 5, path: "#", title: "My Stats" },
			{ id: 6, path: "#", title: "JamTalent Readiness Test" },
			{ id: 7, path: "#", title: "My Project Dashboard" },
		],
	},
	{
		path: "#",
		title: "My Jobs",
		icon: <i className="fas fa-briefcase"></i>,
		subNav: [
			{ id: 1, path: "#", title: "My Jobs" },
			{ id: 2, path: "#", title: "All Contracts" },
			{ id: 3, path: "#", title: "Work Diary" },
		],
	},
	{
		path: "#",
		title: "Reports",
		icon: <i className="fas fa-chart-pie"></i>,
		subNav: [
			{ id: 1, path: "#", title: "Overview" },
			{ id: 2, path: "#", title: "My Reports" },
			{ id: 3, path: "#", title: "Billings And Earnings" },
			{ id: 4, path: "#", title: "Connects History" },
			{ id: 5, path: "#", title: "Transaction History" },
			{ id: 6, path: "#", title: "Certificate of Earnings" },
		],
	},
	{ path: "#", title: "FAQ", icon: <i className="fas fa-question"></i> },
	{ path: "#", title: "Help & Support", icon: <i className="fas fa-headset"></i> },
	{ path: "#", title: "Terms & Conditions", icon: <i className="fas fa-tasks"></i> },
];

const BottomNav = () => {
	// material css
	const classes = useStyles();
	const paperCss = drawerStyles();

	// menu button animation control
	const [menuButtons, setMenuButtons] = useState({ openZoom: true, closeZoom: false });

	// collapse control
	const [collapseControl, setCollapseControl] = useState(false);
	const toggleCollapse = () => {
		setCollapseControl(!collapseControl);
	};

	// drawer control
	const [open, setOpen] = useState(false);
	const drawerOpen = () => {
		setOpen(true);
		setMenuButtons({ openZoom: false, closeZoom: true });
	};
	const drawerClose = () => {
		setOpen(false);
		setMenuButtons({ openZoom: true, closeZoom: false });
		setCollapseControl(false);
	};

	// search modal control
	const [srModalOpen, setSrModalOpen] = useState(false);
	const modalOpen = () => {
		setSrModalOpen(true);
	};
	const modalClose = () => {
		setSrModalOpen(false);
	};

	// transition time
	const duration = 300;

	const renderDrawer = (
		<Drawer
			className="d-block d-md-none z-index-2050"
			anchor="left"
			open={open}
			onClose={drawerClose}
			transitionDuration={duration}
			PaperProps={{ classes: { root: paperCss.root }, className: "m-2" }}
		>
			<SideNav itemsList={drawerItems} className="overflow-y-auto mb-auto p-3" />

			{/* user profile card */}
			<div className="user-account-actions position-relative m-3 mt-2 p-3 pb-0 bg-primary-light rounded-3 overflow-hidden flex-shrink-0 rounded-4">
				{/* profile details */}
				<Row className="g-3">
					<Col xs="auto">
						<Avatar component={Link} to="/profile" variant="rounded" alt="User Name" src="" onClick={drawerClose}></Avatar>
					</Col>
					<Col as={Link} to="/profile" onClick={drawerClose}>
						<h6 className="text-secondary">User Name</h6>
						<h6 className="text-gray-light mb-0">username@gmail.com</h6>
					</Col>
				</Row>
				{/* Quick actions */}
				<Collapse in={collapseControl} timeout={duration}>
					<div className="pt-3">
						<QuickNav onClick={drawerClose} />
					</div>
				</Collapse>
				{/* collapse control button */}
				<Button onClick={toggleCollapse} color="secondary" className="w-100 py-2 my-2" disableElevation>
					{collapseControl ? <i className="fas fa-angle-double-down"></i> : <i className="fas fa-angle-double-up"></i>}
				</Button>
			</div>
		</Drawer>
	);

	return (
		<>
			<div className="d-block d-md-none">
				<div className="navbar jamNav-bottom bg-transparent position-fixed z-index-2000 bottom-0 start-0 end-0 p-0">
					<div className="nav-mains bg-secondary flex-grow-1 d-flex justify-content-between align-self-end overflow-hidden">
						{bNavItems.map((item) => {
							const { title, icon, path } = item;
							return (
								<React.Fragment key={title}>
									<Button component={NavLink} exact to={path} className="jamNav-bottom-btn py-4 flex-grow-1" activeClassName="active pt-3">
										{icon}
										{/* indicator */}
										<div className="d-none d-sm-block d-md-none ms-3">{title}</div>
										<span className="jamNav-bottom-indicator position-absolute start-50 translate-middle-x"></span>
									</Button>
								</React.Fragment>
							);
						})}
					</div>

					{/* floating buttons */}
					<div className="nav-menu-btn p-3 d-flex align-self-end overflow-hidden">
						{/* search button */}
						<Zoom in={true} timeout={duration}>
							<Fab aria-label="search" className="me-3" size="small" color="secondary" onClick={modalOpen} classes={{ root: classes.root, sizeSmall: classes.sizeSmall, label: classes.label }}>
								<i className="fas fa-search p-3"></i>
							</Fab>
						</Zoom>
						{/* open menu button */}
						<Zoom
							in={menuButtons.openZoom}
							timeout={duration}
							style={{
								transitionDelay: "200ms",
							}}
						>
							<Fab aria-label="menu open" size="small" color="secondary" onClick={drawerOpen} classes={{ root: classes.root, sizeSmall: classes.sizeSmall, label: classes.label }}>
								<i className="fas fa-bars p-3"></i>
							</Fab>
						</Zoom>
					</div>
				</div>

				{/* menu items with drawer */}
				{renderDrawer}

				{/* drawer close-menu */}
				<div className="nav-menu-close position-fixed bottom-0 end-0 me-3 mb-3 z-index-2100">
					<Zoom
						in={menuButtons.closeZoom}
						timeout={duration}
						style={{
							transitionDelay: "200ms",
						}}
						unmountOnExit
					>
						<Fab aria-label="menu close" size="small" color="secondary" onClick={drawerClose} classes={{ root: classes.root, sizeSmall: classes.sizeSmall, label: classes.label }}>
							<i className="fas fa-times p-3"></i>
						</Fab>
					</Zoom>
				</div>
			</div>

			<SearchModal open={srModalOpen} onClose={modalClose} onClick={modalClose} />
		</>
	);
};

export default withRouter(BottomNav);
