import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
	constructor() {
		super()

		this.state = {
			active: false
		};

		this.switchState = this.switchState.bind(this);
	}

	switchState() {
		this.setState({
			active: !(this.state.active) 
		});	
	}

	render() {
		const label = this.props.label; 
		const text = this.props.text; 
		const type = this.props.type; 
		const id = this.props.id; 
		const value = this.props.value; 
		const handleChange = this.props.handleChange; 
		const class_name= this.props.class_name;
		const label_class = (this.state.active) ?
			'active': '';
		const label_element = (type != 'submit') ?
			<label htmlFor={label} className={label_class}>{text}</label> : '';


		return (
			<div className=	'form-group row'>
				<div className={this.props.container_class_name}>
					{ label_element }
				</div>
				<div className={this.props.container_class_name}>
					<input
						type={type}
						className={class_name}
						id={id}
						onFocus={this.switchState}
						onBlur={this.switchState}
						value={value}
						onChange={handleChange}
						disabled={this.props.disabled}
						required={this.props.required}
					/>
				</div>
			</div>
		)
	}
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default Input;
