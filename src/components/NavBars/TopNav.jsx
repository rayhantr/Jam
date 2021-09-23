import React, { useState } from "react";
import { AppBar, Avatar, Badge, Button, List, ListItem, ListItemText, makeStyles, Toolbar, Tooltip, Zoom } from "@material-ui/core";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import NavPopper from "components/Poppers/NavPopper";
import NotificationList from "components/NotificationList/NotificationList";
import ProfilePopper from "components/Poppers/ProfilePopper";
import MessageList from "components/MessageList/MessageList";

// icon button css
const useStyles = makeStyles((theme) => ({
	root: {
		padding: "1rem",
		fontSize: "1rem",
		borderRadius: "0.5rem",
	},
	badge: {
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.5s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	smallAvatar: {
		width: "2rem",
		height: "2rem",
	},
	avatarButton: {
		padding: "0.5rem",
		borderRadius: "0.5rem",
	},
	navLink: {
		borderRadius: "0.5rem",

		"&:first-child": {
			marginLeft: "0 !important",
		},
		"&:last-child": {
			marginRight: "0 !important",
		},
	},
	tooltip: {
		fontSize: "0.85rem",
	},
	disabledBtn: {
		color: `${theme.palette.primary.main} !important`,
	},
}));

const navItems = [
	{
		id: 1,
		path: "#",
		title: "Find Work",
		menuId: "find-work",
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
		id: 2,
		path: "#",
		title: "My Jobs",
		menuId: "my-jobs",
		subNav: [
			{ id: 1, path: "#", title: "My Jobs" },
			{ id: 2, path: "#", title: "All Contracts" },
			{ id: 3, path: "#", title: "Work Diary" },
		],
	},
	{
		id: 3,
		path: "#",
		title: "Reports",
		menuId: "reports",
		subNav: [
			{ id: 1, path: "#", title: "Overview" },
			{ id: 2, path: "#", title: "My Reports" },
			{ id: 3, path: "#", title: "Billings And Earnings" },
			{ id: 4, path: "#", title: "Connects History" },
			{ id: 5, path: "#", title: "Transaction History" },
			{ id: 6, path: "#", title: "Certificate of Earnings" },
		],
	},
];

// Message popper panel
const MessagePop = ({ classes, activeRoute }) => {
	// tooltip control
	const [tooltipCtrl, setTooltipCtrl] = useState(false);
	const handleTooltipShow = () => {
		setTooltipCtrl(true);
	};
	const handleTooltipClose = () => {
		setTooltipCtrl(false);
	};

	return (
		<PopupState variant="popper" popupId="message-popper">
			{(popupState) => (
				<>
					<Tooltip
						title="Messages"
						aria-label="messages"
						open={popupState.isOpen ? false : tooltipCtrl}
						disableHoverListener
						onMouseEnter={handleTooltipShow}
						onMouseLeave={handleTooltipClose}
						TransitionComponent={Zoom}
						classes={{ tooltip: classes.tooltip }}
					>
						<Button
							{...bindToggle(popupState)}
							aria-label="show messages"
							aria-haspopup="true"
							color="inherit"
							className={`me-2 bg-primary-light ${popupState.isOpen ? "text-primary" : ""}`}
							classes={{ root: classes.root, disabled: classes.disabledBtn }}
							disabled={activeRoute ? true : false}
						>
							<Badge variant="dot" color="primary" size="small" classes={{ badge: classes.badge }}>
								<i className="fas fa-envelope"></i>
							</Badge>
						</Button>
					</Tooltip>
					{/* message popper */}
					<NavPopper {...bindPopper(popupState)} onClickAway={popupState.close}>
						<div className="popper-notification d-flex flex-column bg-white bs-400 pb-2">
							<MessageList isPopper={true} onClick={popupState.close} />
						</div>
					</NavPopper>
				</>
			)}
		</PopupState>
	);
};

// Notification popper panel
const NotificationPop = ({ classes, activeRoute }) => {
	// tooltip control
	const [tooltipCtrl, setTooltipCtrl] = useState(false);
	const handleTooltipShow = () => {
		setTooltipCtrl(true);
	};
	const handleTooltipClose = () => {
		setTooltipCtrl(false);
	};

	return (
		<PopupState variant="popper" popupId="demoPopper">
			{(popupState) => (
				<>
					<Tooltip
						title="Notifications"
						aria-label="notifications"
						open={popupState.isOpen ? false : tooltipCtrl}
						disableHoverListener
						onMouseEnter={handleTooltipShow}
						onMouseLeave={handleTooltipClose}
						TransitionComponent={Zoom}
						classes={{ tooltip: classes.tooltip }}
					>
						<Button
							{...bindToggle(popupState)}
							aria-label="show notifications"
							aria-haspopup="true"
							color="inherit"
							className={`me-2 bg-primary-light ${popupState.isOpen ? "text-primary" : ""}`}
							classes={{ root: classes.root, disabled: classes.disabledBtn }}
							disabled={activeRoute ? true : false}
						>
							<Badge variant="dot" color="primary" size="small" classes={{ badge: classes.badge }}>
								<i className="fas fa-bell"></i>
							</Badge>
						</Button>
					</Tooltip>
					{/* message popper */}
					<NavPopper {...bindPopper(popupState)} onClickAway={popupState.close}>
						<div className="popper-notification d-flex flex-column bg-white bs-400 pb-2">
							<NotificationList isPopper={true} onClick={popupState.close} />
						</div>
					</NavPopper>
				</>
			)}
		</PopupState>
	);
};

// Profile popper panel
const ProfilePop = ({ classes }) => {
	// tooltip control
	const [tooltipCtrl, setTooltipCtrl] = useState(false);
	const handleTooltipShow = () => {
		setTooltipCtrl(true);
	};
	const handleTooltipClose = () => {
		setTooltipCtrl(false);
	};
	return (
		<PopupState variant="popper" popupId="profile-popper">
			{(popupState) => (
				<>
					<Tooltip
						title="Profile Options"
						aria-label="profile-options"
						open={popupState.isOpen ? false : tooltipCtrl}
						disableHoverListener
						onMouseEnter={handleTooltipShow}
						onMouseLeave={handleTooltipClose}
						TransitionComponent={Zoom}
						classes={{ tooltip: classes.tooltip }}
					>
						<Button
							{...bindToggle(popupState)}
							aria-label="show more"
							aria-haspopup="true"
							color="inherit"
							className={`bg-primary-light ${popupState.isOpen ? "text-primary" : ""}`}
							classes={{ root: classes.avatarButton }}
						>
							<Avatar className={classes.smallAvatar} size="small" />
							<i className="fas fa-ellipsis-v ms-2 p-1"></i>
						</Button>
					</Tooltip>
					{/* message popper */}
					<NavPopper {...bindPopper(popupState)} onClickAway={popupState.close}>
						<div className="popper-notification bg-white bs-400">
							<ProfilePopper popupClose={popupState.close} />
						</div>
					</NavPopper>
				</>
			)}
		</PopupState>
	);
};

const TopNav = () => {
	// css styles
	const classes = useStyles();

	// check active route to enable and disable message and notification buttons
	const location = useLocation();
	const activeRoute = (routeName) => {
		return location.pathname === routeName ? true : false;
	};

	// nav list with dropdown menu
	const navList = navItems.map((item) => {
		const { id, title, subNav } = item;
		return (
			<React.Fragment key={id}>
				<PopupState variant="popper" popupId={title}>
					{(popupState) => (
						<>
							<Button {...bindToggle(popupState)} className={`p-2 px-3 mx-1 ${popupState.isOpen ? "text-primary" : "text-white"}`} classes={{ root: classes.navLink }}>
								{title}
							</Button>
							<NavPopper {...bindPopper(popupState)} placement="bottom" onClickAway={popupState.close}>
								<div className="bg-white p-2 bs-400 rounded-4 text-gray-light">
									{subNav && (
										<List disablePadding>
											{subNav.map((subItem) => (
												<ListItem key={subItem.id} button className="px-2 py-1">
													<ListItemText className="ms-2" primary={subItem.title} />
												</ListItem>
											))}
										</List>
									)}
								</div>
							</NavPopper>
						</>
					)}
				</PopupState>
			</React.Fragment>
		);
	});

	return (
		<>
			<AppBar position="fixed" color="secondary" className="jamNav-top d-none d-md-block bs-400" id="topNav">
				<Container fluid="lg" className="px-3 py-3">
					<Row className="align-items-center">
						<Col xs="auto">
							<Link to="/">
								<h5 className="mb-0 text-white">JamTalent</h5>
							</Link>
						</Col>
						<Col xs="auto">
							{/* search input */}
							<div className="position-relative">
								<div className="position-absolute top-50 start-0 translate-middle-y ms-3 text-white">
									<i className="fas fa-search"></i>
								</div>
								<FormControl className="ps-5 py-2 pe-2 text-white search-input border-0" placeholder="Search..." aria-label="Search..." aria-describedby="Search..." />
							</div>
						</Col>
						<Col className="text-center">{navList}</Col>
						<Col xs="auto">
							{/* message panel */}
							<MessagePop classes={classes} activeRoute={activeRoute("/messages")} />
							{/* notification panel */}
							<NotificationPop classes={classes} activeRoute={activeRoute("/notifications")} />
							{/* user profile panel */}
							<ProfilePop classes={classes} />
						</Col>
					</Row>
				</Container>
			</AppBar>
			<Toolbar className="d-none d-md-block"></Toolbar>
		</>
	);
};

export default TopNav;
