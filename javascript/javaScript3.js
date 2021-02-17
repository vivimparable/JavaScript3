const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];


	var inputBuscador = document.forms["myForm"]["inputBuscador"];
	
	

	
	
    if(inputBuscador.value == "") {
		inputBuscador.classList.add("is-invalid");
		document.getElementById("errorBuscador").textContent = "Debe colocar algo";
		acumErrores ++;
	}
	

    

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);
