/* global React */

import { companyBlurbs } from '../data/copy';

const Company = React.createClass({
	render: function () {
		return (
			<div className="component-wrapper">
				<div className="card-panel second-nav">
					<span className="white-text"><h3>Company</h3></span>
				</div>
				<div className="container">
					<div className="company-copy-wrapper">
						{companyBlurbs}
					</div>
				</div>
			</div>
		);
	}
});

export default Company;
