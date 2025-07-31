
import React from 'react';
import { Link } from 'react-router';
import './ContactItem.css'

const ContactItem = ({ contact }) => {
  return (
    <Link className='contact_item' to={`/contact/${contact.id}/messages`}>
      <div className='contact_left'>
        <div className='avatar_conteiner'>
          <img className='avatar' src={contact.avatar} alt={contact.name} />
        </div>
        <div className='contact_information'>
          <h2 className='contact_name'>{contact.name}</h2>
          <span className='contact_description'>{contact.description}</span>
        </div>
      </div>


      <div className='contact_status'>
        <span className='contact_last_connection'>{contact.lastConnection}</span>
  
      </div>

    </Link>
  );
};

export default ContactItem;