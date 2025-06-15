import { IconButton, Collapse, Button, ClickAwayListener, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MessageBlock = (props) => {
	const { sender, message, timestamp, readStatus, onClick } = props;

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
					<div className="block-avatar me-3">
						<Avatar alt="User Name" src=""></Avatar>
					</div>
				</Col>
				{/* Main text */}
				<Col style={{ minWidth: 0 }}>
					<h6 className={`mb-0 lh-base ${readStatus ? "text-gray-light" : "text-secondary fw-bold"}`}>{sender}</h6>
					<span className={`mb-0 lh-base d-block message-line text-truncate ${readStatus ? "text-gray-light" : "text-secondary"}`}>{message}</span>
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
				{/* menu btn options*/}
				<Collapse in={collapseControl} timeout={200} unmountOnExit>
					<ClickAwayListener onClickAway={closeCollapse}>
						<div className="d-flex mt-2">
							{/* mark read/unread button */}
							<Button
								onClick={onClick}
								startIcon={readStatus ? <i className="far fa-check-square"></i> : <i className="fas fa-check-square"></i>}
								variant="outlined"
								color="secondary"
								className="me-2 flex-grow-1"
								disableRipple
							>
								Mark as {readStatus ? "unread" : "read"}
							</Button>
							{/* delete button */}
							<Button variant="contained" className="me-2 text-danger btn-danger-light" disableElevation>
								<i className="fas fa-trash-alt"></i>
							</Button>
							{/* report button */}
							<Button variant="contained" className="text-secondary btn-primary-light" disableElevation>
								<i className="fas fa-flag"></i>
							</Button>
						</div>
					</ClickAwayListener>
				</Collapse>
			</Row>
		</div>
	);
};

export default MessageBlock;
