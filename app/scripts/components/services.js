/* global React */

import { servicesPage } from '../data/copy';

const Services = React.createClass({

	_generateContent() {
		return Object.keys(servicesPage).map((section, index) => {
			return (
				<div key={index}>
					<div className="card-panel services-section">
						<span className="white-text"><h6>{section.toUpperCase()}</h6></span>
					</div>
					{/* <h6 className="services-section">{section.toUpperCase()}</h6> */}
					<div className="container">
						<ul>{servicesPage[section]}</ul>
					</div>
				</div>
			);
		});
	},

	render: function () {
		return (
			<div>
				<div className="card-panel second-nav">
					<span className="white-text"><h3>Services</h3></span>
				</div>
				<div className="container component-wrapper">
					{this._generateContent()}
				</div>
			</div>
		);
	}
});

export default Services;
