import {BASE_API} from "../utils/constans"

export async function getExpedientesApi(){
    try {
        const url = `${BASE_API}/api/expedientes`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error
    }
}




export async function addExpedienteApi(data,token){

        try {
            const url = `${BASE_API}/api/expedientes/`
            const params = {
                method: "POST",
                headers:{
                    Authorization:`Bearer ${token}`,
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            };
            
            console.log(url)            
            console.log("---------")            
            console.log(params)

            const response = await fetch(url,params);
            const result = await response.json();
            return result;
        } catch (error) {
            throw error
        }
}


export async function updateExpedienteApi(id,data,token){
    try {
        const url = `${BASE_API}/api/expedientes/${id}/`;
        const params={
            method: "PATCH",
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function deleteExpedienteApi(id,token){
    try {
        const url = `${BASE_API}/api/expedientes/${id}/`
        const params = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            }            
        }

        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}
