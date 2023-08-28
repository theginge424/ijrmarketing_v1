
// Particle System
let particles = new THREE.BufferGeometry();
let particleCount = 5000; // Adjust based on your needs
let positions = new Float32Array(particleCount * 3);
let colors = new Float32Array(particleCount * 3);
let colorOptions = ['#E5E4E2', '#ADD8E6', '#FF66B2', '#FF3385'].map(c => new THREE.Color(c));

for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = Infinity; // Start outside of view
    positions[i * 3 + 1] = Infinity;
    positions[i * 3 + 2] = Infinity;

    let chosenColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    colors[i * 3] = chosenColor.r;
    colors[i * 3 + 1] = chosenColor.g;
    colors[i * 3 + 2] = chosenColor.b;
}

particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

let particleMaterial = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});

let particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

function initStardustParticles(event) {
    // Find a particle outside of view (position is Infinity)
    for (let i = 0; i < particleCount; i++) {
        if (positions[i * 3] === Infinity) {
            positions[i * 3] = event.clientX - window.innerWidth / 2;
            positions[i * 3 + 1] = -event.clientY + window.innerHeight / 2;
            positions[i * 3 + 2] = 0;

            // Remove the particle from the scene after a duration
            setTimeout(() => {
                positions[i * 3] = Infinity;
                positions[i * 3 + 1] = Infinity;
                positions[i * 3 + 2] = Infinity;
            }, 1000);

            particles.attributes.position.needsUpdate = true;
            break;
        }
    }
}

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
