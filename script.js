// Função para mostrar os elementos animados
function showOnScroll() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll'); 

    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.8) {
            element.classList.add('show'); 
            if (element.classList.contains('fade-in')) {
                element.classList.add('fade-in-animation');
            } else if (element.classList.contains('slide-up')) {
                element.classList.add('slide-up-animation');
            }
        }
    });
}

// Executa a função logo que a página é carregada
document.addEventListener('DOMContentLoaded', showOnScroll);

// Executa a função sempre que o usuário rolar a página
window.addEventListener('scroll', showOnScroll);

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Remove o # do início
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Validação do formulário de contato
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Seu Nome"]').value;
    const email = document.querySelector('input[placeholder="Seu E-mail"]').value;
    const message = document.querySelector('textarea[placeholder="Sua Mensagem"]').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        alert('Por favor, insira seu nome.');
        return;
    }
    
    if (!email) {
        alert('Por favor, insira seu e-mail.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    if (!message) {
        alert('Por favor, insira sua mensagem.');
        return;
    }

    // Aqui você pode adicionar o código para enviar o formulário para o seu servidor
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Mensagem:", message);

    alert('Mensagem enviada com sucesso!');
    form.reset(); 
});
