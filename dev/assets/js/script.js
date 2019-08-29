let inputNome = document.querySelector('.nome');
let nomeInvalido = document.querySelector('.nomeInvalido');
let inputEmail =  document.querySelector('.email');
let emailInvalido =  document.querySelector('.emailInvalido');
let inputMensagem =  document.querySelector('.mensagem');
let mensagemInvalido =   document.querySelector('.mensagemInvalido');
let submit = document.querySelector('.enviar');

submit.addEventListener('click',function(e){
	if(inputNome.value==''){
		e.preventDefault();
		inputNome.focus();
		nomeInvalido.style.display = 'block';
		nomeInvalido.innerHTML = 'O campo de nome não pode estar vazio';
		return false;
	}else{
		nomeInvalido.style.display = 'none';
	}

	if(inputNome.value.length<5){
		e.preventDefault();
		inputNome.focus();
		nomeInvalido.style.display = 'block';
		nomeInvalido.innerHTML = 'O campo nome deve possuir no minimo 5 caracteres';
		return false;
	}else{
		nomeInvalido.style.display = 'none';
	}

	if(inputNome.value.search( /[^a-z0-9]/i ) != -1){
		e.preventDefault();
		inputNome.focus();
		nomeInvalido.style.display = 'block';
		nomeInvalido.innerHTML = 'O campo nome só aceita caracteres de 0-9 e de A-z';
		return false;
	}else{
		nomeInvalido.style.display = 'none';
	}

	if(inputEmail.value==''){
		inputEmail.focus();
		e.preventDefault();
		emailInvalido.style.display = 'block';
		emailInvalido.innerHTML = 'O campo email não pode estar vazio';
		return false;
	}else{
		emailInvalido.style.display = 'none';
	}

	var usuario = inputEmail.value.substring(0, inputEmail.value.indexOf("@"));
	var dominio = inputEmail.value.substring(inputEmail.value.indexOf("@")+ 1, inputEmail.value.length);

	if((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)){
		emailInvalido.style.display = 'none';

	}else{
		e.preventDefault();
		inputEmail.focus();
		emailInvalido.style.display = 'block';
		emailInvalido.innerHTML = 'Por favor, insira um email valido';
		return false;
	}

	if(inputMensagem.value==''){
		e.preventDefault();
		inputMensagem.focus();
		mensagemInvalido.style.display = 'block';
		mensagemInvalido.innerHTML = 'O campo de mensagem não pode estar vazio';
		return false;
	}else{
		mensagemInvalido.style.display = 'none';
	}

	if(inputMensagem.value.length<10){
		e.preventDefault();
		inputMensagem.focus();
		mensagemInvalido.style.display = 'block';
		mensagemInvalido.innerHTML = 'A mensagem deve conter um minimo de 10 caracteres';
		return false;
	}else{
		mensagemInvalido.style.display = 'none';
	}
});