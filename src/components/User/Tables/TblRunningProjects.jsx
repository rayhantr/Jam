import React from "react";
import { TableContainer, TableHead, TableBody } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";

function createData(projectName, description, startingDate, endingDate, createdAt) {
	return { projectName, description, startingDate, endingDate, createdAt };
}

const rows = [createData("00123", "Something", "1/1/2021", "1/1/2022", "1/1/2021"), createData("00124", "About", "1/1/2021", "1/1/2022", "1/1/2021")];

const headCells = [
	{ id: "projectName", label: "Project Name" },
	{ id: "description", label: "Description" },
	{ id: "startingDate", label: "Starting Date" },
	{ id: "endingDate", label: "Ending Date" },
	{ id: "createdAt", label: "Created At" },
];

const TblRunningProjects = () => {
	return (
		<TableContainer className="pb-3">
			<Table aria-label="simple table">
				{/* table header */}
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
					{rows.map((row, index) => {
						const { projectName, description, startingDate, endingDate, createdAt } = row;

						return (
							<StripedTableRow key={index}>
								<BorderlessTableCell>{projectName}</BorderlessTableCell>
								<BorderlessTableCell>{description}</BorderlessTableCell>
								<BorderlessTableCell>{startingDate}</BorderlessTableCell>
								<BorderlessTableCell>{endingDate}</BorderlessTableCell>
								<BorderlessTableCell>{createdAt}</BorderlessTableCell>
							</StripedTableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TblRunningProjects;
