/* global React */

import { companyBlurbs, logos, externalLinks } from '../data/copy';
import { getImagePath } from '../utils';

const Company = React.createClass({

	_generateBlurbs() {
		return companyBlurbs.map((blurb, index) => {
			return <p key={index}>{blurb}</p>;
		});
	},

	render: function () {
		return (
			<div>
				<div className="card-panel second-nav">
					<span className="white-text"><h2>Company</h2></span>
				</div>
				<div className="container">
					{this._generateBlurbs()}
					<a href={externalLinks.linkedinWennie} target="_blank">
						<img className="external-site-logo" src={getImagePath(logos.linkedin)}/>
					</a>
				</div>
			</div>
		);
	}
});

export default Company;
