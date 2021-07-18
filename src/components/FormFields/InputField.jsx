import React from "react";
import { useField } from "formik";
import { Form } from "react-bootstrap";

const InputField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="mt-3">
			<Form.Group controlId={props.id || props.name}>
				<Form.Label>{label}</Form.Label>
				<Form.Control type="text" name={props.id || props.name} {...field} {...props} isInvalid={meta.touched && meta.error} isValid={meta.touched && !meta.error} />
				<Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
			</Form.Group>
		</div>
	);
};

export default InputField;
