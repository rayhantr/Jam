import { Button } from "@material-ui/core";
import React from "react";

const BtnLink = (props) => {
	const { color, children, ...other } = props;

	return (
		<Button color={color || "primary"} style={{ padding: "0 0.5rem", lineHeight: "auto" }} disableElevation {...other}>
			{children}
		</Button>
	);
};

export default BtnLink;
