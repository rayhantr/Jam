import React from "react";
import { TableContainer, TableHead, TableBody } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";

function createData(sl, project, totalTimeTrack, date, screenshots, analysis) {
	return { sl, project, totalTimeTrack, date, screenshots, analysis };
}

const rows = [createData("00123", "Something", "01:50:50", "1/1/2022", "", "Analysis"), createData("00124", "About", "2:20:20", "1/1/2022", "", "Another")];

const headCells = [
	{ id: "sl", label: "SL." },
	{ id: "project", label: "Project" },
	{ id: "totalTimeTrack", label: "Total Time Track" },
	{ id: "date", label: "Date" },
	{ id: "screenshots", label: "Screenshots" },
	{ id: "analysis", label: "Analysis" },
];

const TblWeekReports = () => {
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
						const { sl, project, totalTimeTrack, date, screenshots, analysis } = row;

						return (
							<StripedTableRow key={index}>
								<BorderlessTableCell>{sl}</BorderlessTableCell>
								<BorderlessTableCell>{project}</BorderlessTableCell>
								<BorderlessTableCell>{totalTimeTrack}</BorderlessTableCell>
								<BorderlessTableCell>{date}</BorderlessTableCell>
								<BorderlessTableCell>{screenshots}</BorderlessTableCell>
								<BorderlessTableCell>{analysis}</BorderlessTableCell>
							</StripedTableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TblWeekReports;
