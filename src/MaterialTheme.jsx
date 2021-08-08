import { createTheme } from "@material-ui/core/styles";

const MaterialTheme = createTheme({
	palette: {
		primary: {
			main: "#00cad9",
			contrastText: "#fff",
		},
		secondary: {
			main: "#2d6478",
		},
	},

	overrides: {
		MuiTab: {
			root: {
				padding: "0.75rem 1rem",

				"@media (min-width: 0px)": {
					minWidth: "auto",
				},
			},
			wrapper: {
				alignItems: "baseline",
			},
		},
		MuiTabs: {
			indicator: {
				marginLeft: "1rem",
				maxWidth: "40px",
				height: "0.3rem",
				borderTopLeftRadius: "10px",
				borderTopRightRadius: "10px",
			},
		},
		MuiChip: {
			root: {
				borderRadius: "0.25rem",
			},
		},
		MuiPaginationItem: {
			root: {
				color: "#2d6478",
			},
		},
		MuiRating: { iconFilled: { color: "#00cad9" } },
		MuiLinearProgress: {
			root: {
				height: 10,
				borderRadius: 5,
			},
			bar: {
				borderRadius: 5,
			},
		},
	},

	typography: {
		fontFamily: [
			'"Poppins"',
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
	// "@global": {
	// 	"*::-webkit-scrollbar": {
	// 		width: "0.4em",
	// 	},
	// 	"*::-webkit-scrollbar-track": {
	// 		"-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
	// 	},
	// 	"*::-webkit-scrollbar-thumb": {
	// 		backgroundColor: "rgba(0,0,0,.1)",
	// 		outline: "1px solid slategrey",
	// 	},
	// },
});

export default MaterialTheme;
