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
