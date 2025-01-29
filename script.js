const indicators = document.querySelectorAll('.indicator');
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        indicators.forEach(ind => ind.classList.remove('active'));
        indicator.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const elements = document.querySelectorAll('.about-tag, .about-text h2, .about-text p, .feature, .about-image');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });
});

// Add this CSS to your stylesheet for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .fade-in {
        animation: fadeIn 0.8s ease forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);



document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.timeline-track');
    const cards = document.querySelectorAll('.timeline-card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    let cardsPerView = 3;

    function updateCardsPerView() {
        if (window.innerWidth <= 768) {
            cardsPerView = 1;
        } else if (window.innerWidth <= 1024) {
            cardsPerView = 2;
        } else {
            cardsPerView = 3;
        }
    }

    function updateSliderPosition() {
        const cardWidth = cards[0].offsetWidth + 20; // Including gap
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function updateButtonsState() {
        prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextButton.style.opacity = currentIndex >= cards.length - cardsPerView ? '0.5' : '1';
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
            updateButtonsState();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - cardsPerView) {
            currentIndex++;
            updateSliderPosition();
            updateButtonsState();
        }
    });

    window.addEventListener('resize', () => {
        const oldCardsPerView = cardsPerView;
        updateCardsPerView();
        if (oldCardsPerView !== cardsPerView) {
            currentIndex = 0;
            updateSliderPosition();
            updateButtonsState();
        }
    });

    // Initial setup
    updateCardsPerView();
    updateButtonsState();
});
 document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Search functionality
document.querySelector('.search-button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-input').value;
    // Add your search logic here
    console.log('Searching for:', searchTerm);
});

// Prevent form submission on enter
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.querySelector('.search-button').click();
    }
});