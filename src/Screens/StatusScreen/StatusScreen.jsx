import React from 'react'
import ICONS from '../../constanst/Icons'
import ContactScreen from '../ContactScreen/ContactScreen'
import './StatusScreen.css'

const StatusScreen = () => {
  return (
    <div className='status_conteiner' >
      <ContactScreen showPerfil={false} showContact={false} />
      <div className="status_content">
        <div className='status_header'>
          <h2 className='title_principal'>Estados</h2>
          <div>
            <ICONS.PlusC />
            <ICONS.Optiopns />
          </div>
        </div>
        <div className='status_img'>
          <img className='avatar' src="/images/messi.webp" alt="" />
          <div className='status_text'>
            <span className='text_my_state'>Mi estado</span>
            <span className='text_description'>Haz click para añadir una actualizacion de estado</span>
          </div>
        </div>
        <h3 className='title_text_status'>RECIENTE</h3>
        
      </div>
      <div className='status_list'>
        <ICONS.Disc className='status_icon'></ICONS.Disc>
        <h2 className='status_title'>Comparte actualizaciones de estado</h2>
        <span className='status_description'>Comparte fotos, videos y texto que desaparecen después de 24 horas.</span>
        <span className='status_security'> <ICONS.Lock className='lock_icon' />Tus actualizaciones de estado están cifradas de extremo a extremo.</span>
      </div>
    </div>
  )
}

export default StatusScreen