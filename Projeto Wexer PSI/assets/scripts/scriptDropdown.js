// Selecionar o elemento de menu suspenso personalizado
const customSelect = document.querySelector('.dropGender');

// Selecionar o elemento de entrada oculto dentro do menu suspenso personalizado
const hiddenInput = customSelect.querySelector('input[type="text"]');

// Selecionar a lista suspensa dentro do menu suspenso personalizado
const selectOptions = customSelect.querySelector('.selectGender');

// Adicionar evento de clique ao menu suspenso personalizado
customSelect.addEventListener('click', function(event) {
  // Abrir ou fechar a lista suspensa quando o usuário clicar no menu suspenso
  customSelect.classList.toggle('open');
});

// Adicionar evento de clique a cada opção de lista suspensa
selectOptions.querySelectorAll('div').forEach(function(option) {
  option.addEventListener('click', function(event) {
    // Atualizar o valor da entrada oculta com a opção selecionada
    hiddenInput.value = option.dataset.value;

    // Atualizar o texto exibido no menu suspenso personalizado com a opção selecionada
    customSelect.querySelector('.selectGender').textContent = option.textContent;

    // Fechar a lista suspensa
    customSelect.classList.remove('open');
  });
});
