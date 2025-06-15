import React, { useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotificationBlock from "./NotificationBlock";

const NotificationList = ({ onClick, isPopper }) => {
	// notification mock api
	const [notifications, setNotifications] = useState([
		{ id: 1, category: "client", readStatus: false, title: "Some title for notifications.", timestamp: "2 min ago" },
		{ id: 2, category: "client", readStatus: true, title: "Some title for notifications.", timestamp: "3 min ago" },
		{ id: 3, category: "gig", readStatus: true, title: "Some title for notifications.", timestamp: "4 min ago" },
		{ id: 4, category: "payment", readStatus: false, title: "Some title for notifications.", timestamp: "5 min ago" },
		{ id: 5, category: "system", readStatus: false, title: "Some title for notifications.", timestamp: "6 min ago" },
		{
			id: 6,
			category: "client",
			title: "Some title for notifications. Some title for notifications. Some title for notifications. Some title for notifications.Some title for notifications.",
			timestamp: "7 min ago",
		},
	]);

	// mark all a read
	const handleMarkAllRead = () => {
		setNotifications([...notifications.map((notification) => ({ ...notification, readStatus: true }))]);
	};

	// toggle read/unread for single notification
	const handleSingleRead = (id) => {
		setNotifications([
			...notifications.map((notification) => (notification.id === id ? (notification.readStatus ? { ...notification, readStatus: false } : { ...notification, readStatus: true }) : notification)),
		]);
	};

	return (
		<>
			{/* title block */}
			<div className="d-flex align-items-center p-3 py-2">
				<Col xs={isPopper ? "auto" : ""}>
					<h4 className="mb-0">Notifications</h4>
				</Col>
				{isPopper && (
					<Col>
						<Button component={Link} to="/notifications" onClick={onClick} color="primary" className="p-2 py-1 ms-2 text-primary">
							See All
						</Button>
					</Col>
				)}
				{/* action buttons */}
				<Col xs="auto">
					<IconButton onClick={handleMarkAllRead} size="small" color="secondary" className="p-2 me-1">
						<i className="fas fa-tasks fa-fr"></i>
					</IconButton>
					<IconButton component={Link} to="/profile/settings/notification" onClick={onClick} size="small" color="secondary" className="p-2 text-secondary">
						<i className="fas fa-cog fa-fr"></i>
					</IconButton>
				</Col>
			</div>
			<div className="popper-notification-panel">
				<Row>
					{/* map notifications */}
					{notifications.map((items) => {
						const { id, category, readStatus, title, timestamp } = items;
						return (
							<React.Fragment key={id}>
								<span className="block-separator"></span>
								<Col xs={12}>
									<NotificationBlock onClick={() => handleSingleRead(id)} category={category} readStatus={readStatus} text={title} timestamp={timestamp} />
								</Col>
							</React.Fragment>
						);
					})}
				</Row>
			</div>
		</>
	);
};

export default NotificationList;
