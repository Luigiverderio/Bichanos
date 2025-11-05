linkGato = document.querySelector('#linkGato'); // Botao
gatoIcon = document.querySelector('#gato-icon'); // Icone

linkCachorro = document.querySelector('#linkCachorro'); // Botao
cachorroIcon = document.querySelector('#cachorro-icon'); // Icone

linkSobre = document.querySelector('#linkSobre'); // Botao
sobreIcon = document.querySelector('#sobre-icon'); // Icone

linkHome = document.querySelector('#linkHome'); // Botao
homeIcon = document.querySelector('#home-icon'); // Icone

const addToCartButtons = document.querySelectorAll('.add-to-cart-button');



addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal = document.querySelector('#modal'); // Modal
    closeButton = document.getElementById('close-modal'); // Botão de fechar
    // Ação a ser executada quando o botão é clicado
    modal.classList.remove('hidden');

    // Adiciona evento de clique ao botão de fechar
    closeButton.addEventListener('click', () => {
      modal.classList.add('hidden'); // Esconde o modal
    });
  });
});

const addToCartButtons2 = document.querySelectorAll('.bg-blue-600');


addToCartButtons2.forEach(button => {
  button.addEventListener('click', () => {
    modal = document.querySelector('#modal'); // Modal
    closeButton = document.getElementById('close-modal'); // Botão de fechar
    // Ação a ser executada quando o botão é clicado
    modal.classList.remove('hidden');

    // Adiciona evento de clique ao botão de fechar
    closeButton.addEventListener('click', () => {
      modal.classList.add('hidden'); // Esconde o modal
    });
  });
});




// Adiciona e remove a classe hidden-transition ao icone do gato
linkGato.addEventListener('mouseover', () => {
  gatoIcon.classList.add('hidden-transition');
});
linkGato.addEventListener('mouseout', () => {
  gatoIcon.classList.remove('hidden-transition');
});

linkCachorro.addEventListener('mouseover', () => {
  cachorroIcon.classList.add('hidden-transition');
});
linkCachorro.addEventListener('mouseout', () => {
  cachorroIcon.classList.remove('hidden-transition');
});

linkSobre.addEventListener('mouseover', () => {
  sobreIcon.classList.add('hidden-transition2');
});
linkSobre.addEventListener('mouseout', () => {
  sobreIcon.classList.remove('hidden-transition2');
});

linkHome.addEventListener('mouseover', () => {
  homeIcon.classList.add('hidden-transition2');
});
linkHome.addEventListener('mouseout', () => {
  homeIcon.classList.remove('hidden-transition2');
});
