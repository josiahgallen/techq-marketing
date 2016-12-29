/* global React */

const Contact = React.createClass({

	getTypeForm() {
		/* eslint-disable */
		return (
			<div>
				<div className="typeform-widget" data-url="https://wennieallen.typeform.com/to/mZ6xyl" data-text="Contact" style={{ width: '100%', height: '500px' }}></div>
				{(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'widget.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()}
				<div style={{ fontFamily: 'Sans-Serif', fontSize: '12px', color: '#999', opacity: '.5', paddingTop: '5px' }}><a href="https://www.typeform.com/examples/forms/contact-form-template/?utm_campaign=mZ6xyl&amp;utm_source=typeform.com-5988387-Basic&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-contactform&amp;utm_term=EN" style={{ color: '#999' }} target="_blank">Contact form</a>powered by Typeform</div>
			</div>
		);
		/* eslint-enable */
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
							{this.getTypeForm()}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Contact;
