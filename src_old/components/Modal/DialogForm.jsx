import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";

// This is a material ui modal form
const DialogForm = (props) => {
	const { onClose, open, title, children, action, ...other } = props;

	return (
		<Dialog {...other} onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
			<DialogTitle id="customized-dialog-title" onClose={onClose}>
				{title}
			</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button className="me-3" color="secondary" disableElevation onClick={onClose}>
					Cancel
				</Button>
				<Button variant="contained" color="secondary" disableElevation>
					{action}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogForm;
