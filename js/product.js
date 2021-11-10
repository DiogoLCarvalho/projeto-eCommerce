const productImages = document.querySelectorAll('.product-images img');
const productImageSilde = document.querySelector('.image-slider');

let activeImageSilde = 0;

productImages.forEach((item,i)=>{
    // item é o item em si. Img01
    // i é o indice no caso o valor em q o img01 está. No caso 0
    item.addEventListener('click', function () {

        // Tire a classe do q esta selecionado elemento. No começo vai ser o 1
        productImages[activeImageSilde].classList.remove('active');

        // Adicione a classe no item q foi clicado
        item.classList.add('active');

        // Mude a imagem do fundo de acordo com a imagem do item. 
        // Faça q o background da imagem css. Seja p src da imagem
        productImageSilde.style.backgroundImage = `url('${item.src}')`

        // Faça q o activeImageSilde seja == ao indice do img
        activeImageSilde = i;
    })
});

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkBtn = 0;

sizeBtns.forEach((item, i)=>{
    item.addEventListener('click', ()=>{
        sizeBtns[checkBtn].classList.remove('check');
        item.classList.add('check');
        checkBtn = i;
    })
})