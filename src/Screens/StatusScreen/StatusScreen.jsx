import React from 'react'
import ICONS from '../../constanst/Icons'
import ContactScreen from '../ContactScreen/ContactScreen'
import './StatusScreen.css'

const StatusScreen = () => {
  return (
    <div className='status_conteiner' >
        <ContactScreen title="Estados" showPerfil={false} />
        <div className='status_list'>
            <ICONS.Disc></ICONS.Disc>
            <h2>Comparte actualizaciones de estado</h2>
            <span>Comparte fotos, videos y texto que desaparecen después de 24 horas.</span>
            <span>Tus actualizaciones de estado están cifradas de extremo a extremo.</span>
        </div>
    </div>
  )
}

export default StatusScreen