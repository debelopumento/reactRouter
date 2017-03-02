import React, {component} from 'react'
import NavLink from './NavLink'
import Inbox from './inbox'
import { Link } from 'react-router'

const App = (props) => {
	const mailboxes = ['inbox', 'spam'].map((mailbox, index) => {
		return (
			<li key={index}>
				<NavLink to={`/${mailbox}`}>{mailbox}</NavLink>
			</li>
		)
	})



	return 	<div>
				<h1>Your emails</h1>
				<ul role='nav'>
					{mailboxes}
				</ul>
				<ul role='nav'>
					<li><NavLink to='/inbox'>Inbox</NavLink></li>
					<li><NavLink to='/spambox'>Spambox</NavLink></li>
				</ul>
				{props.children}
			</div>
}

export default App
