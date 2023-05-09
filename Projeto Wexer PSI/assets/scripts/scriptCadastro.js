//Função para esconder o card1 e exibir o card2
function changeBoxes() {
  const boxOne = document.getElementById("boxOne");
  const boxTwo = document.getElementById("boxTwo");
  

  if (boxOne.style.display === "none") {
    boxOne.style.display = "flex";
    boxTwo.style.display = "none";
  } else {
    boxOne.style.display = "none";
    boxTwo.style.display = "flex";
  }
}

// Função para pegar os dados digitados e salvar no banco
async function registerUser() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const api = 'https://bancodedadosprojeto.onrender.com'

    console.log(api)
    // confirmação de senha.
    if (password !== confirmPassword) {
      alert('As senhas não correspondem.');
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name,email, password })
    };

    const response = await fetch(api + '/register', requestOptions);

    if (!response.ok) { // se a senha estiver correta exibe mensagem de erro
      const error = await response.text();
      alert(`Ocorreu um erro: ${error}`);
    } else {// senão cadastra o usuário normalmente
       alert('Usuário cadastrado com sucesso!');
      
      window.location.replace("index.html");
    }
  }