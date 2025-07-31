import React from "react";
import "./Message.css";
import ICONS from "../../constanst/Icons";

const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {
	const esEnviado = emisor === "YO";

	return (
		<div className={`message_wrapper ${esEnviado ? "enviado" : "recibido"}`}>
			<div className="message_bubble">
				<p className="message_text">{texto}</p>
				<span className="message_time">{hora}</span>
				{esEnviado && (
					<span className="message_status">
						{status === "visto" ? (
							<ICONS.CheckAll className="checkall" />
						) : (
							<ICONS.Check />
						)}
					</span>
				)}
				{esEnviado && (
					<button className="delete_message" onClick={() => deleteMessageById(id)}>
						<ICONS.Delete />
					</button>
				)}
			</div>
		</div>
	);
};

export default Message;