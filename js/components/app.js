import React, {component} from 'react'
import NavLink from './NavLink'
import Inbox from './inbox'
import { Link } from 'react-router'

const App = (props) => {
	return 	<div>
				<h1>Your emails</h1>
				<ul role='nav'>
					<li><NavLink to='/inbox'>Inbox</NavLink></li>
					<li><NavLink to='/spambox'>Spambox</NavLink></li>
				</ul>
				{props.children}
			</div>
}

export default App
