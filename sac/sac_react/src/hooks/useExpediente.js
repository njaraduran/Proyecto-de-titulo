import {useState} from "react";
import {getExpedientesApi,addExpedienteApi} from "../api/expediente"
import {useAuth} from "./"

export function useExpediente(){
    const [loading,setLoading] = useState(true);
    const [error, setError] =  useState(false);
    const [expedientes,setExpedientes] = useState(null);
    const {auth} = useAuth();

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

    const addExpediente = async(data) => {
        try {
            setLoading(true)
            await addExpedienteApi(data,auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false) 
            setError(error)
        }
    }

    return{
        loading,
        error,
        expedientes,
        getExpedientes,
        addExpediente
    }
}