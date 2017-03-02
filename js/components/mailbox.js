import React, {component} from 'react'
import NavLink from './NavLink'
import Mailsdb from './mailsdb'
//import Mail from './mail'
import {Link} from 'react-router'

class Mailbox extends React.Component {
	
	render() {
		function Mail(props) {
			return (
				<div>
					<h3>{props.title}</h3>
					<p>{props.content}</p>
				</div>
			)
		}
		
		function MailList(props) {
			const mails = Object.keys(props.mails).map((mailId, index) => {
				const mail = props.mails[mailId]
				console.log(2, mailId)
				return (
					<li key={index}>
						<NavLink to={`/spambox/${mailId}`}>{mail.title}</NavLink>
					</li>
				)
			})
			return (
				<div>
					<ul>
						{mails}
					</ul>
					
				</div>
			)
		}

		const spamMails = Mailsdb.spam
		console.log(11, spamMails)

		return (
			<div>
				<h3>Spambox</h3>
				
				<MailList mails={spamMails} />
				{this.props.children}
			</div>
		)
	}	
}

export default Mailbox