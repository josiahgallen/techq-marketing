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
					<div className="container">
						<ul>{servicesPage[section]}</ul>
					</div>
				</div>
			);
		});
	},

	render: function () {
		return (
			<div className="container">
				{this._generateContent()}
			</div>
		);
	}
});

export default Services;
