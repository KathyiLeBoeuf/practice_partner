import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../actions/auth'
import { registerUser } from '../actions/users';
import Input from './input';
import { required, nonEmpty, matches, length, isAllDigits } from '../validators';
import './register.css';
const teacher_codeLength = length({ min: 4, max: 4 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {

	onSubmit(values) {
		const { first_name, last_name, email, password } = values;
		const user = { first_name, last_name, email, password };
		console.log(values, user, "reg form valuesYYYYYYYYYYYYYYY")
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(email, password)));
	}
	render() {
		return (
			<div className="register">
				<form
					id="register"
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values)
					)}>
					<label htmlFor="first_name" className="row" >First Name:</label>
					<Field
						id="first_name"
						name="first_name"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="last_name" className="row">Last Name:</label>
					<Field
						id="last_name"
						name="last_name"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="email" className="row">Email:</label>
					<Field
						id="email"
						name="email"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="password" className="row">Password:</label>
					<Field
						id="password"
						name="password"
						component={Input}
						type="password"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="confirmPassword" className="row">Confirm Password:</label>
					<Field
						id="confirmPassword"
						name="confirmPassword"
						component={Input}
						type="password"
						validate={[required, nonEmpty, matchesPassword]}
					/>
					<label htmlFor="teacher_code" className="row">Teacher Code</label>
					<Field
						id="teacher_code"
						name="teacher_code"
						component={Input}
						type="integer"
						// TODO pattern prop
						pattern="^[0-9]*$"
						validate={[teacher_codeLength, isAllDigits]}

					/>
					<button
						className="row btn-large"
						aria-label="Button to sign up"
						type="submit"
						disabled={this.props.pristine || this.props.submitting}
					>
						Sign Up
				</button>
				</form >
			</div>

		);
	}
}
// ?????????
// const onSubmitFail = (errors, dispatch, submitError) => {
// 	if (submitError instanceof SubmissionError) {

// 	} else {
// 		throw submitError
// 	}
// }
// ?????????

RegistrationForm = connect()(RegistrationForm)

export default reduxForm({
	form: 'register-form',
	onSubmitFail: (error, dispatch) => {
		return dispatch(focus('register-form', Object.keys(error)[0]))
	}
})(RegistrationForm)
