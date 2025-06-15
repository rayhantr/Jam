import React, { useState } from "react";
import { Button, IconButton, Tooltip, Badge, Zoom, makeStyles, Avatar } from "@material-ui/core";
import { useLocation, matchPath } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PopupState, { bindPopper, bindToggle } from "material-ui-popup-state";
import NavPopper from "components/Poppers/NavPopper";
import NotificationList from "components/NotificationList/NotificationList";
import ProfilePopper from "components/Poppers/ProfilePopper";
import ProfilePopperAdmin from "components/Poppers/ProfilePopperAdmin";

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
							className={`me-2 bg-secondary-light ${popupState.isOpen ? "text-secondary" : ""}`}
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

	// change popper based on user and admin
	const location = useLocation();

	function matchLoc(pathName) {
		return matchPath(location.pathname, {
			path: pathName,
			exact: false,
			strict: false,
		});
	}
	const excludeList = [matchLoc("/user")];
	const isPathActive = excludeList.some(function (v) {
		return v !== null;
	});

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
							className={`bg-secondary-light ${popupState.isOpen ? "text-secondary" : ""}`}
							classes={{ root: classes.avatarButton }}
						>
							<Avatar className={classes.smallAvatar} size="small" />
							<i className="fas fa-ellipsis-v ms-2 p-1"></i>
						</Button>
					</Tooltip>
					{/* message popper */}
					<NavPopper {...bindPopper(popupState)} onClickAway={popupState.close}>
						<div className="popper-notification bg-white bs-400">{isPathActive ? <ProfilePopper popupClose={popupState.close} /> : <ProfilePopperAdmin popupClose={popupState.close} />}</div>
					</NavPopper>
				</>
			)}
		</PopupState>
	);
};

const Header = (props) => {
	const classes = useStyles();
	const { mobileOpen, handleMobileOpen, handleMobileClose } = props.drawerComp;

	// check active route to enable and disable message and notification buttons
	const location = useLocation();
	const activeRoute = (routeName) => {
		return location.pathname === routeName ? true : false;
	};
	return (
		<>
			<div className="navbar-bg"></div>
			<nav className="navbar navbar-expand-lg main-navbar justify-content-between justify-content-lg-end">
				<IconButton className="me-1 text-white d-block d-lg-none" onClick={mobileOpen ? handleMobileClose : handleMobileOpen}>
					{mobileOpen ? <ChevronLeftIcon /> : <MenuIcon />}
				</IconButton>
				<NotificationPop classes={classes} activeRoute={activeRoute("/notifications")} />
				<ProfilePop classes={classes} />
			</nav>
		</>
	);
};

export default Header;
