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

    // Avisos em slider
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

    // Botões de contratar monitoria
    const botoesMonitoria = document.querySelectorAll(".botao-contratar");

    botoesMonitoria.forEach(botao => {
        botao.addEventListener("click", () => {
            const aula = botao.dataset.aula;
            const sala = botao.dataset.sala;
            const data = botao.dataset.data;
            const hora = botao.dataset.hora;
            const monitor = botao.dataset.monitor;
            const valor = botao.dataset.valor;

            const confirmBtn = document.getElementById("confirmBtn");
            const botoesConfirmacao = document.getElementById("botoesConfirmacao");
            const botoesFechar = document.getElementById("botoesFechar");

            if (botao.classList.contains("contratado")) {
                // Já contratado: exibir resumo
                botoesConfirmacao.classList.add("hidden");
                botoesFechar.classList.remove("hidden");

                const resumo = `
                    <strong>Monitoria já contratada:</strong><br>
                    📚 Aula: ${aula}<br>
                    🏫 Sala: ${sala}<br>
                    📅 Data: ${data}<br>
                    ⏰ Hora: ${hora}<br>
                    👨‍🏫 Monitor: ${monitor}<br>
                    💵 Valor: R$${valor}<br><br>
                    Obs: Parte deste valor é destinado ao Inatel.
                `;
                showCustomAlert(resumo, true);
                return;
            }

            // Fluxo normal de contratação
            botoesFechar.classList.add("hidden");
            botoesConfirmacao.classList.remove("hidden");

            showCustomAlert("Deseja realmente contratar o monitor?");

            const newConfirmBtn = confirmBtn.cloneNode(true);
            confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

            newConfirmBtn.addEventListener("click", () => {
                botao.textContent = "Monitor Contratado";
                botao.classList.add("contratado");
                botao.style.backgroundColor = "#4CAF50";
                botao.style.color = "white";

                closeAlert();

                alert(
                    `Monitor contratado com sucesso!\n\n📚 Aula: ${aula}\n🏫 Sala: ${sala}\n📅 Data: ${data}\n⏰ Hora: ${hora}\n👨‍🏫 Monitor: ${monitor}\n💵 Valor: R$${valor}\n\nObs: Parte deste valor é destinado ao Inatel.`
                );
            });
        });
    });
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
