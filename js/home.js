const productContainers = document.querySelectorAll('.product-container');
const nxtBtn = document.querySelectorAll('.ntx-btn');
const preBtn = document.querySelectorAll('.pre-btn');

productContainers.forEach((pItem, i) => {
    let containerDimenstions = pItem.getBoundingClientRect();
    // Element.getBoundingClientRect() retorna o tamanho de um elemento e sua posição relativa ao viewport. Pega o width/height do product-container
    
    let containeWidth = containerDimenstions.width;
    // Coloca a width do containerDimenstions na variavel

    nxtBtn[i].addEventListener('click', () => {
        pItem.scrollLeft += containeWidth;
        // é tipo o style.left , só q aplica só com o scroll
        // Faz com ele seja = ao width
        // Vai somando o 967, assim vai scrolando para o lado
    });

    preBtn[i].addEventListener('click', () => {
        pItem.scrollLeft -= containeWidth;
    });
});