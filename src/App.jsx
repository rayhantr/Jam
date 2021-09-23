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
import { Container } from "react-bootstrap";

function App() {
	return (
		<ThemeProvider theme={MaterialTheme}>
			{/* <Header /> */}
			{/* <Container as="main" fluid="lg" className="my-3 my-lg-4"> */}
			<RenderRoutes routes={ROUTES} />
			{/* </Container> */}
			<Footer />
		</ThemeProvider>
	);
}

export default App;
