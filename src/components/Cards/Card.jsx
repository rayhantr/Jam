/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Card = (props) => {
	return (
		<div className="card my-2 shadow-sm">
			{/* card head */}
			<div className="card-header">
				<div className="row justify-content-between">
					<div className="col-6">
						<h3 className="my-2">{props.title}</h3>
					</div>
					<div className="col-1 p-1 text-center">
						<a href="#">
							<i className="my-3 fas fa-edit"></i>
						</a>
					</div>
				</div>
			</div>
			{/* card body */}
			<div className="card-body">
				<div className="m-2 mx-3 card-text">{props.content}</div>
			</div>
		</div>
	);
};

export default Card;
