// Aguarda o carregamento completo do HTML antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // --- MENU HAMBURGER PARA MOBILE ---
    // Seleciona os elementos do menu e do botão hamburger.
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Adiciona um evento de clique ao botão hamburger.
    hamburger.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar/esconder o menu e animar o botão.
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // --- FECHA O MENU AO CLICAR EM UM LINK ---
    // Seleciona todos os links dentro do menu de navegação.
    // Esta função garante que o menu mobile se feche após o usuário escolher uma seção.
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            // Remove a classe 'active' para fechar o menu e reverter a animação do botão.
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- EFEITO DE FADE-IN NAS SEÇÕES AO ROLAR ---
    // Seleciona todas as seções do site que devem ter a animação.
    // A nova seção de planos (#hire) será incluída automaticamente por ter a classe '.section'.
    const sections = document.querySelectorAll('.section');

    // Cria um "observador" que verifica quando um elemento entra na tela.
    // É mais eficiente do que usar o evento de 'scroll'.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se a seção está visível na tela (isIntersecting), adiciona a classe 'visible'.
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // A animação dispara quando 10% da seção está visível.
    });

    // Pede ao observador para monitorar cada uma das seções.
    sections.forEach(section => {
        observer.observe(section);
    });

    // --- BOTÃO "VOLTAR AO TOPO" ---
    // Seleciona o botão.
    const backToTopButton = document.getElementById('back-to-top');

    // Adiciona um evento de rolagem na janela.
    window.addEventListener('scroll', () => {
        // Se o usuário rolou mais de 300 pixels para baixo...
        if (window.scrollY > 300) {
            // ...mostra o botão.
            backToTopButton.classList.remove('hidden');
        } else {
            // ...senão, esconde o botão.
            backToTopButton.classList.add('hidden');
        }
    });

    // --- FUNCIONALIDADE DO MODAL ---
    // Seleciona os elementos do modal e os botões que o ativam.
    const modal = document.getElementById('modal');
    // Note que o botão '.hire-button' foi removido do HTML, então apenas os de compra abrirão o modal.
    const buyButtons = document.querySelectorAll('.buy-button'); 
    const closeModalButton = document.querySelector('.close-modal');

    // Funções para abrir e fechar o modal.
    const openModal = () => modal.classList.remove('hidden');
    const closeModal = () => modal.classList.add('hidden');

    // Adiciona o evento de clique a todos os botões de "Comprar".
    buyButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    // Adiciona evento de clique para o botão de fechar.
    closeModalButton.addEventListener('click', closeModal);
    
    // Adiciona evento para fechar o modal se o usuário clicar fora da caixa de conteúdo.
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- VALIDAÇÃO SIMPLES DO FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        // Previne o comportamento padrão do navegador de recarregar a página ao enviar.
        e.preventDefault(); 

        // Pega os valores dos campos, removendo espaços em branco do início e do fim.
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Verifica se algum campo está vazio.
        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos.');
            return; // Interrompe a função.
        }
        
        // Simula o envio bem-sucedido.
        alert('Mensagem enviada com sucesso! (Esta é uma simulação)');
        contactForm.reset(); // Limpa os campos do formulário.
    });

});