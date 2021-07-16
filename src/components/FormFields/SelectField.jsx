import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const SelectField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="col-12 form-group my-3">
			<label className="form-label form-control-placeholder" htmlFor={props.id || props.name}>
				{label}
			</label>
			<select className="form-select" {...field} {...props} style={meta.touched && meta.error ? { border: 1 + "px solid red" } : null} />
			{meta.touched && meta.error ? <small className="error-msg my-1">{meta.error}</small> : null}
		</div>
	);
};

SelectField.defaultProps = {
	data: [],
};

SelectField.propTypes = {
	data: PropTypes.array.isRequired,
};

export default SelectField;
