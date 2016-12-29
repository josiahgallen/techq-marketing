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

	showHome() {
		return location.pathname === '/' ? null : <Link to="/"><span className="nav-link">Home</span></Link>;
	},

	render: function () {
		const links = this._generateLinks();
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link to="/">
							<span className="brand-logo" onClick={this.clearActiveLink}>
								<img className="tech-logo" src={getImagePath(logos.techQ)}/>
								<span className="tag-line hide-on-small-and-down">a blended marketing company</span>
							</span>
						</Link>
						<a data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							{links}
						</ul>
						<ul className="side-nav" id="mobile-demo">
							{this.showHome()}
							{links}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
});

export default Nav;
