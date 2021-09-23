import { createTheme } from "@material-ui/core/styles";

export const globalCss = {
	fontSize: "1rem",
	lineHeight: "1.5",
	pTb: "0.375rem",
	colorBody: "#fafbfe",
};

const MaterialTheme = createTheme({
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

	palette: {
		primary: {
			main: "#00cad9",
			contrastText: "#fff",
		},
		secondary: {
			main: "#2d6478",
		},
		tonalOffset: 0.1,
	},

	overrides: {
		// buttons
		MuiButton: {
			root: {
				fontSize: globalCss.fontSize,
				lineHeight: globalCss.lineHeight,
				paddingTop: `calc(${globalCss.pTb} + 1px)`,
				paddingBottom: `calc(${globalCss.pTb} + 1px)`,
				textTransform: "capitalize",
				minWidth: "auto",
			},
		},

		// list change
		// MuiListItem: {
		// 	root: {
		// 		paddingTop: "0.5rem",
		// 		paddingBottom: "0.5rem",
		// 		borderRadius: globalCss.pTb,
		// 	},
		// },

		// MuiListItemIcon: {
		// 	root: {
		// 		minWidth: "1.3rem",
		// 		marginRight: "1rem",
		// 	},
		// },

		MuiTab: {
			root: {
				padding: "0.75rem 1rem",
				fontSize: globalCss.fontSize,
				textTransform: "capitalize",

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
				maxWidth: "2.5rem",
				height: "0.3rem",
				borderTopLeftRadius: "0.3rem",
				borderTopRightRadius: "0.3rem",
			},
		},

		MuiChip: {
			root: {
				borderRadius: "0.5em",
				height: "auto",
				fontSize: globalCss.fontSize,
				lineHeight: globalCss.lineHeight,
				paddingTop: globalCss.pTb,
				paddingBottom: globalCss.pTb,
			},
			sizeSmall: {
				height: "auto",
				paddingTop: "0.25rem",
				paddingBottom: "0.25rem",
				fontSize: "0.8125rem",
			},
			iconSmall: {
				width: "1rem",
				height: "1rem",
			},
			deleteIconSmall: {
				width: "1.2rem",
				height: "1.2rem",
			},
		},

		MuiPaginationItem: {
			root: {
				color: "#2d6478",
				minWidth: "2.5rem",
				height: "2.5rem",
			},
			sizeSmall: {
				margin: "0 0.25rem",
				height: "1.75rem",
				minWidth: "1.75rem",
			},
		},

		MuiRating: { iconFilled: { color: "#00cad9" } },

		MuiLinearProgress: {
			root: {
				height: "1rem",
				borderRadius: "0.5rem",
			},
			bar: {
				borderRadius: "0.5rem",
			},
		},

		MuiBackdrop: {
			root: {
				backgroundColor: "rgba(50, 57, 66, .9)",
			},
		},
	},
});

export default MaterialTheme;
