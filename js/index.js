require ('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Mailbox from './components/mailbox'
//import Spambox from './components/spambox'
//import MailList from './components/mailList'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import store from './store';
import App from './components/app';
//import Mail from './components/mailbox'
import Mailsdb from './components/mailsdb'


function Mail(props) {
	return (
		<div>
			<h3>{props.title}</h3>
			<p>{props.content}</p>
		</div>
	)
}

function MailContainer(props) {
	const mail = Mailsdb.spam[props.params.id]
	console.log(10, mail)
	return(
		<Mail id={mail.id} title={mail.title} content={mail.content} />
	)
}
function MailboxContainer(props) {
	const MailboxName = props.params.mailboxName
	console.log(90, MailboxName)
	return (
		<div>
			<Mailbox mailboxName={MailboxName} />
			{props.children}
		</div>
	)
}
console.log(11)

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path=':mailboxName' component={MailboxContainer}>
				<Route path='/:mailboxName/:id' component={MailContainer}/>
			</Route>
			
		</Route>
	</Router>
	), document.getElementById('app'))

