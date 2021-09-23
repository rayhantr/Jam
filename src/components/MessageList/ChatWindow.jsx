import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import io from "socket.io-client";

const ChatWindow = () => {
	const [yourID, setYourID] = useState();
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");

	const socketRef = useRef();

	useEffect(() => {
		socketRef.current = io.connect("/");

		socketRef.current.on("your id", (id) => {
			setYourID(id);
		});

		socketRef.current.on("message", (message) => {
			receivedMessage(message);
		});
	}, []);

	function receivedMessage(message) {
		setMessages((oldMsgs) => [...oldMsgs, message]);
	}

	function sendMessage(e) {
		e.preventDefault();
		const messageObject = {
			body: message,
			id: yourID,
		};
		setMessage("");
		socketRef.current.emit("send message", messageObject);
	}

	function handleChange(e) {
		setMessage(e.target.value);
	}
	return (
		<div className="bg-white rounded-4 h-100 d-flex flex-column">
			<div className="p-3 flex-grow-1 overflow-y-auto">
				{messages.map((message, index) => {
					// sender message
					if (message.id === yourID) {
						return (
							<div key={index} className="d-flex justify-content-end">
								<span className="w-auto p-2 px-3 rounded-3 bg-primary text-end mb-1">{message.body}</span>
							</div>
						);
					}
					// receiver message
					return (
						<div key={index} className="d-flex justify-content-start">
							<span className="w-auto p-2 px-3 rounded-3 bg-secondary-light text-start mb-1">{message.body}</span>
						</div>
					);
				})}
			</div>
			<form onSubmit={sendMessage} className="d-flex w-100 p-3">
				<Form.Control type="input" value={message} onChange={handleChange} placeholder="Say something..." className="flex-grow-1"></Form.Control>
				<Button type="submit" color="secondary" className="ms-3 bg-primary-light align-self-end p-2">
					<i className="fas fa-paper-plane fa-fr me-2"></i>Send
				</Button>
			</form>
		</div>
	);
};

export default ChatWindow;

// const ChatWindow = () => (
// 	<div>
// 		<ChatMsg
// 			avatar={""}
// 			messages={[
// 				"Hi Jenny, How r u today?",
// 				"Did you train yesterday",
// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
// 			]}
// 		/>
// 		<ChatMsg side={"right"} messages={["Great! What's about you?", "Of course I did. Speaking of which check this out"]} />
// 		<ChatMsg avatar={""} messages={["Im good.", "See u later."]} />
// 	</div>
// );
