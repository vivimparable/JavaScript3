const form = document.getElementById('formregistro');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputEmail = document.getElementById('inputEmail');
	
	var inputPassword = document.forms["myForm"]["inputPassword"];
    var inputPassword2 = document.forms["myForm"]["inputPassword2"];
	var inputAddress = document.forms["myForm"]["inputAddress"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	var inputCity = document.forms["myForm"]["inputCity"];
	var gridCheck = document.forms["myForm"]["gridCheck"];

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Es campo obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Es campo obligatorio";
		acumErrores ++;
	}
    
    if(inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "Es campo obligatorio";
		acumErrores ++;

	}else if(inputPassword2.value !== inputPassword.value) {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "No son iguales las contraseñas";
		acumErrores ++;
	}
	
    if(inputAddress.value == "") {
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorAddress").textContent = "Es campo obligatorio";
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Falta la ciudad";
		acumErrores ++;
	}
	
	
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Acepta las bases";
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

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
