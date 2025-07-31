import React from "react"
import "./Message.css"
import ICONS from "../../constanst/Icons"

const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {
	/* Cuando necesito pasar un parametro a una funcion asociada a un evento, podemos encerrarlo en otra funcion, de esta manera evitamos que se ejecuta rendirzarse el componente */
	return (
		<div className="message_wapper">
			<div className="message_bubble">
				<p className="message_text">{texto}</p>
				<span className="message_time">{hora}</span>
				<span className="message_status">
					{status === "visto" ? (
						<ICONS.CheckAll className="chechkall" /> // ícono doble
					) : (
						<ICONS.Check />    // ícono simple
					)}
				</span>
				<button className="delete_message" onClick={() => { deleteMessageById(id) }}><ICONS.Delete/></button>
			</div>
		</div>
	)
}
export default Message