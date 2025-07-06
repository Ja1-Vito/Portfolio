/* burger */
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

/* popup da imagem - abre o modal com a imagem clicada */
document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', function () {
    const modal = document.getElementById('imagemModal');
    const imagemAmpliada = document.getElementById('imagemAmpliada');

    imagemAmpliada.src = img.src;
    modal.style.display = 'flex';
  });
});

/* fechar modal da imagem */
function fecharImagemModal() {
  document.getElementById('imagemModal').style.display = 'none';
}

/* popup compartilhar */
function abrirPopup() {
  const overlay = document.getElementById("popupOver");
  const popup = document.getElementById("popupShare");

  popup.classList.add("ativo");
  overlay.style.display = "flex";
}

function fecharPopup() {
  const overlay = document.getElementById("popupOver");
  const popup = document.getElementById("popupShare");

  popup.classList.remove("ativo");
  overlay.style.display = "none";
}

/* copiar link */
function copiarLink() {
  const input = document.getElementById("linkShare");
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Link copiado!");
}

/* validação do formulário */
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const inputs = form.querySelectorAll('input, textarea');

  // Adiciona classe "tocado" quando o campo for tocado (perde o foco)
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      input.classList.add('tocado');
    });
  });

  // Validação ao enviar
  form.addEventListener('submit', function (e) {
    let formValido = true;

    inputs.forEach(input => {
      input.classList.add('tocado');
      if (!input.checkValidity()) {
        formValido = false;
      }
    });

    if (!formValido) {
      e.preventDefault(); // Impede envio se houver erro
      alert('Por favor, preencha todos os campos corretamente.');
    } else {
      e.preventDefault(); // Simula envio com alerta
      alert('Formulário enviado com sucesso!');
      form.reset();
      inputs.forEach(input => input.classList.remove('tocado'));
    }
  });
});
