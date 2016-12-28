/* global React */

import { Link } from 'react-router';
import { saveContactInfo } from '../../db';

const Contact = React.createClass({

	getInitialState() {
		return {
			sent: false,
			first_name: ''
		};
	},

	onSubmit(e) {
		e.preventDefault();
		const { first_name, last_name, email, phone, company, message } = this.refs;
		saveContactInfo(first_name.value, last_name.value, email.value, phone.value, company.value, message.value);
		this.setState({ sent: true, first_name: first_name.value });
	},

	onCancel() {
		Object.keys(this.refs).forEach(ref => {
			this.refs[ref].value = '';
		});
	},

	getForm() {
		return (
			<form className="col s12" onSubmit={this.onSubmit}>
				<div className="row">
					<div className="input-field col s6">
						<input id="first_name" ref="first_name" type="text" required/>
						<label htmlFor="first_name">First Name</label>
					</div>
					<div className="input-field col s6">
						<input id="last_name" ref="last_name" type="text" required/>
						<label htmlFor="lName">Last Name</label>
					</div>
					<div className="input-field col s6">
						<input id="email" ref="email" type="email" required className="validate"/>
						<label htmlFor="email" data-error="Please enter a valid email">Email</label>
					</div>
					<div className="input-field col s6">
						<input id="phone" ref="phone" type="tel"/>
						<label htmlFor="phone">Phone (optional)</label>
					</div>
					<div className="input-field col s12">
						<input id="company-rep" ref="company" type="text"/>
						<label htmlFor="company-rep">Company (optional)</label>
					</div>
					<div className="input-field col s12">
						<textarea id="message" ref="message" required className="materialize-textarea"/>
						<label htmlFor="message">Message</label>
					</div>
				</div>
				<button className="submit-form btn waves-effect waves-light" type="submit" name="action">Submit</button>
				<a className="cancel-button waves-effect waves-light btn" onClick={this.onCancel}>Cancel</a>
			</form>
		);
	},

	getSentMessage() {
		return (
			<div>
				<h1>{`Thanks for reaching out ${this.state.first_name}! You will be hearing from us soon.`}</h1>
				<Link to="/"><span className="submit-form waves-effect waves-light btn">Home</span></Link>
			</div>
		);
	},

	render: function () {
		return (
			<div className="component-wrapper">
				<div className="card-panel second-nav">
					<span className="white-text"><h3>Contact us</h3></span>
				</div>
				<div className="container">
					<div className="company-copy-wrapper">
						<div className="row">
							{this.state.sent ? this.getSentMessage() : this.getForm()}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Contact;
