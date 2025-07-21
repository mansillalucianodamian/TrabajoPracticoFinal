import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        //Llamos a la funcion de agregar nuevo mensaje
        addNewMessage(new_message_text)
        //Reseteamos el campo
        event.target.message.value = ''
    }

    return (
        <form
            className='message_form' onSubmit={handleSubmitSendMessageForm}>
                <label htmlFor="message"><i class="bi bi-plus-lg"></i></label>
                <div className='message_input'>
                    <input type="text" placeholder='Escribe un mensaje' id='message' name='message' required />
                </div>
                <button type='submit'><i class="bi bi-send-fill"></i></button> 
        </form>
    )
}

export default NewMessageForm