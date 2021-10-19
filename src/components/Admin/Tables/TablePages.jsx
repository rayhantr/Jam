import React from "react";
import { TableContainer, TableHead, TableBody, Chip, Button } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";

function createData(title, url, status, createdAt) {
	return { title, url, status, createdAt };
}

// data
const rows = [createData("Some Title", "https://testserver.jamtalent.net/page/voluptates-ipsum-ab", "inactive", "1/1/2021")];

// header cells
const headCells = [
	{ id: "title", label: "Title" },
	{ id: "url", label: "URL" },
	{ id: "status", label: "Status" },
	{ id: "createdAt", label: "Created At" },
	{ id: "action", label: "Action" },
];

const TablePages = (props) => {
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
						const { title, url, status, createdAt } = row;
						return (
							<StripedTableRow key={title}>
								<BorderlessTableCell>{title}</BorderlessTableCell>
								<BorderlessTableCell>{url}</BorderlessTableCell>
								<BorderlessTableCell>
									<Chip label={status} className="rounded-pill p-1 text-capitalize" size="small" color="primary" />
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

export default TablePages;
