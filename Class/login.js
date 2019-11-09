class Login {
  constructor(){
    this.emailLog = document.querySelector('#emailLog')
    this.senhaLog = document.querySelector('#senhaLog')
    this.status = document.querySelector('#status')
    this.status2 = document.querySelector('#status2')
    this.statusLogin = document.querySelector('#statusLogin');
  }

  login(){
    const emailLocalStorage = localStorage.getItem(this.emailLog.value);
    const dataObject = JSON.parse(emailLocalStorage);

    if(this.emailLog.value == ''){
      this.statusLogin.innerHTML = ''
      this.status.innerHTML = ""
      this.status.innerHTML = "Por favor insira o e-mail"
    }else{
      this.status.innerHTML = ""
    }
    if(this.senhaLog.value == ''){
      this.statusLogin.innerHTML = ''
      this.status2.innerHTML = ""
      this.status2.innerHTML = "Por favor insira a senha" 
    }else{
      this.status2.innerHTML = ""
    }


    if(dataObject == null ){
      this.statusLogin.innerHTML = "E-mail incorreto"
      this.statusLogin.style.color = '#ef5350'
    }else{
        this.statusLogin.innerHTML = ""
        this.status.innerHTML = ""
        this.status2.innerHTML = ""

        if(this.senhaLog.value == ''){
          this.statusLogin.innerHTML = "Por favor insira a senha" 
        }else if(dataObject.senha != this.senhaLog.value){
          this.statusLogin.innerHTML = "Senha Incorreta"
        }else{
          this.statusLogin.innerHTML = "Logado com Sucesso"
          this.statusLogin.style.color = null
        }
    }


  }
}
