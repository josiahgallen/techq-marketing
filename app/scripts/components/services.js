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
					<div className="section-pic-wrapper margin-top-80">
						<div className="section-pic" style={{ backgroundImage: `url(${path})` }}></div>
					</div>
					<div className="row margin-top-40">
						<div className="col s6">
							<div className="card-panel services-section">
								<span className="white-text"><h6>{heading.toUpperCase()}</h6></span>
							</div>
						</div>
						<div className="card-panel services-section">
							<span className="white-text"><h6>RESULTS</h6></span>
						</div>
					</div>
					<div className="row">
						<div className="col s6">
							{tagline}
							{/* <div className="custom-container"> */}
								<ul>{copy}</ul>
							{/* </div> */}
						</div>
						<div className="col s6">
							{/* <div className="custom-container"> */}
								<ul>{results}</ul>
							{/* </div> */}
						</div>
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
