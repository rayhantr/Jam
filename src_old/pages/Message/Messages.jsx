import React from "react";
import { Col, Row } from "react-bootstrap";
import MessageList from "components/MessageList/MessageList";
import ChatWindow from "components/MessageList/ChatWindow2";
import MessageLogin from "components/MessageList/MessageLogin";

import io from "socket.io-client";

const socket = io.connect("/");

const Messages = (props) => {
	return (
		<Row className="gy-3 gx-0 gx-md-3 ">
			<Col xs={12} md={4}>
				<div className="bg-white p-0 pb-2 rounded-4">
					<MessageList />
				</div>
			</Col>
			<Col xs={12} md={8}>
				{/* <InProduction /> */}
				{props.match.params.username && props.match.params.roomname ? (
					<ChatWindow username={props.match.params.username} roomname={props.match.params.roomname} socket={socket} />
				) : (
					<MessageLogin socket={socket}></MessageLogin>
				)}
			</Col>
		</Row>
	);
};

export default Messages;
