/* global React */

import { companyBlurbs, profile, profileBlurb } from '../data/copy';
import { getImagePath } from '../utils';

const Company = React.createClass({
	render() {
		const path = getImagePath('company_pic.png');
		return (
			<div className="component-wrapper">
				<div className="card-panel second-nav">
					<span className="white-text"><h3>Company</h3></span>
				</div>
				<div className="company-copy-wrapper">
					<div className="custom-container-2">
						<h4 style={{ marginBottom: '40px' }} className="red-emphasis-words centered">Technology focused, business minded</h4>
						{companyBlurbs}
					</div>
					<div className="company-pic-wrap margin-top-80">
						<div className="company-pic" style={{ backgroundImage: `url(${path})` }}></div>
					</div>
					<div className="custom-container-2 margin-top-80">
						<div className="row">
							<div className="col s12 m6 profile-pic-wrapper">
								<img className="profile-pic" src={getImagePath(profile.pic)}/>
								<h6>Founder &amp; CEO</h6>
							</div>
							<div className="col s12 m6">{profileBlurb}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Company;
