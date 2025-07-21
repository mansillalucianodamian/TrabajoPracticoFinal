import React from "react"
import "./Message.css"

const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {
	/* Cuando necesito pasar un parametro a una funcion asociada a un evento, podemos encerrarlo en otra funcion, de esta manera evitamos que se ejecuta rendirzarse el componente */
	return (
		<div className="message_wapper">
			<div className="message_bubble">
				<div className="message_content">
					<p className="message_text">{texto}</p>
				</div>
				<div className="message_info_conteiner">
					<button className="delete_message" onClick={() => { deleteMessageById(id) }}><i class="bi bi-trash3"></i></button>
					<div className="message_info">
						<span className="message_time">{hora}</span>
						<span className="message_status">
							{status === "visto" ? (
								<i className="bi bi-check-all"></i> // ícono doble
							) : (
								<i className="bi bi-check"></i>     // ícono simple
							)}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Message