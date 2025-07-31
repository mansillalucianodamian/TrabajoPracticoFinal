import React, { useState } from 'react';
import { getContactList } from '../../services/contactService';
import ContactList from '../../Components/ContactList/ContactList';
import './ContactScreen.css'
import ICONS from '../../constanst/Icons';




const ContactScreen = ({ title = "Contactos", showPerfil = true }) => {
  const contacts = getContactList()
  const [contactsState, setContactsState] = useState(contacts);

  return (
    <div className="contact_screen">
      <div className="sidebar_header">
        <div className="sidebar_icons_top">
          <button className='icon-button'><ICONS.ChatLeft /></button>
          <button className='icon-button'><ICONS.Disc /></button>
          <button className='icon-button'><ICONS.ChatText /></button>
          <button className='icon-button'><ICONS.People /></button>
        </div>
        <div className="sidebar_bottom">
          <button className='icon-button'><ICONS.Gear /></button>
          {/* <img src={contact.avatar} alt={contact.name}/> */}
        </div>
      </div>
      <div className="contact_conteiner">
        <div className="contact_header">
          <h1 className="title_principal">{title}</h1>
        </div>
        <div className="contact_imput_list_c">
          <div className="contact_search">
            <ICONS.Search className="search_icon" />
            <input
              type="text"
              placeholder="Buscar un chat o iniciar uno nuevo"
            />
          </div>
          <div className="contact_filters">
            <button className="filter_button">Todos</button>
            <button className="filter_button">No leídos</button>
            <button className="filter_button">Favoritos</button>
            <button className="filter_button">Grupos</button>
          </div>
        </div>
        <div className='contact_list'>
          <ContactList contacts={contactsState} />
        </div>
      </div>
      {showPerfil && (
        <div className='profile_conteiner'>
          <div className='profile_content'>
            <img className='img_perfil' src="./images/inicio.png" alt="" />
            <h2 className='title_profile'>Descarga WhatsApp para Windows</h2>
            <span className='download_text'>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</span>
            <button className='download_button'>Descargar</button>
            <span className='secure_text'> <ICONS.Lock className='lock_icon'/> Tus mensajes personales están cifrados de extremo a extremo.</span>
          </div>
        </div>)}
    </div>
  );
};

export default ContactScreen;
