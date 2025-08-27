import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const QuickNav = ({ onClick }) => {
	const [theme, setTheme] = useState(false);
	const handleToggle = () => {
		setTheme(!theme);
	};

	const quickNav = [
		{ title: `Theme: ${theme ? "Dark" : "Light"}`, icon: theme ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>, onClick: handleToggle },
		{ title: "Switch Account", icon: <i className="fas fa-exchange-alt"></i>, path: "/user/dashboard", onClick: onClick },
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
				const propsExist = { ...pathProp, ...clickProp };

				return (
					<Col key={title} className="">
						<div className="h-100 position-relative rounded-4 overflow-hidden">
							<span className="popper-profile-quick-bg-overlay position-absolute">{icon}</span>
							<Button {...propsExist} variant="contained" color="primary" className="popper-profile-quick h-100 w-100 bg-primary-light text-secondary py-3" disableElevation>
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

const ProfilePopperAdmin = ({ popupClose }) => {
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
			<hr className="divider my-0 mb-3" />
			<div className="px-3 pb-3">
				<QuickNav onClick={popupClose} />
			</div>
		</div>
	);
};

export default ProfilePopperAdmin;
