// Create Twinkling Stars
function createTwinklingStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = window.innerWidth * window.innerHeight / 8000;
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const positionX = Math.random() * 100;
        const positionY = Math.random() * 100;
        const brightness = Math.random() * 0.5 + 0.5;
        const zIndex = Math.floor(Math.random() * 5);
        star.classList.add('star');
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${positionX}vw`;
        star.style.top = `${positionY}vh`;
        star.style.opacity = brightness;
        star.style.zIndex = zIndex;
        star.style.animationDuration = `${0.5 + Math.random()}s`;
        star.style.animationDelay = `${Math.random()}s`;
        starsContainer.appendChild(star);
    }
}
createTwinklingStars();

// Twinkling Stars Animation
function animateStars() {
    if (!animationsPaused) {
        document.querySelectorAll('.star').forEach(star => {
            const opacity = parseFloat(star.style.opacity);
            const delta = Math.random() * 0.02;
            star.style.opacity = opacity + (Math.random() > 0.5 ? delta : -delta);
        });
        requestAnimationFrame(animateStars);
    }
}

// Create Rotating Planets
function createRotatingPlanets() {
    const planetsContainer = document.querySelector('.planets');
    const planets = ['path-to-planet1.png', 'path-to-planet2.png', 'path-to-planet3.png'];
    planets.forEach((planetSrc, index) => {
        const planet = document.createElement('img');
        planet.src = planetSrc;
        planet.classList.add('planet');
        planet.alt = "Planet Image";
        planet.setAttribute('role', 'img');
        planet.setAttribute('aria-label', 'Planet');
        const size = (Math.random() * 10) + 5;
        const positionX = Math.random() * 80;
        const positionY = Math.random() * 80;
        planet.style.width = `${size}vw`;
        planet.style.left = `${positionX}vw`;
        planet.style.top = `${positionY}vh`;
        planet.style.zIndex = Math.floor(Math.random() * 10);
        planet.style.opacity = Math.random() * (1 - 0.5) + 0.5;
        const rotationSpeed = Math.random() * 10 + 5;
        const rotationDirection = Math.random() > 0.5 ? 1 : -1;
        planet.style.animation = `rotation ${rotationSpeed}s infinite linear ${rotationDirection}`;
        planetsContainer.appendChild(planet);
    });
}
createRotatingPlanets();


// Rotating Planets Animation
function animatePlanets() {
    if (!animationsPaused) {
        document.querySelectorAll('.planet').forEach(planet => {
            const rotation = parseFloat(planet.dataset.rotation || 0);
            const delta = 0.5;
            planet.style.transform = `rotate(${rotation + delta}deg)`;
            planet.dataset.rotation = rotation + delta;
        });
        requestAnimationFrame(animatePlanets);
    }
}

// Drifting Nebula Clouds Animation
function animateNebulaClouds() {
    if (!animationsPaused) {
        document.querySelectorAll('.nebula-cloud').forEach(nebula => {
            const positionX = parseFloat(nebula.style.left);
            const delta = 0.2;
            nebula.style.left = `${positionX + delta}vw`;
        });
        requestAnimationFrame(animateNebulaClouds);
    }
}

// Portal/Wormhole Animation
function createPortalAnimation() {
    // Logic for swirling patterns and light streaks
    // Use Three.js functionalities to create the desired effects
}



// Animation Control
const animationControlBtn = document.getElementById('animationControl');
animationControlBtn.addEventListener('click', () => {
    if (animationsPaused) {
        animateStars();
        animatePlanets();
        animateNebulaClouds();
    } else {
        // pause animations
    }
    animationsPaused = !animationsPaused;
});