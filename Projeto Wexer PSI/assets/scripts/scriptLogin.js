// async function confirmLogin() { // definindo a função para validar  login

//     const email = document.getElementById('email').value; // obtendo o valor do campo email do formulário
//     const senha = document.getElementById('password').value; // obtendo o valor do campo senha do formulário
  
//     try { // utilizando try-catch para tratamento de erros
  
//       const resposta = await fetch('http://localhost:3000/register', { // realizando uma requisição HTTP POST para a rota http://localhost:3000/register
//         method: 'POST', // definindo o método da requisição como POST
//         headers: { // definindo o cabeçalho da requisição com o tipo de conteúdo e o formato da resposta
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ // convertendo os valores de email e senha para JSON e enviando como corpo da requisição
//           email: email,
//           password: password
//         })
//       });
  
//       if (resposta.status === 201) { // verificando se a resposta foi bem sucedida (código de status 200)
//         window.location.href = 'pacientes.html'; // redirecionando para a página pacientes.html
//       } else { // caso contrário
//         throw new Error('Login inválido'); // gerando um erro informando que o login é inválido
//       }
  
//     } catch (erro) { // capturando o erro gerado pelo try-catch
//       alert(erro.message); // exibindo uma mensagem de alerta com a mensagem do erro
//     }
//   }

async function confirmLogin(email, password) {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST', // Utiliza o método HTTP POST para enviar o email e senha
        headers: {
          'Content-Type': 'application/json' // Indica que o corpo da requisição está em formato JSON
        },
        body: JSON.stringify({ email, password }) // Converte os dados para JSON e envia no corpo da requisição
      });
  
      if (response.ok) { // Verifica se a resposta foi bem-sucedida (status 200-299)
        window.location.href = 'pacientes.html'; // Redireciona para a página de pacientes.html
      } else {
        throw new Error('Credenciais inválidas'); // Lança um erro caso as credenciais sejam inválidas
      }
    } catch (error) {
      console.error(error); // Exibe o erro no console do navegador
    }
  }