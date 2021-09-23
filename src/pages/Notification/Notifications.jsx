import React from "react";
import { Row } from "react-bootstrap";
import NotificationList from "components/NotificationList/NotificationList";

const Notifications = () => {
	return (
		<Row className="gy-3 gx-0 gx-md-3 ">
			<div className="bg-white p-0 pb-2 rounded-4">
				<NotificationList />
			</div>
		</Row>
	);
};

export default Notifications;
