/* global React */

import { Link } from 'react-router';

const NotFound = React.createClass({

	render: function () {
		return (
			<div className="container">
				<h1>404 Page not Found</h1>
				<Link to="/">Back to home page</Link>
			</div>
		);
	}
});

export default NotFound;
