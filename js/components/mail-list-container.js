import React, {component} from 'react'
import MAILS from './mailsdb'
import MailList from './mailList'

/*
class MailListContainer extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}


	render() {
		return (
			<MailListContainer mails={MAILS} />
		)
		
	}	
}
*/


export default function MailListContainer() {
	return (
			<MailListContainer mails={MAILS} />
		)
}
