import React, { useState } from "react"
import MessageList from "../../Components/MessageList/MessageList"
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"
import { useParams } from "react-router"
import { getContactById } from '../../services/contactService'



const ChatSCreen = () => {

    /* Paso 1: Obtener el contact_id de la url 
    Paso 2: Buscar contact por su contact_id
    Paso 3: Cargar el contact.messages al estado de mensajes */

    //Paso 1:
    //useParams() nos permite acceder a los parametros de la url
    //Siempre retornara un objeto

    const {contact_id} = useParams()

    //Paso 2:
    const contact_selected = getContactById(contact_id)
    //Paso 3:
const [messages, setMessages] = useState(contact_selected.messages)


    /* useState:Crea estados
parametro de useState: El valor de mi estado inicial 
messages: variable que guarda el valor de mi estado
setMesages: Funcion oara actualizar el estado de mensajes
Reglas de los estados: son INMUTABLES, no podemos cambiarlo de valor
Los podemos actualizar pero no cambiar, ESTO NO SE PUEDE: messages.push("Hola"), messages.splice(1,1)
*/

    const deleteMessageById = (message_id) => {
        /* Logica para actualizar el emsaje eliminando el mensaje con el id recibido */
        const new_messages_list = []
        /* Recorrer la lista de mensaje (estado) y agregar a los mensajes que sean de un id distinto al id recibido*/
        //Pueden usar .filter() (INVESTIGAR)
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
            hora: "11.10", //investigar acerca de date.
            texto: text,
            status: "no-visto",
            id: messages.length + 1
        }
        //Clonar la lista de mensajes (Porque: El clon al ser otra variable PERO NO UN ESTADO si lo vamos a poder mutar)
        const cloned_menssages_list = [...messages]
        //Este push es valido porque no estamos mutando en estado 'messages' sino mas bien el clon de ese estado
        cloned_menssages_list.push(new_message)
        setMessages(cloned_menssages_list)
    }
    const deleteAllMenssages = () => {
        setMessages([])
    }



    return (
        <div>

            <h1>Mensajes:</h1>
            {
                messages.length > 0
                &&
                <button onClick={deleteAllMenssages}>Eliminar todos los mensajes</button>
            }

            <MessageList messages={messages} deleteMessageById={deleteMessageById} />
            {<NewMessageForm addNewMessage={addNewMessage} />}

        </div>

    )
}

export default ChatSCreen 