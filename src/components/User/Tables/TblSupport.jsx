import React from "react";
import { TableContainer, TableHead, TableBody, Chip, TableRow } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";

function createData(ticketNo, title, comment, status, dateTime, details) {
	return { ticketNo, title, comment, status, dateTime, details };
}

// data
const rows = [createData("0012", "Help", "Comment", "Active", "1/1/2021", "Details")];

// header cells
const headCells = [
	{ id: "ticketNo", label: "Ticket No" },
	{ id: "title", label: "Title" },
	{ id: "comment", label: "Comment" },
	{ id: "status", label: "Status" },
	{ id: "dateTime", label: "Date/Time" },
	{ id: "details", label: "Details" },
];

const TblSupport = (props) => {
	return (
		<TableContainer>
			<Table aria-label="Plans Table">
				{/* Table header */}
				<TableHead>
					<TableRow className="bg-primary-light">
						{headCells.map((headCell) => (
							<BorderlessTableCell key={headCell.id} className="fw-bold text-secondary">
								{headCell.label}
							</BorderlessTableCell>
						))}
					</TableRow>
				</TableHead>
				{/* table body */}
				<TableBody>
					{rows.map((row) => {
						const { ticketNo, title, comment, status, dateTime, details } = row;
						return (
							<StripedTableRow key={ticketNo}>
								<BorderlessTableCell>{ticketNo}</BorderlessTableCell>
								<BorderlessTableCell>{title}</BorderlessTableCell>
								<BorderlessTableCell>{comment}</BorderlessTableCell>
								<BorderlessTableCell>
									<Chip label={status} className="rounded-pill p-1" size="small" color="primary" />
								</BorderlessTableCell>
								<BorderlessTableCell>{dateTime}</BorderlessTableCell>
								<BorderlessTableCell>{details}</BorderlessTableCell>
							</StripedTableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TblSupport;
