const validator = (inputs) => {
    const errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexPassword = /^(?=\w*\d)\S{6,10}$/;

    const regexNumber = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i

    if (!inputs.email){
        errors.email = 'no puede ser vacio'
    }
    if (!regexEmail.test(inputs.email)){
        errors.email='Debe ser un correo electronico'
    }
    if (inputs.email.length > 35){
        errors.email='debe tener menos de 35 caracteres'
    }
    if (!regexNumber.test(inputs.password)){
        errors.password='la contraseña debe tener por lo menos un numero'
    }
    if (!regexPassword.test(inputs.password)){
        errors.password='la contraseña debe tener entre 6 y 10 caracteres'
    }

    return errors
}

export default validator;