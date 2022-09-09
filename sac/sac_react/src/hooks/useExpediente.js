import {useState} from "react";
import {getExpedientesApi} from "../api/expediente"

export function useExpediente(){
    const [loading,setLoading] = useState(true);
    const [error, setError] =  useState(false);
    const [expedientes,setExpedientes] = useState(null);

    const getExpedientes = async () =>{
        try {
            setLoading(true);
            const response = await getExpedientesApi();
            setLoading(false);
            setExpedientes(response)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    return{
        loading,
        error,
        expedientes,
        getExpedientes
    }
}