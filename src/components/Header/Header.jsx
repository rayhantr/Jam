import React from "react";

export default function Header() {
	return (
		<>
			<div className="collapse" id="navbarToggleExternalContent">
				<div className="bg-dark p-4">
					<h5 className="text-white h4">Collapsed content</h5>
					<span className="text-muted">Toggleable via the navbar brand.</span>
				</div>
			</div>
			<nav className="navbar navbar-dark jam-nav">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarToggleExternalContent"
						aria-controls="navbarToggleExternalContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
		</>
	);
}
