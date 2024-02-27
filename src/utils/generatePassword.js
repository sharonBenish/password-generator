import { Store } from 'react-notifications-component';

export async function generatePassword(passwordLength, hasNumbers, hasSymbols){
    try{
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}?length=${passwordLength}&exclude_numbers=${!hasNumbers}&exclude_special_chars=${!hasSymbols}`,
        {
            method:'GET',
            headers:{
                "X-Api-Key":import.meta.env.VITE_APP_API_KEY
            }
        }
        )

        const { random_password: password } = await response.json();
        return password
    }
    catch(e){
        console.log(e)
    }
}

export function showNotification(message){
    Store.addNotification({
        message: message,
        type: "danger",
        insert: "top",
        container: "top-full",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    })
}