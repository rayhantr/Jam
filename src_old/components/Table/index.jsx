import { Table as MuiTable, TableCell as MuiTableCell, TableRow as MuiTableRow, withStyles } from "@material-ui/core";

const Table = withStyles({
	root: {
		minWidth: "max-content",
	},
})(MuiTable);

const StripedTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(even)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(MuiTableRow);

const BorderlessTableCell = withStyles({
	root: {
		fontSize: "1rem",
		padding: "1em",
		borderBottom: "none",
	},
})(MuiTableCell);

export { Table, StripedTableRow, BorderlessTableCell };
