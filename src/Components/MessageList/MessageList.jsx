import React from "react"
import Message from "../../Components/Message/Message"
import "./MessageList.css"
const MessagesList = ({ messages, deleteMessageById }) => {
	//Esto es un ejemplo de redenrizado condicional
	//Tarea para investigar: esto se puede hacer con el algo llamado operador ternario

	if (messages.length === 0) {
		return <span className="no_messages">Aun no tienes mensajes!</span>
	}
	const lista_mensajes = messages.map(
		function (message) {
			return <div>
				<Message
					key={message.id}
					emisor={message.emisor}
					hora={message.hora}
					id={message.id}
					texto={message.texto}
					status={message.status}
					deleteMessageById={deleteMessageById}
				/>
			</div>
		}
	)
	return (
		<div className="message_list">
			{lista_mensajes}
		</div>
	)
}
export default MessagesList