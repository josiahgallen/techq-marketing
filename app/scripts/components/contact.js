/* global React, $ */
const Contact = React.createClass({

    onSubmit(e) {
        console.log('sent', e);
    },

	render: function () {
		return (
			<div className="container">
				<h1>Contact us</h1>
                <div className="row">
                    <form
                        className="col s12"
                        onSubmit={this.onSubmit}
                        method="POST"
                        action="https://script.google.com/macros/s/AKfycbwgEGrQutGsYaiGQoTtk7AkfZ3VAgOOZDzhLGn8oVTjyXw7wy0/exec"
                    >
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate"/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate"/>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="msg" className="materialize-textarea"/>
                                <label htmlFor="msg">Message</label>
                            </div>
                        </div>
                        <button type="submit">send</button>
                    </form>
                </div>
			</div>
		);
	}
});

export default Contact;
