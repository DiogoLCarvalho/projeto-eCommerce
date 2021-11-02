const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML =`
        <div class="footer-content">
        <img src="img/light-logo.png" alt="logo-footer" class="logo">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Homens</li>
                <li><a href="error.html" class="footer-link">Camisetas</a></li>
                <li><a href="error.html" class="footer-link">Suéter</a></li>
                <li><a href="error.html" class="footer-link">Camisas</a></li>
                <li><a href="error.html" class="footer-link">Jeans</a></li>
                <li><a href="error.html" class="footer-link">Calças</a></li>
                <li><a href="error.html" class="footer-link">Sapatos</a></li>
                <li><a href="error.html" class="footer-link">Casuais</a></li>
                <li><a href="error.html" class="footer-link">Formais</a></li>
                <li><a href="error.html" class="footer-link">Sports</a></li>
                <li><a href="error.html" class="footer-link">Relógios</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Mulheres</li>
                <li><a href="error.html" class="footer-link">Camisetas</a></li>
                <li><a href="error.html" class="footer-link">Suéter</a></li>
                <li><a href="error.html" class="footer-link">Camisas</a></li>
                <li><a href="error.html" class="footer-link">Jeans</a></li>
                <li><a href="error.html" class="footer-link">Calças</a></li>
                <li><a href="error.html" class="footer-link">Sapatos</a></li>
                <li><a href="error.html" class="footer-link">Casuais</a></li>
                <li><a href="error.html" class="footer-link">Formais</a></li>
                <li><a href="error.html" class="footer-link">Sports</a></li>
                <li><a href="error.html" class="footer-link">Relógios</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">Sobre</p>
    <p class="info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, possimus quas inventore debitis deserunt veniam laborum autem nostrum dicta, culpa voluptas. Doloremque illum labore aliquam consequuntur consequatur voluptate officia ab?
    </p>
    <p class="info">Meu email - <span>diogo.carvalho.lc@gmail.com</span></p>
    <div class="footer-social-container">
        <div>
            <a href="error.html" class="social-link">Termos e Serviços</a>
            <a href="error.html" class="social-link">Página de Privacidade</a>
        </div>
        <div>
            <a href="https://github.com/DiogoLCarvalho" class="social-link" target="_blank" id="working-link">Github</a>
            <a href="error.html" class="social-link">LinkedIn</a>
            <a href="error.html" class="social-link">Instagram</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Melhores roupas!</p>
    `
}
createFooter();