import { Button } from "@material-ui/core";
import React from "react";

const BtnLink = (props) => {
	return (
		<Button color={props.color || "primary"} style={{ padding: "0 0.5rem", lineHeight: "auto" }} disableElevation {...props}>
			{props.children}
		</Button>
	);
};

export default BtnLink;
