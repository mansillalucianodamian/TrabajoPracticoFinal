const contacts = [
    {
        id: 1,
        name: 'Leo Messi',
        description: 'Vamos por la cuarta',
        avatar: 'https://imageio.forbes.com/specials-images/imageserve/663e595b4509f97fdafb95f5/0x0.jpg?format=jpg&crop=383,383,x1045,y23,safe&height=416&width=416&fit=bounds',
        lastConnection: '15:23',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Paredes',
        description: 'rie ama y sueña',
        avatar: 'https://elcrackdeportivo.com.ar/__export/1721678872326/sites/elcrackdeportivo/img/2024/07/22/roma-leandro-paredes-seleccixn-argentina.jpg_2011752906.jpg',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'otro',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Vamos Loco?',
                status: 'visto'
            }
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