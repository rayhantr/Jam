import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Alert as MuiAlert } from "@material-ui/lab";
import { Col, Row } from "react-bootstrap";

const AlertStyled = withStyles({
	root: {
		padding: "0",
	},
	icon: {
		padding: "1rem",
		marginRight: "0",
		backgroundColor: "rgb(237, 247, 237)",
		display: "flex",
		alignItems: "center",
	},
	message: {
		width: "100%",
		padding: "1rem",
	},

	standardSuccess: {
		backgroundColor: "transparent",
		border: "2px solid rgb(237, 247, 237)",
	},
})(MuiAlert);

const Alert = (props) => {
	return <AlertStyled {...props}>{props.children}</AlertStyled>;
};

const Notify = (props) => {
	return (
		<Row className={`notify bdr-primary-light g-0 align-items-center ${props.className || ""}`}>
			{props.icon && (
				<Col xs="auto" className="notify-icon d-flex align-self-stretch align-items-center text-center p-3">
					{props.icon}
				</Col>
			)}
			<Col>
				<Row className="g-0 p-3">{props.children}</Row>
			</Col>
		</Row>
	);
};

const Body = ({ children }) => <Col className="notify-body">{children}</Col>;
Notify.Body = Body;

const Action = ({ children }) => (
	<Col xs={12} lg="auto" className="notify-action d-flex align-items-center pt-3 pt-lg-0 ps-0 ps-lg-3">
		{children}
	</Col>
);
Notify.Action = Action;

export { Alert, Notify };
