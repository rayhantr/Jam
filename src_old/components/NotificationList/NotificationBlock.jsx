import { IconButton, Collapse, Button, ClickAwayListener } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotificationBlock = (props) => {
	const { category, text, timestamp, readStatus, onClick } = props;

	const NOTIFICATIONTYPES = [
		{ category: "system", icon: <i className="fas fa-exclamation-circle fa-fr"></i> },
		{ category: "client", icon: <i className="fas fa-calendar-alt fa-fr"></i> },
		{ category: "gig", icon: <i className="fas fa-file-invoice fa-fr"></i> },
		{ category: "payment", icon: <i className="fas fa-dollar-sign fa-fr"></i> },
	];

	const index = NOTIFICATIONTYPES.findIndex((item) => item.category === category);
	const notificationIcon = index >= 0 ? NOTIFICATIONTYPES[index].icon : NOTIFICATIONTYPES[0].icon;

	// collapse control
	const [collapseControl, setCollapseControl] = useState(false);
	const toggleCollapse = () => {
		setCollapseControl(!collapseControl);
	};
	const closeCollapse = () => {
		setCollapseControl(false);
	};

	return (
		<div className="px-2">
			<Row as={Link} to="#" className="block g-0 align-items-center p-2">
				{/* Icon */}
				<Col xs="auto" className="d-flex">
					<div className="block-icon p-2 bg-primary-light text-secondary me-3">{notificationIcon}</div>
				</Col>
				{/* Main text */}
				<Col>
					<h6 className={`mb-0 lh-base ${readStatus ? "text-gray-light" : "text-secondary"}`}>{text}</h6>
					<time className={`block-time my-1 ${readStatus ? "text-gray-light" : "text-primary"}`}>
						<i className="far fa-clock me-2"></i>
						{timestamp}
					</time>
				</Col>
				{/* menu btn */}
				<Col xs="auto">
					<IconButton className="p-2 ms-2 block-menu-btn" onClick={toggleCollapse} color="secondary" size="small">
						<i className="fas fa-ellipsis-v fa-fr"></i>
					</IconButton>
				</Col>
				{/* mark as read for menu btn */}
				<Col xs={12}>
					<Collapse in={collapseControl} timeout={200} unmountOnExit>
						<ClickAwayListener onClickAway={closeCollapse}>
							<Button
								onClick={onClick}
								startIcon={readStatus ? <i className="far fa-check-square"></i> : <i className="fas fa-check-square"></i>}
								variant="outlined"
								color="secondary"
								className="w-100 mt-2"
								disableRipple
							>
								Mark as {readStatus ? "unread" : "read"}
							</Button>
						</ClickAwayListener>
					</Collapse>
				</Col>
			</Row>
		</div>
	);
};

export default NotificationBlock;
