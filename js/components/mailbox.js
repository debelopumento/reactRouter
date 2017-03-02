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
						<NavLink to={`/${mailboxName}/${mailId}`}>{mail.title}</NavLink>
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

		const mailboxName = this.props.mailboxName
		return (
			<div>
				<h3>{mailboxName}</h3>
				<MailList mails={Mailsdb[mailboxName]} mailboxName={mailboxName} />
				{this.props.children}
			</div>
		)
	}	
}

export default Mailbox