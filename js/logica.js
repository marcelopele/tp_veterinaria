function togMenu(){
    document.getElementById("menu").classList.toggle("menu_v");
    document.getElementById("menu").classList.toggle("menu_o");
}

function Validar_Formulario(){
    controles=true;

    //---------------------------------------------------------
    //Control del email que contenga 1 arroba:
    cant_arrobas=0;
    control_email=document.getElementById("email").value;
    for(i=0;i<control_email.length;i++){
        if(control_email[i]=="@"){
            cant_arrobas=cant_arrobas+1;
        };
    }
    if(cant_arrobas!=1){
        alert("No ingresó un email válido");
        controles=false
    }
    //---------------------------------------------------------
    //Control de edad >=18 y <120:
    edad=document.getElementById("edad").value;
    if(edad<0||edad>120){
        alert("Ingresó una edad inválida");
        controles=false
    }else if(edad<18){
        alert("Debe ser mayor de edad para enviar el formulario de contacto");
        controles=false
    }

    //---------------------------------------------------------

    return controles;
   
}