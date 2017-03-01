import React, {component} from 'react'
import NavLink from './NavLink'
import Mailsdb from './mailsdb'
import Mail from './mail'

class Spambox extends React.Component {
	
	render() {
		
		function MailList(props) {
			const mails = Object.keys(props.mails).map((mailId, index) => {
				const mail = props.mails[mailId]
				console.log(2, mailId)
				return (
					<li key={index}>
						<Mail id={mail.id} title={mail.title} content={mail.content} />
					</li>
				)
			})
			return (
				<ul>
					{mails}
				</ul>
			)
		}

		const spamMails = Mailsdb.spam
		console.log(1, spamMails)

		return (
			<div>
				<h3>Spambox</h3>
				
				<MailList mails={spamMails} />
				
			</div>
		)
	}	
}

export default Spambox