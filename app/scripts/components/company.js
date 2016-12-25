/* global React */

import { companyBlurbs } from '../data/copy';

const Company = React.createClass({

	_generateBlurbs() {
		return companyBlurbs.map((blurb, index) => {
			return <p key={index}>{blurb}</p>;
		});
	},

	render: function () {
		return (
			<div className="component-wrapper">
				<div className="card-panel second-nav">
					<span className="white-text"><h3>Company</h3></span>
				</div>
				<div className="container">
					{this._generateBlurbs()}
				</div>
			</div>
		);
	}
});

export default Company;
