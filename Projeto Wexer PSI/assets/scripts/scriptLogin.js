async function confirmLogin(eventLogin) {
eventLogin.preventDefault()
const email = document.getElementById("email").value; //obtém o email digitado pelo usuário
const password = document.getElementById("password").value; //obtém a senha digitada pelo usuário
const api = 'https://bancodedadosprojeto.onrender.com' // constante com a URL do db.json na render

//faz uma requisição GET para buscar o usuário no registro
// fetch(`http://localhost:3000/register?email=${email}`)
fetch(api + `/register?email=${email}`)
  .then(response => response.json())
  .then(data => {
        //compara no array se o email e a senha digitados são iguais aos do registro
    if (data[0].email === email && data[0].password === password) {
      //redireciona o usuário para a página pacientes.html
      window.location.href = "pacientes.html";
      console.log(data)
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
const nextPage = document.querySelector("#subscribe")
nextPage.addEventListener("submit", confirmLogin)