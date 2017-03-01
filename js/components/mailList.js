import React, {component} from 'react'
import MAILS from './mailsdb'
import NavLink from './NavLink'
import Mail from './mail'

class MailList extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}


	render(props) {
		const inboxMails = MAILS.inbox
		console.log(10, inboxMails)
		const mailList = Object.keys(inboxMails).map((mail, index) => {
			console.log(11, inboxMails, 12, index, 13, inboxMails.index)
			return (
				<li key={index}><Mail id={inboxMails.index.id} title={inboxMails.index.title} /></li>
			)
		})
		
		return (
			<div>
				<ul>{mailList}</ul>
			</div>
		)
	}	
}

export default MailList