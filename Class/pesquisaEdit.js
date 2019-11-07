class PesquisaUser {
  constructor(){
    this.busca = document.querySelector('#busca')
    this.buscaEdit = document.querySelector('#buscaEdit')
    this.status = document.querySelector('#status3')
    this.nome = document.querySelector('#nomeEdit')
    this.dataNasc = document.querySelector('#dataNascEdit')
    this.senha = document.querySelector('#senhaEdit')
    this.confirmSenha = document.querySelector('#confirmSenhaEdit')
  }

  pesquisar(){
    const emailLocalStorage = localStorage.getItem(this.busca.value);
    const dataObject = JSON.parse(emailLocalStorage);

    if(this.busca.value == ''){
      this.status.innerHTML = ""
      this.status.innerHTML = "Insira o email para buscar o usuário"
    }else if(dataObject == null){
      this.status.innerHTML = "E-mail incorreto"      
    }else {
        this.status.innerHTML = ""
        this.buscaEdit.style.display = null
        this.nome.value = dataObject.nome
        this.dataNasc.value = dataObject.dataNasc
        this.senha.value = dataObject.senha
        this.confirmSenha.value = dataObject.confirmSenha

      }
  }
}

