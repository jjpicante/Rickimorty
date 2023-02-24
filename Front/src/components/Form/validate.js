const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validate(inputs){
 
    let errors = {};
    
    if(!regexEmail.test(inputs.username)){
       errors.username = 'Debe ser un correo electrónico' 
    }
    if(!inputs.username){
       errors.username = 'Ingrese un username'
    }
    if(inputs.username.length > 35){
       errors.username = "El usuario debe tener menos de 35 caracteres" 
    }

    if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password = 'Debe tener entre 6 y 10 caracteres'
    }
    if(!inputs.password.match(/\d/)){
        errors.password = 'la contraseña debe contener al menos un número'
    }
    if(!inputs.password){
        errors.password = 'Ingrese contraseña'
    }
    return errors
}
