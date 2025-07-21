import React from "react";
/* 
Props siempre estara disponibke para un componente
props siempre sera un objeto 
si no hay props (no le pasamos ningun dato al componente) sera un objeto vacio */
function ProductCard({nombre, precio}) { 
    return (
        <div>
            <h2>{nombre}</h2>
            <span>El precio de mi producto ${precio - (precio * 0.21)} </span>
        </div>
    )
}

export default ProductCard