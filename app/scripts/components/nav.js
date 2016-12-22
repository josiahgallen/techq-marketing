/* global React, $ */
import { Link } from 'react-router';
import { navLinks, logo } from '../data/copy';
import { getImagePath } from '../utils';

const Nav = React.createClass({

	activeLink(e) {
		e.preventDefault();
		e.target.parentNode.classList.add('active')
		console.log(1,e.target.parentNode);

	},

	_generateLinks() {
		return navLinks.map((link, index) => {
			const { name, path } = link;
			return (
				<li key={`navLink${index}`} onClick={this.activeLink}>
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
							<span className="brand-logo">
								<img className="tech-logo" src={getImagePath(logo)}/>
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
