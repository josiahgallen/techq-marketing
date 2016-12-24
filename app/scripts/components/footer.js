/* global React */

import { footerCopy, logos, externalLinks } from '../data/copy';
import { getImagePath } from '../utils';

const Footer = React.createClass({
	render: function () {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Who is techQ marketing?</h5>
							<p className="grey-text text-lighten-4">{footerCopy.founderInfo}</p>
							<a href={externalLinks.linkedinWennie} target="_blank">
								<img className="external-site-logo" src={getImagePath(logos.linkedin)}/>
							</a>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Links</h5>
							<ul>
								<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
								<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
								<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
								<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						© 2017 techQ marketing
						<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
					</div>
				</div>
			</div>
		);
	}
});

export default Footer;
