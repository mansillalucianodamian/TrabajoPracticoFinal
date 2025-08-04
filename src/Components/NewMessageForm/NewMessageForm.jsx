import React from 'react'
import './NewMessageForm.css'
import ICONS from '../../constanst/Icons'

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        addNewMessage(new_message_text)
        event.target.message.value = ''
    }

    return (
        <form
            className='message_form' onSubmit={handleSubmitSendMessageForm}>
                <label htmlFor="message"><ICONS.Plus className='icon_plus'/></label>
                <div className='message_input'>
                    <input type="text" placeholder='Escribe un mensaje' id='message' name='message' required />
                </div>
                <button type='submit'><ICONS.Send className='icon_send'/></button> 
        </form>
    )
}

export default NewMessageForm