import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";

// This is a material ui modal form
const DialogForm = (props) => {
	return (
		<Dialog {...props} onClose={props.onClose} aria-labelledby="customized-dialog-title" open={props.open}>
			<DialogTitle id="customized-dialog-title" onClose={props.onClose}>
				{props.title}
			</DialogTitle>
			<DialogContent>{props.children}</DialogContent>
			<DialogActions>
				<Button className="me-3" color="secondary" disableElevation onClick={props.onClose}>
					Cancel
				</Button>
				<Button variant="contained" color="secondary" disableElevation>
					{props.action}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogForm;
