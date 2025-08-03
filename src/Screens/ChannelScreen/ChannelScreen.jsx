import React from 'react'
import ContactScreen from '../ContactScreen/ContactScreen'
import ICONS from '../../constanst/Icons'
import './ChannelScreen.css'

const ChannelScreen = () => {
    return (
        <div className='status_conteiner' >
            <ContactScreen showPerfil={false} showContact={false} />
            <div className="status_content">
                <div className='status_header'>
                    <h2 className='title_principal'>Canales</h2>
                    <div className='icons_estatus'>
                        <ICONS.PlusC />
                
                    </div>
                </div>
                <div className='channel_text'>
                    <span className='text_my_channel'>Conoce las novedades de tus temas favoritos</span>
                    <span className='text_description'>A continuacion, busca canales para seguir.</span>
                </div>
                <div className='status_text_content'>
                    <ICONS.ChatLeft className='status_icon' />
                    <span className='status_title'>Descubre canales</span>
                    <span className='status_description'>Aun no te uniste a ningun canal</span>
                </div>
            </div>
            <div className='status_list'>
                <ICONS.ChatLeft className='status_icon'></ICONS.ChatLeft>
                <h2 className='status_title'>Descubre canales</h2>
                <span className='status_description'>Entretenimiento, deportes, noticias, estilo de vida, personas y mucho más. Sigue los canales que te interesan.</span>
                <span className='status_security'> <ICONS.Lock className='lock_icon' />Tus actualizaciones de estado están cifradas de extremo a extremo.</span>
            </div>
        </div>
    )
}

export default ChannelScreen