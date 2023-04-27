async function confirmLogin() {
const email = document.getElementById("email").value; //obtém o email digitado pelo usuário
const password = document.getElementById("password").value; //obtém a senha digitada pelo usuário

//faz uma requisição GET para buscar o usuário no registro
fetch(`http://localhost:3000/register?email=${email}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    //compara no array se o email e a senha digitados são iguais aos do registro
    if (data[0].email === email && data[0].password === password) {
      //redireciona o usuário para a página pacientes.html
      window.location.href = "pacientes.html";
    } else {
      //exibe uma mensagem de erro caso o login não seja válido
      alert("Email ou senha incorretos!");
    }
  })
  .catch(error => {
    //exibe uma mensagem de erro caso ocorra algum problema com a requisição
    alert("Não foi possível validar o login. Tente novamente mais tarde!");
  })
};