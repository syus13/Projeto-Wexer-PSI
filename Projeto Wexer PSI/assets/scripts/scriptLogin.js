// async function confirmLogin(email, password) {
//     try {
//       const response = await fetch('http://localhost:3000/register', {
//         method: 'POST', // Utiliza o método HTTP POST para enviar o email e senha
//         headers: {
//           'Content-Type': 'application/json' // Indica que o corpo da requisição está em formato JSON
//         },
//         body: JSON.stringify({ email, password }) // Converte os dados para JSON e envia no corpo da requisição
//       });
  
//       if (response.ok) { // Verifica se a resposta foi bem-sucedida (status 200-299)
//         window.location.href = 'pacientes.html'; // Redireciona para a página de pacientes.html
//       } else {
//         throw new Error('Credenciais inválidas'); // Lança um erro caso as credenciais sejam inválidas
//       }
//     } catch (error) {
//       console.error(error); // Exibe o erro no console do navegador
//     }
//   }

// const email = document.getElementById("email").value; //obtém o email digitado pelo usuário
// const password = document.getElementById("password").value; //obtém a senha digitada pelo usuário

// //faz uma requisição GET para buscar o usuário no registro
// fetch(`http://localhost:3000/register?email=${email}`)
//   .then(response => response.json())
//   .then(data => {
//     //compara se o email e a senha digitados são iguais aos do registro
//     if (data.email === email && data.password === password) {
//       //redireciona o usuário para a página pacientes.html
//       window.location.href = "pacientes.html";
//     } else {
//       //exibe uma mensagem de erro caso o login não seja válido
//       alert("Email ou senha incorretos!");
//     }
//   })
//   .catch(error => {
//     //exibe uma mensagem de erro caso ocorra algum problema com a requisição
//     alert("Não foi possível validar o login. Tente novamente mais tarde!");
//   });

async function confirmLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();

    if (data.success) {
      window.location.href = "pacientes.html";
    } else {
      alert("Email ou senha incorretos!");
    }
  } catch (error) {
    alert("Não foi possível validar o login. Tente novamente mais tarde!");
  }
}

