async function registerUser() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert('As senhas não correspondem.');
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name,email, password })
    };

    const response = await fetch('http://localhost:3000/patients', requestOptions);

    if (!response.ok) {
      const error = await response.text();
      alert(`Ocorreu um erro: ${error}`);
    } else {
      alert('Usuário cadastrado com sucesso!');
    }
  }