import { ClickAwayListener, Grow, Popper } from "@material-ui/core";
import React from "react";

const NavPopper = (props) => {
	const { onClickAway, children, ...other } = props;
	return (
		<Popper {...other} transition className="z-index-1500 mt-4">
			{({ TransitionProps }) => (
				<ClickAwayListener onClickAway={onClickAway}>
					<Grow {...TransitionProps} style={{ transformOrigin: "top right" }} timeout={300}>
						{children}
					</Grow>
				</ClickAwayListener>
			)}
		</Popper>
	);
};

// prop configs
NavPopper.defaultProps = {
	placement: "bottom-end",
};

export default NavPopper;
