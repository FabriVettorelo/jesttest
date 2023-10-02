const validate=(form)=>{
    let errors={};
    if (form?.geocerca ==="") {errors.geocerca = "Debe seleccionar una opción";}
    if(form?.unidades ==="") errors.unidades ="Debe seleccionar una opción";
    if(!form?.nombreUnidad || !/^(?!^\s*$)[A-Za-z\s]{3,15}$/.test(form.nombreUnidad) )errors.nombreUnidad="El nombre debe contener de 3 a 15 caracteres, solo letras";
    if(!form?.licenciaChofer|| !/^\d{10}$/.test(form.licenciaChofer)) errors.licenciaChofer="La licencia debe contener 10 números";
    if (!form.emailChofer || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.emailChofer)) {
        errors.emailChofer = 'Ingrese una dirección de correo electrónico válida';
      }
    return errors;
}
export default validate;