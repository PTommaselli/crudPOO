class Edicao {
  constructor(){
    this.nome = document.querySelector('#nomeEdit')
    this.dataNasc = document.querySelector('#dataNascEdit')
    this.senha = document.querySelector('#senhaEdit')
    this.confirmSenha = document.querySelector('#confirmSenhaEdit')
    this.status4 = document.querySelector('#status4')
    this.busca = document.querySelector('#busca')
  }

  editar(){
    const user = {
      nome: this.nome.value,
      dataNasc: this.dataNasc.value,
      senha: this.senha.value,
      confirmSenha: this.confirmSenha.value,
    }

    localStorage.setItem(this.busca.value, JSON.stringify(user));
    this.status4.innerHTML = "Edição concluida com sucesso"
  }
}
