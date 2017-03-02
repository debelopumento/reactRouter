export defualt function MailContainer(props) {
			const mail = Mailsdb[props.params.id]
			return(
				<Mail id={mail.id} title={mail.title} content={mail.content} />
			)
		}