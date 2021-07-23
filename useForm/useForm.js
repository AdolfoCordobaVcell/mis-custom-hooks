import { useState } from "react";

// Recoge el contenido de un input para el manejo del onChange={}
export const useForm = (initialState = {} ) => {
    // Genera el valor inicial del value y su control para insertar uno nuevo
    const [values, setvalues] = useState(initialState);

    // Elimina el contenido del input cuando se da enter y poder escribir el siguiente, sin la necesidad de borrar manualmente
    const reset = () => {
        setvalues(initialState);
    }

    // Captura el valor del input
    const handleInputChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value
        });
    }

    return [ values, handleInputChange, reset ];
};
