firebase.auth().onAuthStateChanged(function (usuario) {
    if (usuario) {
      // Usuário está conectado
      document.getElementById('usuario').style.display = 'block'
      document.getElementById('login').style.display = 'none'
    } else {
      // Nenhum usuário está conectado
      document.getElementById('usuario').style.display = 'none'
      document.getElementById('login').style.display = 'block'
    }
  })

  function entrar() {
    let emailUsuario = document.getElementById('floatingInput').value
    let senhaUsuario = document.getElementById('floatingPassword').value

    //método de login de usuários existentes no firebase
  firebase.auth().signInWithEmailAndPassword(emailUsuario, senhaUsuario)
  .catch(error => {
    alert(mensagemErros(error));
  })
}

function cadastrar(){

  var auth = null;
  firebase.auth().createUserWithEmailAndPassword(document.getElementById('floatingInput').value, document.getElementById('floatingPassword').value)
  .then(function(user){
    alert("Cadastrado com sucesso");
    auth = user;

  }).catch(function(error){

    alert("Falha ao cadastrar");

  });
}

  function mensagemErros(error) {
    if (error.code == "auth/invalid-email") {
      alert("senha ou usuario invalido");
    } else if (error.code == "auth/invalid-password"){
      alert("senha invalida");
    }else if (error.code == "auth/user-not-found"){
      
      alert("usuario inessitente")
    } 
      
      return error.message;
    
  }

  function sair() {
    firebase.auth().signOut()
  }
