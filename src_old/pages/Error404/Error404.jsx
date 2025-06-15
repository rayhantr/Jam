import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Error404 = () => {
	return (
		<div id="notFound">
			<div className="notFound">
				<div className="notFound-404">
					<div></div>
					<h1>404</h1>
				</div>
				<h2>Page not found</h2>
				<p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>

				<Link to="/" className="my-3">
					<Button variant="contained" color="secondary" disableElevation>
						Home Page
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Error404;
