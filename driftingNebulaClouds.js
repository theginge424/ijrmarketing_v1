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