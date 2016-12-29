/* global React */

import { footerCopy, logos, profile } from '../data/copy';
import { getImagePath } from '../utils';

const Footer = React.createClass({
	render: function () {
		const { linkedin, contactEmail } = profile;
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Who is techQ marketing?</h5>
							<p className="grey-text text-lighten-4">{footerCopy.founderInfo}</p>
							<a href={linkedin} target="_blank">
								<img className="external-site-logo" src={getImagePath(logos.linkedin)}/>
							</a>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Connect with techQ</h5>
							<ul>
								<div className="chip">
									<a href={`mailto:${contactEmail}`} target="_blank">contact@techqmarketing.com</a>
								</div>
								{/* <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
								<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
								<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						© 2017 techQ marketing
						{/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
					</div>
				</div>
			</div>
		);
	}
});

export default Footer;
