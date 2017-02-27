require ('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Inbox from './components/inbox'
import Spambox from './components/spambox'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import store from './store';
import App from './components/app';


ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path='/inbox' component={Inbox}>
			</Route>
			<Route path='/spambox' component={Spambox}>
			</Route>
		</Route>
	</Router>
	), document.getElementById('app'))

