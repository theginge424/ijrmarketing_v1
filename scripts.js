let animationsPaused = false;

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


// Audio Control with Autoplay Restrictions
const audioControl = document.querySelector('.audio-control');
const audioElement = new Audio('path-to-audio-file.mp3');
audioControl.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play().catch(() => {
            // Handle autoplay restrictions
            audioControl.style.display = 'block';
        });
        audioControl.textContent = '🔇';
    } else {
        audioElement.pause();
        audioControl.textContent = '🔊';
    }
});

element.addEventListener('touchstart', function() {
    // handle touch start
});

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

// Device Orientation Event
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
        let beta = event.beta;
        let gamma = event.gamma;
        let x = (gamma / 60);
        let y = (beta / 60);
        document.querySelectorAll('.star').forEach(star => {
            star.style.transform = `translate(${x}px, ${y}px)`;
        });
        document.querySelectorAll('.planet').forEach((planet, index) => {
            const depth = 1 + (index * 0.1);
            planet.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });
        document.querySelectorAll('.nebula-cloud').forEach((nebula, index) => {
            const depth = 0.5 + (index * 0.05);
            nebula.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });
    });
}

// Mouse Move Event
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    const xStar = (window.innerWidth / 2 - e.pageX) / 100;
    const yStar = (window.innerHeight / 2 - e.pageY) / 100;
    document.querySelectorAll('.planet').forEach((planet, index) => {
        const depth = 1 + (index * 0.1);
        planet.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
    document.querySelectorAll('.star').forEach(star => {
        star.style.transform = `translate(${xStar}px, ${yStar}px)`;
    });
    document.querySelectorAll('.nebula-cloud').forEach((nebula, index) => {
        const depth = 0.5 + (index * 0.05);
        nebula.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
});

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

// Create Drifting Nebula Clouds
function createDriftingNebulaClouds() {
    const nebulaCloudsContainer = document.querySelector('.nebula-clouds');
    const nebulaClouds = ['path-to-nebula1.png', 'path-to-nebula2.png'];
    nebulaClouds.forEach((nebulaSrc, index) => {
        const nebula = document.createElement('img');
        nebula.src = nebulaSrc;
        nebula.classList.add('nebula-cloud');
        const positionX = Math.random() * 80;
        const positionY = Math.random() * 80;
        nebula.style.left = `${positionX}vw`;
        nebula.style.top = `${positionY}vh`;
        nebula.style.animationDuration = `${20 + index * 10}s`;
        nebula.style.setProperty('--drift-distance', `${Math.random() * 15}vw`);
        nebulaCloudsContainer.appendChild(nebula);
    });
}
createDriftingNebulaClouds();

const stardustContainer = document.querySelector('.stardust');
document.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.classList.add('stardust-particle');
    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;
    particle.style.width = `${Math.random() * 5 + 1}px`; // Random size between 1px and 6px
    particle.style.height = particle.style.width;
    stardustContainer.appendChild(particle);
    // Remove the particle from the DOM after animation completes
    setTimeout(() => {
        particle.remove();
    }, 1000);
});

function createAuroraBorealis() {
    const auroraContainer = document.querySelector('.auroras');
    for (let i = 0; i < 3; i++) {  // creating 3 layers for depth
        const aurora = document.createElement('div');
        aurora.classList.add('aurora');
        aurora.style.opacity = 0.3 + (i * 0.2);  // varying opacity
        aurora.style.height = (20 + (i * 10)) + 'vh';  // varying height
        aurora.style.animationDuration = (4 + (i * 2)) + 's';  // varying animation speed
        auroraContainer.appendChild(aurora);
    }
}
createAuroraBorealis();


function moveGalaxyCursor(event) {
    const cursor = document.getElementById('galaxyCursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
}

document.addEventListener('mousemove', moveGalaxyCursor);

// Initialize all effects
createTwinklingStars();
createRotatingPlanets();
createDriftingNebulaClouds();
createAuroraBorealis();
