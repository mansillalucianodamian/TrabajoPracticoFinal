import React, { useEffect, useState } from "react"
import MessageList from "../../Components/MessageList/MessageList"
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"
import { useParams } from "react-router"
import { getContactById, getContactList } from '../../services/contactService'
import ContactList from '../../Components/ContactList/ContactList'
import "./ChatScreen.css"




const ChatSCreen = () => {
    const { contact_id } = useParams()

    const contact_selected = getContactById(contact_id)

    const contacts = getContactList()

    const [messages, setMessages] = useState([])
    useEffect(() => {
        setMessages(contact_selected.messages)
    }, [contact_id])

    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => setShowOptions(!showOptions);

    const deleteMessageById = (message_id) => {
        const new_messages_list = []
        for (const message of messages) {
            if (message.id !== message_id) {
                new_messages_list.push(message)
            }
        }
        setMessages(new_messages_list)
    }
    const addNewMessage = (text) => {
        const new_message = {
            emisor: "YO",
            hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            texto: text,
            status: "visto",
            id: messages.length + 1
        }
        const cloned_menssages_list = [...messages]
        cloned_menssages_list.push(new_message)
        setMessages(cloned_menssages_list)
    }
    const deleteAllMenssages = () => {
        setMessages([])
    }

    const [searchTerm, setSearchTerm] = useState("");

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="chat_container">
            <div className="sidebar">
                <div className="sidebar_header">
                    <div className="sidebar_icons_top">
                        <button title="Chats"><i class="bi bi-chat-right-text"></i></button>
                        <button title="Estado"><i class="bi bi-chat-right-text"></i></button>
                        <button title="Canales"><i class="bi bi-chat-right-text"></i></button>
                        <button title="Comunidad"><i class="bi bi-chat-right-text"></i></button>
                    </div>
                    <div className="sidebar_bottom">
                        <i class="bi bi-gear"></i>
                        <img src={contact_selected.avatar} alt={contact_selected.name} width={30} />
                    </div>
                </div>
            </div>
            <div className="contact_container ">
                <div className="contact_header">
                    <h1 className="title_principal">WhatsApp</h1>
                </div>
                <div className="contact_search">
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        placeholder="Buscar un chat o iniciar uno nuevo"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="contact_filters">
                    <button className="filter_button">Todos</button>
                    <button className="filter_button">No leídos</button>
                    <button className="filter_button">Favoritos</button>
                    <button className="filter_button">Grupos</button>
                </div>
                <div className="contact_list">
                    <ContactList contacts={filteredContacts} />
                </div>
            </div>
            <div className="message_container contact_background">
                <div className="message_header">
                    <div className="contact_info">
                        <img src={contact_selected.avatar} alt={contact_selected.name} width={50} />
                        <h1>{contact_selected.name}</h1>
                    </div>
                    <div className="buttons options-wrapper">
                        <div className="options">
                            <i class="bi bi-camera-video"></i>
                            <i class="bi bi-chevron-down"></i>
                        </div>
                        <i class="bi bi-search"></i>
                        <i class="bi bi-three-dots-vertical" onClick={toggleOptions}></i>
                        {showOptions && messages.length > 0 && (
                            <ul className="dropdown-menu">
                                <li onClick={deleteAllMenssages}><i class="bi bi-trash"></i> Eliminar todos</li>
                                <li>Info. del contacto</li>
                                <li>Seleccionar mensajes</li>
                                <li>Silenciar notificaciones</li>
                                <li>Mensajes Temporales</li>
                                <li>Añadir a favoritos</li>
                                <li>Cerrar Chat</li>
                                <br />
                                <li>Reportar</li>
                                <li>Bloquear</li>
                                <li>Vaciar chat</li>
                                <li>Eliminar chat</li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="message_list">
                    <MessageList messages={messages} deleteMessageById={deleteMessageById} />
                </div>
                <div className="new_message_form">
                    {<NewMessageForm addNewMessage={addNewMessage} />}
                </div>
            </div>
        </div>

    )
}

export default ChatSCreen 