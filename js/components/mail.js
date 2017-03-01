import React, {component} from 'react'

/*
class Mail extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}


	render(props) {
		return (
			<div>
				<h3>{props.title}</h3>
				<p>{props.content}</p>
			</div>
		)
	}	
}

export default Mail
*/

export default function Mail(props) {
			return (
				<div>
					<h3>{props.title}</h3>
					<p>{props.content}</p>
				</div>
			)
		}