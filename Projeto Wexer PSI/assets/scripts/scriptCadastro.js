//Função para esconder o card1 e exibir o card2
function toggleBoxes() {
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

// Função para salvar os dados do usuário no db.json
async function registerUser() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
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

    const response = await fetch('http://localhost:3000/register', requestOptions);

    if (!response.ok) { // se a senha for ok exibe mensagem de erro
      const error = await response.text();
      alert(`Ocorreu um erro: ${error}`);
    } else {// senão cadastra o usuário normalmente
      alert('Usuário cadastrado com sucesso!');
    }
  }