/* eslint-disable no-unused-vars */
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import MaterialTheme from "./MaterialTheme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.scss";
import RenderRoutes from "routes/RenderRoutes";
import ROUTES from "routes/ROUTES";

import "./index.scss";

function App() {
	return (
		<ThemeProvider theme={MaterialTheme}>
			<Header />
			<main id="main-content">
				<RenderRoutes routes={ROUTES} />
			</main>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
