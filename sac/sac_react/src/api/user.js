import {BASE_API} from "../utils/constans";

export async function loginApi(formValue){
    try{
        const url = `${BASE_API}/api/auth/login/`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValue)
        };

        const response = await fetch(url,params);

        if (response.status !==200){
            throw new Error("Usuario o contraseña incorrectos");
        }

        const result = await response.json();
        return result;

    }catch (error){
        throw error
    }
}

export async function getMeApi(token){
    try{
        const url = `${BASE_API}/api/auth/me/`;
        const params = {
            headers: {
                Authorization:`Bearer ${token}`
            }
        }



        // console.log("Context login--->",url)
        // console.log("Context login--->",params)
        // console.log("Context login--->"+token)

        const response  = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch(error){
        throw error;
    }
}

export async function getUsersApi(token){
    try {
        const url = `${BASE_API}/api/users/`;
        const params = {
            headers: {
                Authorization: 'Bearer '+token
            }
        }
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error
    }
}


export async function addUserAppi(data,token){
    try {
        const url = `${BASE_API}/api/users/`
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

export async function updateUserApi(id,data,token){
    try {
        const url = `${BASE_API}/api/users/${id}/`;
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


export async function deleteUserApi(id,token){
    try {
        const url = `${BASE_API}/api/users/${id}/`
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
