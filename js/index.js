require ('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Inbox from './components/inbox'
import Spambox from './components/spambox'
import MailList from './components/mailList'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import store from './store';
import App from './components/app';


ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path='inbox' component={Inbox}>
				<Route path='mailList' component={MailList}/>
			</Route>
			<Route path='spambox' component={Spambox}>
				<Route path='spambox/mailList' component={MailList}/>
			</Route>
		</Route>
	</Router>
	), document.getElementById('app'))

