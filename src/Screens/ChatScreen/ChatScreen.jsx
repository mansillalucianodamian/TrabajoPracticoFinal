import React, { useEffect, useState } from "react"
import MessageList from "../../Components/MessageList/MessageList"
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"
import { NavLink, useParams } from "react-router"
import { getContactById, getContactList } from '../../services/contactService'
import ContactList from '../../Components/ContactList/ContactList'
import "./ChatScreen.css"
import ICONS from "../../constanst/Icons"
import ContactScreen from "../ContactScreen/ContactScreen"

const ChatSCreen = () => {
    const { contact_id } = useParams()
    const contact_selected = getContactById(contact_id)
    const contacts = getContactList()

    const [messages, setMessages] = useState([])
    const [showOptions, setShowOptions] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1020)

    const toggleOptions = () => setShowOptions(!showOptions)

    useEffect(() => {
        setMessages(contact_selected.messages)
    }, [contact_id])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1020)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const deleteMessageById = (message_id) => {
        const new_messages_list = messages.filter(message => message.id !== message_id)
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
        setMessages(prev => [...prev, new_message])
    }

    const deleteAllMenssages = () => {
        setMessages([])
    }

    const [searchTerm, setSearchTerm] = useState("")
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className={`chat_container ${isMobile && contact_id ? "only-chat" : ""}`}>
            <div className={`contact_screen ${isMobile && contact_id ? "hide" : ""}`}>
                <ContactScreen title="WhatsApp" showPerfil={false} />
            </div>
            <div className="message_container">
                <div className="message_header">
                    <div className="contact_info">
                        <NavLink to="/">
                            <button className="icon-button-left"><ICONS.ArrowLeft /></button>
                        </NavLink>
                        <img src={contact_selected.avatar} alt={contact_selected.name} width={50} />
                        <h1>{contact_selected.name}</h1>
                    </div>
                    <div className="buttons options-wrapper">
                        <ICONS.Search className="buttons_type" />
                        <ICONS.Optiopns className="buttons_type" onClick={toggleOptions} />
                        {showOptions && messages.length > 0 && (
                            <ul className="dropdown-menu">
                                <li onClick={deleteAllMenssages}><ICONS.Trash className="icon-space" /> Vaciar Chats</li>
                                <li><ICONS.Info className="icon-space" /> Info. del contacto</li>
                                <li><ICONS.Out className="icon-space" /> Cerrar Chat</li>
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