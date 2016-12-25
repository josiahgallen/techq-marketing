/* global React, $ */
import { Link } from 'react-router';
import { navLinks, logos } from '../data/copy';
import { getImagePath } from '../utils';

const Nav = React.createClass({

	clearActiveLink() {
		$('li').removeClass('active');
	},

	activeLink(e) {
		e.preventDefault();
		const { nodeName, parentNode } = e.target;
		this.clearActiveLink();
		if(nodeName === 'SPAN') {
			parentNode.parentNode.classList.add('active');
		} else if(nodeName === 'A') {
			parentNode.classList.add('active');
		}
	},

	_generateLinks() {
		return navLinks.map((link, index) => {
			const { name, path } = link;
			return (
				<li key={index} onClick={this.activeLink}>
					<Link to={path}>
						<span className="nav-link">{name}</span>
					</Link>
				</li>
			);
		});
	},

	render: function () {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link to="/">
							<span className="brand-logo" onClick={this.clearActiveLink}>
								<img className="tech-logo" src={getImagePath(logos.techQ)}/>
								<span className="tag-line">a blended marketing company</span>
							</span>
						</Link>
						<ul className="right hide-on-med-and-down">
							{this._generateLinks()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
});

export default Nav;
