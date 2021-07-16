import React from "react";
import { useField } from "formik";

const InputField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="col-12 form-group my-3">
			<label className="form-label form-control-placeholder" htmlFor={props.id || props.name}>
				{label}
			</label>
			<input className="form-control input-field" {...field} {...props} style={meta.touched && meta.error ? { border: 1 + "px solid red" } : null} />
			{meta.touched && meta.error ? <small className="error-msg my-1">{meta.error}</small> : null}
		</div>
	);
};

export default InputField;
