/* global React */

import { servicesPage } from '../data/copy';
import { getImagePath } from '../utils';

const Services = React.createClass({

	_generateContent() {
		return Object.keys(servicesPage).map((heading, index) => {
			const section = servicesPage[heading];
			const { banner, copy, results, tagline } = section;
			const path = getImagePath(banner);
			return (
				<div key={index}>
					<h4 className="margin-top-80">{heading.toUpperCase()}</h4>
					<div className="section-pic-wrapper">
						<div className="section-pic" style={{ backgroundImage: `url(${path})` }}></div>
					</div>
					<div className="row">
						<div className="col m12 l6 margin-top-40">
							{tagline}
							<div className="custom-container">
								<ul>{copy}</ul>
							</div>
						</div>
						<div className="col m12 l6 margin-top-40">
							<div className="custom-container">
								<span className="sub-heading"><h6 className="no-margin">RESULTS</h6></span>
								<ul>{results}</ul>
							</div>
						</div>
					</div>
				</div>
			);
		});
	},

	render() {
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
