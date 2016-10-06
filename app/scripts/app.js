
// React-Router - used to drive your application
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Test from './components/test';
// import store from './redux/store';

// Router below
const router = (
	// <Provider store={store}>
		<Router history={browserHistory} >
			<Route path="/" component={Test}/>
		</Router>
	// </Provider>
);

export default router;
