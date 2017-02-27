import React, {component} from 'react';
import NavLink from './NavLink'


const App = () => {
	return 	<div>
				<h1>Your emails</h1>
				<ul role='nav'>
					<li><NavLink to='/inbox'>Inbox</NavLink></li>
					<li><NavLink to='/spambox'>Spambox</NavLink></li>
				</ul>
			</div>;
}

export default App;

