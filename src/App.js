import React from 'react';
// import logo from './logo.svg';
import { Provider } from 'react-redux';
// import Router from './router/index';
import store from './redux/store';
import Index from './page/index/index'
// import './App.css';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Index />
			</Provider>
		);
	}
}

export default App;
