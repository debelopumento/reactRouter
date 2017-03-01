import React, {component} from 'react'
import NavLink from './NavLink'
import MAILS from './mailsdb'
import MailListContainer from './mail-list-container'
import Mail from './mail'
import MailList from './mailList'
class Inbox extends React.Component {

	render() {		
	
		return (
			<div>
				<h3>Inbox</h3>
				<MailList mails={MAILS} />			
			</div>
		)
	}	
}

export default Inbox


