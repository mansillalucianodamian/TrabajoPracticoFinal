/* 
Para que sirve contexto?
Nos permite evitar el prop drilling
Que es el prop drilling?
Cuando transferimos props a un componente hijo y ese hijo se las trasfiere a un componente hijo y asi sucesivamente
*/
import React, {createContext} from "react";
//Paso 1:
export const ContactContext = createContext()
//Paso 2: Crear un proveedor
const ContactContextProvider = ({children}) => {
    let valor_x = 10
    return (
        <ContactContext.Provider value={
            //Este objeto es el valor que podran acceder de nuestro contexto
            {
                valor_x: valor_x
            }
        }>
            {children}
        </ContactContext.Provider>
    )
}
export default ContactContextProvider
