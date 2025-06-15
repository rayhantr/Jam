import React from "react";
import { TableContainer, TableHead, TableBody, Chip, Button } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";

function createData(title, icon, status, createdAt) {
	return { title, icon, status, createdAt };
}

// data
const rows = [
	createData("Screenshot Capture", "fas fa-camera-retro fa-fw", "success", "1/1/2021"),
	createData("Mail Activity", "fas fa-mail-bulk fa-fw", "success", "1/1/2021"),
	createData("Location Tracking", "fas fa-search-location fa-fw", "success", "1/1/2021"),
	createData("Organize Your Team", "fas fa-users-cog fa-fw", "success", "1/1/2021"),
];

// header cells
const headCells = [
	{ id: "title", label: "Title" },
	{ id: "icon", label: "Icon" },
	{ id: "status", label: "Status" },
	{ id: "createdAt", label: "Created At" },
	{ id: "action", label: "Action" },
];

const TableFeatures = (props) => {
	return (
		<TableContainer>
			<Table aria-label="Plans Table">
				{/* Table header */}
				<TableHead>
					<StripedTableRow className="bg-primary-light">
						{headCells.map((headCell) => (
							<BorderlessTableCell key={headCell.id} className="fw-bold text-secondary">
								{headCell.label}
							</BorderlessTableCell>
						))}
					</StripedTableRow>
				</TableHead>
				{/* table body */}
				<TableBody>
					{rows.map((row) => {
						const { title, icon, status, createdAt } = row;
						return (
							<StripedTableRow key={title}>
								<BorderlessTableCell>{title}</BorderlessTableCell>
								<BorderlessTableCell className="fs-3 py-2 text-secondary">
									<i className={icon}></i>
								</BorderlessTableCell>
								<BorderlessTableCell>
									<Chip label={status} className="rounded-pill p-1 ls-1 text-capitalize" size="small" color="primary" />
								</BorderlessTableCell>
								<BorderlessTableCell>{createdAt}</BorderlessTableCell>
								<BorderlessTableCell>
									{/* edit button */}
									<Button onClick={props.onClick} variant="contained" className="p-2 me-2 text-secondary btn-primary-light" aria-label="edit" disableElevation>
										<i className="fas fa-pen fa-fr"></i>
									</Button>
									{/* delete button */}
									<Button onClick={props.onDeleteClick} variant="contained" className="p-2 text-danger btn-danger-light" aria-label="delete" disableElevation>
										<i className="fas fa-trash-alt fa-fr"></i>
									</Button>
								</BorderlessTableCell>
							</StripedTableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableFeatures;
