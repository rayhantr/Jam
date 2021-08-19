import React from "react";
import { Button } from "react-bootstrap";

const EmptyAdd = ({ description, btnName, icon, ...rest }) => {
	const defaultIcon = <i className="far fa-folder-open"></i>;
	const showIcon = icon ? icon : defaultIcon;

	return (
		<div className="empty-add text-center" {...rest}>
			{/* {icon} */}
			<div className="icon">{showIcon}</div>
			<h6 className="my-3">{description}</h6>
			<Button variant="primary" className="px-4">
				{btnName}
			</Button>
		</div>
	);
};

export default EmptyAdd;
