import React from "react";
import { Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";
import { Chip } from "@material-ui/core";

const Skills = ({ skills, publicView }) => {
	return (
		<Card body className="bs-dim">
			<Card.Title className="row g-0 justify-content-between align-items-center">Skills{publicView ? null : <BtnIcon iconType="edit" />}</Card.Title>
			<Card.Text as="h6">
				{skills.map((skill) => {
					return <Chip key={skill} className="me-2" label={skill}></Chip>;
				})}
			</Card.Text>
		</Card>
	);
};

export default Skills;
