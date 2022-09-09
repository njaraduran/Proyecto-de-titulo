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