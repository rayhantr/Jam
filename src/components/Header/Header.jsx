/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";
import profile from "../../images/profile.jpg";

export default function Header() {
	return (
		<>
			<nav className="navbar container-fluid navbar-expand-lg">
				<div className="container">
					<a className="navbar-brand" href="#">
						JamTalent
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<form className="d-flex align-items-center navbar-search-box">
							<input className="search-body  form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<div className="search-field ">
								<button className="icon" type="submit">
									<i className="fas fa-search"></i>
								</button>
								<div className="dropdown">
									<button className="icon" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
										<i className="fas fa-caret-down"></i>
									</button>

									<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
										<li>
											<a className="dropdown-item" href="#">
												Action
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Another action
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Something else here
											</a>
										</li>
									</ul>
								</div>
							</div>
						</form>

						<div className="d-flex ms-auto">
							<ul className="navbar-nav align-items-center me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<div className="dropdown">
										<a className="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
											Find Work
										</a>

										<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
											<li>
												<a className="dropdown-item" href="#">
													Find Work
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Saved Job
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Proposals
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Profile
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													My Stats
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Upwork Readiness Test
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													My Project Dashboard
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="nav-item">
									<div className="dropdown">
										<a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
											My Jobs
										</a>

										<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
											<li>
												<a className="dropdown-item" href="#">
													My Jobs
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													All Contracts
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Work Diary
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="nav-item">
									<div className="dropdown">
										<a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
											Reports
										</a>

										<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
											<li>
												<a className="dropdown-item" href="#">
													Overview
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													My Reports
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Billings And Earnings
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Connects History
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Transaction History
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Certificate of Earnings
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Messages
									</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="fas fa-question"></i>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link position-relative" href="#">
										<i className="fas fa-bell"></i>
										<span className="position-absolute top-40 start-60 translate-middle badge border-0 border-light rounded-circle bg-danger p-1">
											<span className="visually-hidden">unread messages</span>
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="fas fa-paper-plane"></i>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<img src={profile} className="rounded-circle img-fluid" alt="" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
		/*{ <Navbar bg="color-two" className="bs-dim">
				<div>

				</div>
			</Navbar> }*/
	);
}
