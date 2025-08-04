import React from 'react'
import ContactScreen from '../ContactScreen/ContactScreen'
import ICONS from '../../constanst/Icons'
import './CommunityScreen.css'

const CommunityScreen = () => {
    return (
        <div className='status_conteiner' >
            <ContactScreen showPerfil={false} showContact={false} />
            <div className="status_content">
                <div className='status_header'>
                    <h2 className='title_principal'>Comunidades</h2>
                    <div className='icons_estatus'>
                        <ICONS.PlusC />
                    </div>
                </div>
                <div className='status_text_content'>
                    <img className='img_community' src="/images/Community.png" alt="" />
                    <span className='community_title'>Crea una comunidad para mantenerte en contacto</span>
                    <span className='community_description'>Las comunidades reunen a los miembros en grupos por temas y facilitan la recepcion de avisos de los administradores. Cualquier comunidad a la que se añada aparecera aqui.</span>
                    <button className='download_button'>Iniciar tu comunidad</button>
                </div>
            </div>
            <div className='status_list'>
                <ICONS.People className='status_icon'></ICONS.People>
                <h2 className='status_title'>Crea Comunidades</h2>
                <span className='status_description'>Crea grupos para reunir a los miembros en función de temas y envíales fácilmente avisos del administrador.</span>
                <span className='status_security'> <ICONS.Lock className='lock_icon' />Tus actualizaciones de estado están cifradas de extremo a extremo.</span>
            </div>
        </div>
    )
}

export default CommunityScreen