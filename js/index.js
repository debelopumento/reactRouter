require ('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Mailbox from './components/mailbox'
import Spambox from './components/spambox'
import MailList from './components/mailList'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import store from './store';
import App from './components/app';
import Mail from './components/mail'
import Mailsdb from './components/mailsdb'

function MailContainer(props) {
	const mail = Mailsdb.spam[props.params.id]
	console.log(10)
	return(
		<Mail id={mail.id} title={mail.title} content={mail.content} />
	)
}
console.log(11)

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path=':mailboxName' component={Mailbox}>
				<Route path='mailList' component={MailList}/>
			</Route>
			<Route path='spambox' component={Spambox}>
				<Route path=':id' component={MailContainer}/>
			</Route>
		</Route>
	</Router>
	), document.getElementById('app'))

