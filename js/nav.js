// Criar nav-bar pelo JS
const creatNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML =
        `
        <div class="nav">
        <img src="img/dark-logo.png" class="brand-logo" alt="logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Pesquisar marcas, produtos">
                <button class="search-btn">Pesquisar</button>
            </div>
            <a href="#"><img src="img/user.png" alt="user"></a>
            <a href="#"><img src="img/cart.png" alt="cart"></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">Mulheres</a></li>
        <li class="link-item"><a href="#" class="link">Homens</a></li>
        <li class="link-item"><a href="#" class="link">Crianças</a></li>
        <li class="link-item"><a href="#" class="link">Acessórios</a></li>
    </ul>
    `
}
creatNav();