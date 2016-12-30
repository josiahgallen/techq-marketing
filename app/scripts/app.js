/* global React, $ */

import { Router, Route, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';
import Nav from './components/nav';
import Home from './components/home';
import Company from './components/company';
import Contact from './components/contact';
import Services from './components/services';
import NotFound from './components/notFound';
// import store from './redux/store';


const Container = React.createClass({

	propTypes: {
		children: React.PropTypes.object
	},


	componentDidMount() {
		$('.button-collapse').sideNav();
	},

	componentWillUnmount() {
		clearInterval(this.changeCarousel);
	},

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
				<Route path="/services" component={Services}/>
				<Route path="/*" component={NotFound}/>
			</Route>
		</Router>
	// </Provider>
);

export default router;
