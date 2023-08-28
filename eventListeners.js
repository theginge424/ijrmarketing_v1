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



function moveGalaxyCursor(event) {
    const cursor = document.getElementById('galaxyCursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
}

document.addEventListener('mousemove', moveGalaxyCursor);


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

// Event Listener for mouse movement
document.addEventListener('mousemove', initStardustParticles);


// Gravitational Pull Effect
document.addEventListener('mousemove', function(event) {
    // Logic to move nearby stars and planets slightly towards the cursor
    // This can be achieved using raycasting or simple distance calculations
});

// For mobile users, utilize device's orientation sensors
window.addEventListener('deviceorientation', function(event) {
    // Logic to adjust position of stars and planets based on device tilt
});