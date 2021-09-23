import React, { useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MessageBlock from "./MessageBlock";

const MessageList = ({ onClick, isPopper }) => {
	// message mock api
	const [messages, setMessages] = useState([
		{ id: 1, readStatus: false, sender: "User Name", message: "Some title for messages. Some title for messages. Some title for messages.", timestamp: "2 min ago" },
		{ id: 2, readStatus: true, sender: "User Name", message: "Some title for messages.", timestamp: "3 min ago" },
		{ id: 3, readStatus: true, sender: "User Name", message: "Some title for messages.", timestamp: "4 min ago" },
		{ id: 4, readStatus: false, sender: "User Name", message: "Some title for messages.", timestamp: "5 min ago" },
		{ id: 5, readStatus: false, sender: "User Name", message: "Some title for messages.", timestamp: "6 min ago" },
		{ id: 6, readStatus: false, sender: "User Name", message: "Some title for messages.", timestamp: "7 min ago" },
	]);

	// mark all a read
	const handleMarkAllRead = () => {
		setMessages([...messages.map((message) => ({ ...message, readStatus: true }))]);
	};

	// toggle read/unread for single message
	const handleSingleRead = (id) => {
		setMessages([...messages.map((message) => (message.id === id ? (message.readStatus ? { ...message, readStatus: false } : { ...message, readStatus: true }) : message))]);
	};

	return (
		<>
			{/* title block */}
			<div className="d-flex align-items-center p-3 py-2">
				<Col xs={isPopper ? "auto" : ""}>
					<h4 className="mb-0">Messages</h4>
				</Col>
				{isPopper && (
					<Col>
						<Button component={Link} to="/messages" onClick={onClick} color="primary" className="p-2 py-1 ms-2 text-primary">
							See All
						</Button>
					</Col>
				)}
				{/* action buttons */}
				<Col xs="auto">
					<IconButton onClick={handleMarkAllRead} size="small" color="secondary" className="p-2 me-1">
						<i className="fas fa-tasks fa-fr"></i>
					</IconButton>
					<IconButton size="small" className="p-2 text-secondary btn-primary-light">
						<i className="fas fa-pen-nib fa-fr"></i>
					</IconButton>
				</Col>
			</div>
			<div className="popper-message-panel">
				<Row className="g-0">
					{/* map messages */}
					{messages.map((items) => {
						const { id, readStatus, sender, message, timestamp } = items;
						return (
							<React.Fragment key={id}>
								<span className="block-separator"></span>
								<Col xs={12}>
									<MessageBlock onClick={() => handleSingleRead(id)} readStatus={readStatus} sender={sender} message={message} timestamp={timestamp} />
								</Col>
							</React.Fragment>
						);
					})}
				</Row>
			</div>
		</>
	);
};

export default MessageList;
