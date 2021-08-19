import React from "react";
import { Chip } from "@material-ui/core";

const ChipGroup = ({ itemList, ...others }) => {
	return (
		<>
			{itemList.map((item) => {
				return <Chip key={item} className="my-1 ms-0 me-2" label={item} {...others}></Chip>;
			})}
		</>
	);
};

export default ChipGroup;
