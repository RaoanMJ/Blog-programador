let slideAtual = 1;

function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[slideNumber - 1].classList.add('active');
}

function mudarSlide(n) {
    slideAtual += n;

    const totalSlides = document.querySelectorAll('.slide').length;

    if (slideAtual > totalSlides) {
        slideAtual = 1;
    } else if (slideAtual < 1) {
        slideAtual = totalSlides;
    }

    showSlide(slideAtual);
}

window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 120) {
        header.classList.add('header-fixed');
        header.classList.remove('header-transparent');
    } else {
        header.classList.remove('header-fixed');
        header.classList.add('header-transparent');
    }
});

function valida2() {
    var resposta = window.confirm("Você prefere Frontend?");
    if (resposta) {
        window.location.href = "React.html";
    }
}

function valida1() {
    var resposta = window.confirm("Você prefere backend?");
    if (resposta) {
        window.location.href = "node.html";
    }
}

function changeImage() {
    var selectElement = document.getElementById("select");
    var imageElement = document.getElementById("dynamicImage");

    var selectedValue = selectElement.value;

    switch (selectedValue) {
        case "0":
            imageElement.src = "./imagens/clica.png";
            break;
        case "1":
            imageElement.src = "./imagens/backend.png";
            break;
        case "2":
            imageElement.src = "./imagens/front.png";
            break;
        default:
            imageElement.src = "./imagens/clica.png";
            break;
    }
}