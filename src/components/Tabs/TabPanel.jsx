import React from "react";
import PropTypes from "prop-types";

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div className="mt-3" role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
			{value === index && (
				<div>
					<div>{children}</div>
				</div>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

export default TabPanel;
