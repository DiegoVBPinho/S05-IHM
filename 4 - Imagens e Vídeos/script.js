// Lista de eventos (agora com links de imagens corretos)
const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

// Função para inserir os eventos no carrossel
function criarCardsDeNoticias() {
    const carousel = document.querySelector('.carousel'); // Seleciona o container do carrossel

    eventos.forEach(event => {
        // Cria o elemento de card
        const card = document.createElement('div');
        card.classList.add('card'); // Adiciona a classe .card

        // Insere a imagem e as informações do evento
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="card-image">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p><span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}</p>
            </div>
        `;

        // Adiciona o card ao carrossel
        carousel.appendChild(card);
    });
}

// Função para movimentar o carrossel
let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const totalCards = document.querySelectorAll('.carousel .card').length;

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalCards;
    } else {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    }

    // Calcula a posição do carrossel
    const offset = -currentIndex * 100; // Move para o próximo ou anterior card
    carousel.style.transform = `translateY(${offset}%)`;  // Usando translateY para mover verticalmente
}

// Configura os botões de navegação
document.getElementById('prevBtn').addEventListener('click', () => moveCarousel('prev'));
document.getElementById('nextBtn').addEventListener('click', () => moveCarousel('next'));

// Chama a função para criar os cards de notícias ao carregar a página
document.addEventListener('DOMContentLoaded', criarCardsDeNoticias);
