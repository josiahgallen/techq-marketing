/* global React, $ */
import { Link } from 'react-router';

const Nav = React.createClass({

	activeLink(e) {
		e.preventDefault();
		e.target.parentNode.classList.add('active')
		console.log(1,e.target.parentNode);

	},

	render: function () {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link to="/">
							<span className="brand-logo">
								<span className="tech-logo">tech</span><span className="q-logo">Q </span>blended marketing
							</span>
						</Link>
						<ul className="right hide-on-med-and-down">
							<li onClick={this.activeLink}><Link to="/company"><span className="nav-link">Company</span></Link></li>
							<li onClick={this.activeLink}><Link to="#"><span className="nav-link">Services</span></Link></li>
							<li onClick={this.activeLink}><Link to="#"><span className="nav-link">Our Work</span></Link></li>
							<li onClick={this.activeLink}><Link to="#"><span className="nav-link">Contact</span></Link></li>
							<li onClick={this.activeLink}><Link to="#"><span className="nav-link">Resources</span></Link></li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
});

export default Nav;
