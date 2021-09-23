import React, { useState } from "react";
import { Avatar, Button, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Notify } from "components/Alerts/Alert";

const useStyles = makeStyles({
	root: {
		minWidth: "auto",
		fontSize: "1.5em",
	},
	text: {
		fontWeight: "500",
	},
});

export const QuickNav = ({ onClick }) => {
	const [theme, setTheme] = useState(false);
	const handleToggle = () => {
		setTheme(!theme);
	};

	const quickNav = [
		{ title: "My Gigs", icon: <i className="fas fa-file-invoice"></i>, path: "#" },
		{ title: "Teams", icon: <i className="fas fa-users"></i>, path: "/profile/settings/teams", onClick: onClick },
		{ title: `Theme: ${theme ? "Dark" : "Light"}`, icon: theme ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>, onClick: handleToggle },
		{ title: "Settings", icon: <i className="fas fa-cog"></i>, path: "/profile/settings", onClick: onClick },
		{ title: "Switch Account", icon: <i className="fas fa-exchange-alt"></i> },
		{ title: "Logout", icon: <i className="fas fa-sign-out-alt"></i> },
	];

	return (
		<Row xs={2} md={3} className="g-3 quickNav">
			{quickNav.map((item) => {
				// destructuring item
				const { title, icon, path, onClick } = item;
				// setting available props for each component if they exists
				const pathProp = path ? { component: Link, to: path } : null;
				const clickProp = onClick ? { onClick: onClick } : null;
				const props = { ...pathProp, ...clickProp };

				return (
					<Col key={title} className="">
						<div className="h-100 position-relative rounded-4 overflow-hidden">
							<span className="popper-profile-quick-bg-overlay position-absolute">{icon}</span>
							<Button {...props} variant="contained" color="primary" className="popper-profile-quick h-100 w-100 bg-primary-light text-secondary py-3" disableElevation>
								<Row>
									<Col xs={12} className="icon mb-1 text-center">
										{icon}
									</Col>
									<Col xs={12} className="text-center">
										{title}
									</Col>
								</Row>
							</Button>
						</div>
					</Col>
				);
			})}
		</Row>
	);
};

const ProfilePopper = ({ popupClose }) => {
	// material css
	const classes = useStyles();

	return (
		<div className="popper-profile">
			<div className="p-3">
				<Row as={Link} to="/profile" className="popper-profile-viewProfile g-0 p-2 align-items-center rounded-4" onClick={popupClose}>
					<Col xs="auto">
						<Avatar variant="rounded" alt="User Name" src=""></Avatar>
					</Col>
					<Col>
						<div className="ms-3">
							<h6 className="text-secondary">User Name</h6>
							<h6 className="text-gray-light mb-0">username@gmail.com</h6>
						</div>
					</Col>
				</Row>
			</div>
			<div className="p-3 pt-0">
				<Notify icon={<i className="fas fa-dollar-sign"></i>} className="rounded-4">
					<Notify.Body>
						<h6>Your Balance</h6>
						<strong className="text-primary">$0.00</strong>
					</Notify.Body>
				</Notify>
			</div>
			<hr className="divider my-0 mb-3" />
			<div className="px-3">
				<QuickNav onClick={popupClose} />
			</div>

			<hr className="divider" />

			<div className="p-3 pt-0">
				<List disablePadding>
					<ListItem button component={Link} to="#" className="text-secondary rounded-4 px-3">
						<ListItemIcon className="me-3 text-secondary" classes={{ root: classes.root }}>
							<i className="fas fa-headset fa-fr"></i>
						</ListItemIcon>
						<ListItemText primary="Help & Support" classes={{ root: classes.text }} disableTypography />
					</ListItem>
					<ListItem button component={Link} to="#" className="text-secondary rounded-4 px-3">
						<ListItemIcon className="me-3 text-secondary" classes={{ root: classes.root }}>
							<i className="fas fa-tasks fa-fr"></i>
						</ListItemIcon>
						<ListItemText primary="Terms & Conditions" classes={{ root: classes.text }} disableTypography />
					</ListItem>
				</List>
			</div>
		</div>
	);
};

export default ProfilePopper;
