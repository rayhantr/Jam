/* eslint-disable no-unused-vars */
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import MaterialTheme from "./MaterialTheme";
import Footer from "./components/Footer";
import RenderRoutes from "routes/RenderRoutes";
import ROUTES from "routes/ROUTES";

import "./index.scss";
import "./common/css/style.css";
// import "simplebar/src/simplebar.css";
import "simplebar/dist/simplebar.min.css";

function App() {
	return (
		<ThemeProvider theme={MaterialTheme}>
			<RenderRoutes routes={ROUTES} />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
