
const submitFunction = (event) => {
    
    if(!validarFormulario()){

    event.preventDefault();// se prevenga la actualizacion de la pagina
    
    }else{
    
    event.preventDefault();

    alert(
        'Nombre: ' +document.getElementById('name').value + ' \n'+
        'Apellido: ' +document.getElementById('apellido').value + ' \n'+
        'edad: ' +document.getElementById('edad').value + ' \n'+
        'Email: ' +document.getElementById('email').value + ' \n'+
        'documento: ' +document.getElementById('documento').value + ' \n'
    )
    }
}


document.getElementById('formulario').addEventListener('submit', submitFunction) //escucha el submit del formulario

function validarFormulario(){
    let camposTexto = document.querySelectorAll('input[type="text"]' );// coleccion de input type text (Selector de todas las consultas)
    let validacionCorrecta = true;
    //validacion campos de texto
    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) 
        // el error del campo es el error+id con la primera en Mayuscula

        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido')
            validacionCorrecta = false;

        } else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener mas de 3 caracteres')
            validacionCorrecta = false;
        }else {
            ocultarError(errorCampo);
        }

    })

    //validacion campo de email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email.value)){ //regex que valida el formato email.
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'ingrese un correo valido');
    }


    //validacion edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');

    if(edad.value < 18){
        mostrarError(errorEdad, 'debe ser mayor a 18 años')
        validacionCorrecta =false;
    }else{
        ocultarError(errorEdad);
    }

    //validacion actividad
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');

    if(actividad.value == ''){
        mostrarError(errorActividad, 'debe seleccionar una actividad');
        validacionCorrecta = false;
    }else{
        ocultarError(errorActividad);
    }

    const estudios = document.getElementById('estudios');
    const errorEstudios = document.getElementById('errorEstudios');

    if(estudios.value ==''){
        mostrarError(errorEstudios, 'debe seleccionar sus estudios');
        validacionCorrecta= false;

    }else{
        ocultarError(errorEstudios);
    }

    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, 'Debe aceptar terminos y condiciones')
        validacionCorrecta=false;

    }else{
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta; // esto dira si el formulario completo es o no valido. 
}



const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";

}
const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";

}