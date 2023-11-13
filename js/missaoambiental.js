// Função para abrir e fechar o menu hambúrguer
function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

// Função para o conteúdo da página descer quando o menu hambúrguer for aberto
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var body = document.body;

    navbarToggler.addEventListener('click', function () {
      body.classList.toggle('menu-opened');
      console.log('Menu toggle clicked');
    });
  });