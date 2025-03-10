// BOTAO LIGA E DESLIGA INATEL MODE
function toggleInatelTema() {
    document.body.classList.toggle('inatel-tema');
    localStorage.setItem('tema', 'inatel');
}

// BOTAO LIGA E DESLIGA DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('tema', 'dark');
}

// MENU OCULTO
function toggleMenu() {
    const menuTema = document.getElementById('menu-tema');
    menuTema.style.display = menuTema.style.display === 'flex' ? 'none' : 'flex';
}

// LOCAL STORAGE SOLICITAOD PELO PROFESSOR
window.onload = function () {
    const savedTema = localStorage.getItem('tema');
    if (savedTema === 'inatel') {
        document.body.classList.add('inatel-tema');
    } else if (savedTema === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

// AÇÕES DE BOTÕES - TANTO HAMBURGUER QUANTO OS BOTOES DE INATEL E DARK MODE
document.getElementById('menu-icon').addEventListener('click', toggleMenu);
document.getElementById('inatel-botao').addEventListener('click', toggleInatelTema);
document.getElementById('dark-botao').addEventListener('click', toggleDarkMode);
