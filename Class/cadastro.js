class Cadastro {
  constructor(){
    this.nome = document.querySelector('#nome')
    this.dataNasc = document.querySelector('#dataNasc')
    this.email = document.querySelector('#email')
    this.senha = document.querySelector('#senha')
    this.confirmSenha = document.querySelector('#confirmSenha')
    this.status5 = document.querySelector('#status5')
    this.status6 = document.querySelector('#status6')
    this.status7 = document.querySelector('#status7')
    this.status8 = document.querySelector('#status8')
    this.status9 = document.querySelector('#status9')
    this.verify = false
    this.cadastroDisplay = document.querySelector('.Cadastro')
    this.loginDisplay = document.querySelector('.Login')
  }

  cadastrar(){

    if(this.nome.value == ''){
      this.verify = true
      this.status5.innerHTML = 'Nome é Obrigatório'
    }else{
      this.status5.innerHTML = ''
    }

    if(this.dataNasc.value == ''){
      this.verify = true
      this.status6.innerHTML = 'Data de Nascimento é Obrigatório'
    }else{
      this.status6.innerHTML = ''
    }

    if(this.email.value == ''){
      this.verify = true
      this.status7.innerHTML = 'E-mail é Obrigatório'
    }else{
      this.status7.innerHTML = ''
    }

    if(this.senha.value == ''){
      this.verify = true
      this.status8.innerHTML = 'Senha é Obrigatório'
    }else{
      this.status8.innerHTML = ''
    }

    if(this.confirmSenha.value == ''){
      this.verify = true
      this.status9.innerHTML = 'Confirme a Senha'
    }else{
      this.status9.innerHTML = ''
    }

    if(
      this.nome.value != '' &
      this.dataNasc.value != '' &
      this.email.value != '' &
      this.senha.value != '' &
      this.confirmSenha.value != '' &
      this.confirmSenha.value == this.senha.value
      ){
      this.verify = false
      if(this.verify == false){
        this.status5.innerHTML = ''
        this.status6.innerHTML = ''
        this.status7.innerHTML = ''
        this.status8.innerHTML = ''
        this.status9.innerHTML = 'Cadastrado com sucesso'
        this.status9.style.color = null
        
        const user = {
          nome: this.nome.value,
          dataNasc: this.dataNasc.value,
          email: this.email.value,
          senha: this.senha.value,
          confirmSenha: this.confirmSenha.value,
        }
        localStorage.setItem(this.email.value, JSON.stringify(user));
        setTimeout(() => {
          this.cadastroDisplay.style.display = 'none'
          this.loginDisplay.style.display = 'flex'
        }, 1000);
      }
    }else{
        this.status9.innerHTML = 'As senhas não conferem'
        this.status9.style.color = '#ef5350'
    }
    


  }
}
