let monitorContratado = false;

// Lista de eventos do Inatel
const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05/25',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01/25',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05/25',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05/25',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;

    function exibirEventosNoCarrossel() {
        const carousel = document.querySelector('.carousel');
        carousel.innerHTML = '';

        eventos.forEach(event => {
            const card = document.createElement('div');
            card.classList.add('evento-card');

            const img = document.createElement('img');
            img.src = event.image;
            img.alt = event.title;

            const title = document.createElement('h3');
            title.textContent = event.title;

            const description = document.createElement('p');
            description.textContent = event.description;

            const date = document.createElement('p');
            date.textContent = `Data: ${event.date}`;

            const time = document.createElement('p');
            time.textContent = `Hora: ${event.time}`;

            const location = document.createElement('p');
            location.textContent = `Local: ${event.location}`;

            card.append(img, title, description, date, time, location);
            carousel.appendChild(card);
        });
    }

    function showSlide(index) {
        const carousel = document.querySelector('.carousel');
        const totalSlides = carousel.children.length;

        if (index < 0) currentIndex = totalSlides - 1;
        else if (index >= totalSlides) currentIndex = 0;
        else currentIndex = index;

        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function avancarSlide() {
        showSlide(currentIndex + 1);
    }

    function pausarCarrossel() {
        clearInterval(intervalId);
    }

    function reiniciarCarrossel() {
        intervalId = setInterval(avancarSlide, 5000);
    }

    function inicializarCarrossel() {
        showSlide(currentIndex);
        intervalId = setInterval(avancarSlide, 5000);

        const carousel = document.querySelector('.carousel');
        carousel.addEventListener('mouseover', pausarCarrossel);
        carousel.addEventListener('mouseout', reiniciarCarrossel);
    }

    exibirEventosNoCarrossel();
    inicializarCarrossel();

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Tema claro/escuro
    const themeToggle = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`theme-${currentTheme}`);

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('theme-dark');
        document.body.classList.remove(isDark ? 'theme-dark' : 'theme-light');
        document.body.classList.add(isDark ? 'theme-light' : 'theme-dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');

        const iconSpan = themeToggle.querySelector('span');
        iconSpan.textContent = isDark ? 'light_mode' : 'dark_mode';
    });

    const mensagensSection = document.querySelector('.mensagens h1');
    const nomeUsuario = "Aluno";
    const hora = new Date().getHours();
    let saudacao;
    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }
    mensagensSection.textContent = `${saudacao}, ${nomeUsuario}!`;

    const avisos = document.querySelectorAll('.slider-aviso .aviso');
    let index = 0;
    function mostrarAviso(i) {
        avisos.forEach((aviso, idx) => {
            aviso.classList.toggle('active', idx === i);
        });
    }
    mostrarAviso(index);
    setInterval(() => {
        index = (index + 1) % avisos.length;
        mostrarAviso(index);
    }, 4000);
});

// Modal
function showCustomAlert(message, isHtml = false) {
    const alertBox = document.getElementById("customAlert");
    const alertText = document.getElementById("alertMessage");

    if (isHtml) {
        alertText.innerHTML = message;
    } else {
        alertText.innerText = message;
    }

    alertBox.classList.remove("hidden");
}

function closeAlert() {
    const alertBox = document.getElementById("customAlert");
    alertBox.classList.add("hidden");
}

function Contratar_Monitoria() {
    const botao = document.getElementById("contratar");
    const confirmBtn = document.getElementById("confirmBtn");
    const botoesConfirmacao = document.getElementById("botoesConfirmacao");
    const botoesFechar = document.getElementById("botoesFechar");

    if (!botao) {
        showCustomAlert("Botão não encontrado!");
        return;
    }

    if (monitorContratado) {
        // Mostrar apenas dados e botão Fechar
        botoesConfirmacao.classList.add("hidden");
        botoesFechar.classList.remove("hidden");

        showCustomAlert(`
            <b>Confirmação de Contrato:</b><br>
            📚 <b>Aula:</b> Cálculo I<br>
            🏫 <b>Sala:</b> 18 - Prédio I<br>
            📅 <b>Data:</b> 09/06/2025<br>
            ⏰ <b>Hora:</b> 14:00<br>
            👨‍🏫 <b>Monitor:</b> Rafael Santos Pereira<br>
            💵 <b>Valor:</b> R$50,00<br><br>
            <small>Obs: Parte deste valor é destinado ao Inatel.</small>
        `, true);
        return;
    }

    // Se ainda não foi contratado → perguntar
    botoesFechar.classList.add("hidden");
    botoesConfirmacao.classList.remove("hidden");

    showCustomAlert("Deseja realmente contratar o monitor?");

    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

    newConfirmBtn.addEventListener("click", () => {
        monitorContratado = true;
        botao.innerHTML = "Já foi contratado.";
        closeAlert();

        alert(
            "Monitor contratado com sucesso!\n\n📚 Aula: Cálculo I\n🏫 Sala: 18 - Prédio I\n📅 Data: 09/06/2025\n⏰ Hora: 14:00\n👨‍🏫 Monitor: Rafael Santos Pereira\n💵 Valor: R$50,00\n\nObs: Parte deste valor é destinado ao Inatel."
        );
    });
}
