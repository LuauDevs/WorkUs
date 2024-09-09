document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');

    let mouseOverIndex = null;

    function setCarouselPosition(index) {
        const itemWidth = carouselItems[0].offsetWidth;
        const offset = -index * itemWidth;
        carouselInner.style.transform = `translateX(${offset}px)`;
    }adocument.addEventListener('DOMContentLoaded', function() {
        const carouselInner = document.querySelector('.carousel-inner');
        const carouselItems = document.querySelectorAll('.carousel-item');
        let carouselWidth = carouselInner.offsetWidth;
        let itemWidth = carouselItems[0].offsetWidth;
        let totalItems = carouselItems.length;
        let animationDuration = 30;
        let currentIndex = 0;
    
        window.addEventListener('resize', () => {
            carouselWidth = carouselInner.offsetWidth;
            itemWidth = carouselItems[0].offsetWidth;
        });
    
        function setCarouselPosition(index) {
            const offset = -index * itemWidth;
            carouselInner.style.transform = `translateX(${offset}px)`;
        }
    
        function getCurrentIndex() {
            const computedStyle = window.getComputedStyle(carouselInner);
            const transformMatrix = new WebKitCSSMatrix(computedStyle.transform);
            const offset = transformMatrix.m41; // Valor de translação X
            return Math.round(-offset / itemWidth);
        }
    
        function pauseCarousel() {
            carouselInner.classList.add('paused');
            currentIndex = getCurrentIndex();
        }
    
        function resumeCarousel() {
            carouselInner.classList.remove('paused');
            const newDuration = (animationDuration * 1000) * (totalItems - currentIndex) / totalItems;
            carouselInner.style.animationDuration = `${newDuration}ms`;
        }
    
        carouselItems.forEach((item, index) => {
            item.addEventListener('mouseover', () => {
                pauseCarousel();
                setCarouselPosition(index);
            });
    
            item.addEventListener('mouseleave', () => {
                resumeCarousel();
            });
        });
    
        carouselInner.style.animationDuration = `${animationDuration}s`;
    });
    

    carouselItems.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            mouseOverIndex = index;
            carouselInner.classList.add('paused');
            setCarouselPosition(mouseOverIndex);
        });

        item.addEventListener('mouseleave', () => {
            mouseOverIndex = null;
            carouselInner.classList.remove('paused');
        });
    });
});


document.getElementById('Log').addEventListener('click', function() {
    window.location.href = 'inicio.html';
});

document.getElementById('Reg').addEventListener('click', function() {
    window.location.href = 'inicio.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

 
    registerBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        registerForm.style.display = 'block';
        loginForm.style.display = 'none'
    });

    // Remover
    document.addEventListener('click', function(event) {
        if (!loginForm.contains(event.target) && !registerForm.contains(event.target) &&
            !loginBtn.contains(event.target) && !registerBtn.contains(event.target)) {
            loginForm.style.display = 'none'
            registerForm.style.display = 'none';
        }
    });
});

const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});


function Mudarfoto(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const imgElement = document.getElementById('profile-photo');
        imgElement.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}