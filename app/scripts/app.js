/* global React */

import { Router, Route, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';
import Nav from './components/nav';
import Home from './components/home';
import Company from './components/company';
import Contact from './components/contact';
require('../../node_modules/materialize-css/dist/css/materialize.css');
require('../../node_modules/materialize-css/dist/js/materialize.min.js');
// import store from './redux/store';


const Container = React.createClass({

	propTypes: {
		children: React.PropTypes.object
	},
	// componentWillMount() {
	// 	$(document).ready(() => {
	// 		console.log('runnin');
	// 		const $carousel = $('.carousel-slider.carousel');
	// 		$carousel.carousel({ full_width: true });
	// 		setInterval(() => {
	// 			$carousel.carousel('next');
	// 		}, 10000)
	// 	});
	// },

	render: function () {
		return (
			<div>
				<Nav/>
				{this.props.children}
			</div>
		);
	}
});

const router = (
	// <Provider store={store}>
		<Router history={browserHistory} >
			<Route component={Container}>
				<Route path="/" component={Home}/>
				<Route path="/company" component={Company}/>
				<Route path="/contact" component={Contact}/>
			</Route>
		</Router>
	// </Provider>
);

export default router;