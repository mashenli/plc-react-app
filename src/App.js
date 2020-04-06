import React from 'react';
// import logo from './logo.svg';
import { Provider } from 'react-redux';
import Router from './router/index';
import store from './redux/store';
// import './App.css';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
