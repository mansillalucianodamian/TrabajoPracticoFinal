const contacts = [
    {
        id: 1,
        name: 'Lionel Messi',
        description: 'Vamos por más',
        avatar: '/images/messi.webp',
        lastConnection: '15:23',
        connectionStatus: 'online',
        messages: [
            { emisor: 'YO', hora: '22:01', id: 1, texto: 'Capitán, ¿todo listo?', status: 'visto' },
            { emisor: 'OTRO', hora: '22:02', id: 2, texto: 'Sí, con ganas de jugar', status: 'visto' },
            { emisor: 'YO', hora: '22:03', id: 3, texto: 'Hoy mojás', status: 'visto' },
            { emisor: 'OTRO', hora: '22:04', id: 4, texto: 'Ojalá, estamos bien', status: 'visto' },
            { emisor: 'YO', hora: '22:05', id: 5, texto: 'Vamos con todo', status: 'visto' },
            { emisor: 'OTRO', hora: '22:06', id: 6, texto: '¡Dale carajo!', status: 'visto' },
            { emisor: 'YO', hora: '22:07', id: 7, texto: 'Te llevo en el fantasy, no me falles', status: 'visto' },
            { emisor: 'OTRO', hora: '22:08', id: 8, texto: 'Jajaja presion extra', status: 'visto' },
            { emisor: 'YO', hora: '22:09', id: 9, texto: 'Crack', status: 'visto' },
            { emisor: 'OTRO', hora: '22:10', id: 10, texto: 'Abrazo grande', status: 'visto' },
        ]
    },
    {
        id: 2,
        name: 'Leandro Paredes',
        description: 'Rie ama y sueña',
        avatar: '/images/paredes.webp',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            { emisor: 'YO', texto: 'Leo cómo anda todo?', hora: '14:00', id: 1, status: 'visto' },
            { emisor: 'OTRO', texto: 'Todo joya, vos?', hora: '14:01', id: 2, status: 'visto' },
            { emisor: 'YO', texto: 'Con ganas de verte pegarle de lejos otra vez', hora: '14:02', id: 3, status: 'visto' },
            { emisor: 'OTRO', texto: 'Se está cocinando algo eh', hora: '14:03', id: 4, status: 'visto' },
            { emisor: 'YO', texto: 'Te banco a muerte', hora: '14:04', id: 5, status: 'visto' },
            { emisor: 'OTRO', texto: 'Gracias papá!', hora: '14:05', id: 6, status: 'visto' },
            { emisor: 'YO', texto: 'Te saludo cuando vengas a Boca?', hora: '14:06', id: 7, status: 'visto' },
            { emisor: 'OTRO', texto: 'Dale loco, nos sacamos una foto', hora: '14:07', id: 8, status: 'visto' },
            { emisor: 'YO', texto: 'Hecho 🔥', hora: '14:08', id: 9, status: 'visto' },
            { emisor: 'OTRO', texto: 'Abrazo fuerte', hora: '14:09', id: 10, status: 'visto' },
        ]
    },
    {
        id: 3,
        name: 'Rodrigo De Paul',
        description: 'El motor de la Scaloneta',
        avatar: '/images/rodrigo.jpg',
        lastConnection: '14:10',
        connectionStatus: 'offline',
        messages: [
            { emisor: 'YO', hora: '10:10', id: 1, texto: '¿Cómo está el equipo?', status: 'visto' },
            { emisor: 'OTRO', hora: '10:11', id: 2, texto: 'Firme, todos metidos', status: 'visto' },
            { emisor: 'YO', hora: '10:12', id: 3, texto: 'Hoy toca correr todo, ¿no?', status: 'visto' },
            { emisor: 'OTRO', hora: '10:13', id: 4, texto: 'Como siempre, hermano', status: 'visto' },
            { emisor: 'YO', hora: '10:14', id: 5, texto: 'El alma del medio vos', status: 'visto' },
            { emisor: 'OTRO', hora: '10:15', id: 6, texto: 'Gracias papá', status: 'visto' },
            { emisor: 'YO', hora: '10:16', id: 7, texto: '¿Cómo anda Leo?', status: 'visto' },
            { emisor: 'OTRO', hora: '10:17', id: 8, texto: 'Tranquilo, enchufado', status: 'visto' },
            { emisor: 'YO', hora: '10:18', id: 9, texto: 'Qué dupla hacen', status: 'visto' },
            { emisor: 'OTRO', hora: '10:19', id: 10, texto: 'Vamos por todo', status: 'visto' },
        ]
    },
    {
        id: 4,
        name: 'Julián Álvarez',
        description: 'La Araña está lista',
        avatar: '/images/araña.jpg',
        lastConnection: '16:45',
        connectionStatus: 'online',
        messages: [
            { emisor: 'YO', hora: '13:00', id: 1, texto: '¿Estás para romperla hoy?', status: 'visto' },
            { emisor: 'OTRO', hora: '13:01', id: 2, texto: 'Siempre listo', status: 'visto' },
            { emisor: 'YO', hora: '13:02', id: 3, texto: 'Hoy se te da, confío', status: 'visto' },
            { emisor: 'OTRO', hora: '13:03', id: 4, texto: 'Gracias, hermano', status: 'visto' },
            { emisor: 'YO', hora: '13:04', id: 5, texto: 'Qué bien la estás rompiendo en el City', status: 'visto' },
            { emisor: 'OTRO', hora: '13:05', id: 6, texto: 'Gracias, me siento muy bien', status: 'visto' },
            { emisor: 'YO', hora: '13:06', id: 7, texto: 'Tenés futuro de capitán', status: 'visto' },
            { emisor: 'OTRO', hora: '13:07', id: 8, texto: 'Uf, ojalá algún día', status: 'visto' },
            { emisor: 'YO', hora: '13:08', id: 9, texto: '¡Vamos Araña!', status: 'visto' },
            { emisor: 'OTRO', hora: '13:09', id: 10, texto: 'Abrazo grande', status: 'visto' },
        ]
    },
    {
        id: 5,
        name: 'Lautaro Martínez',
        description: 'Toro siempre Toro',
        avatar: '/images/martinez.webp',
        lastConnection: '13:30',
        connectionStatus: 'online',
        messages: [
            { emisor: 'YO', hora: '09:00', id: 1, texto: '¿Estás encendido para hoy?', status: 'visto' },
            { emisor: 'OTRO', hora: '09:01', id: 2, texto: 'Obvio, siempre con hambre de gol', status: 'visto' },
            { emisor: 'YO', hora: '09:02', id: 3, texto: 'Esa es la actitud', status: 'visto' },
            { emisor: 'OTRO', hora: '09:03', id: 4, texto: 'No se negocia', status: 'visto' },
            { emisor: 'YO', hora: '09:04', id: 5, texto: '¡Vamos Toro!', status: 'visto' },
            { emisor: 'OTRO', hora: '09:05', id: 6, texto: 'Vamos con todo', status: 'visto' },
            { emisor: 'YO', hora: '09:06', id: 7, texto: '¿Con quién concentrás?', status: 'visto' },
            { emisor: 'OTRO', hora: '09:07', id: 8, texto: 'Con el Cuti', status: 'visto' },
            { emisor: 'YO', hora: '09:08', id: 9, texto: 'Qué dupla', status: 'visto' },
            { emisor: 'OTRO', hora: '09:09', id: 10, texto: '¡Vamos la Scaloneta!', status: 'visto' },
        ]
    },
    {
        id: 6,
        name: 'Ángel Di María',
        description: 'El último baile',
        avatar: '/images/dimaria.jpg',
        lastConnection: '12:00',
        connectionStatus: 'offline',
        messages: [
            { emisor: 'YO', hora: '08:00', id: 1, texto: '¿Ya te bajaste otro título?', status: 'visto' },
            { emisor: 'OTRO', hora: '08:01', id: 2, texto: 'Jajaja uno más no vendría mal', status: 'visto' },
            { emisor: 'YO', hora: '08:02', id: 3, texto: 'Sos clave siempre', status: 'visto' },
            { emisor: 'OTRO', hora: '08:03', id: 4, texto: 'Gracias por bancar', status: 'visto' },
            { emisor: 'YO', hora: '08:04', id: 5, texto: 'Siempre Fideo', status: 'visto' },
            { emisor: 'OTRO', hora: '08:05', id: 6, texto: '¡Vamos Argentina!', status: 'visto' },
            { emisor: 'YO', hora: '08:06', id: 7, texto: 'El gol en la final fue tuyo', status: 'visto' },
            { emisor: 'OTRO', hora: '08:07', id: 8, texto: 'Nunca lo voy a olvidar', status: 'visto' },
            { emisor: 'YO', hora: '08:08', id: 9, texto: '¡Emoción total!', status: 'visto' },
            { emisor: 'OTRO', hora: '08:09', id: 10, texto: 'Te mando un abrazo', status: 'visto' },
        ]
    }

];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}