/* global React, $ */
import { Link } from 'react-router';
import { navLinks, logos } from '../data/copy';
import { getImagePath } from '../utils';

const Nav = React.createClass({

	closeSideNav() {
		$('.side-nav').sideNav('hide');
	},

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
		this.closeSideNav();
	},

	_generateLinks(isSideNav=false) {
		return navLinks.map((link, index) => {
			const { name, path } = link;
			const hide = isSideNav ? this.closeSideNav : null;
			return (
				<li key={index} onClick={this.activeLink}>
					<Link to={path}>
						<span className="nav-link" onClick={hide}>{name}</span>
					</Link>
				</li>
			);
		});
	},

	showHome() {
		return location.pathname === '/' ? null : <li onClick={this.activeLink}><Link to="/"><span className="nav-link">Home</span></Link></li>;
	},

	render() {
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
							{this._generateLinks()}
						</ul>
						<ul className="side-nav" id="mobile-demo">
							{this.showHome()}
							{this._generateLinks(true)}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
});

export default Nav;
