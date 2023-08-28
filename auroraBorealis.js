
// Adjustments for Aurora Borealis Effect
function createAuroraBorealis() {
    const auroraContainer = document.querySelector('.auroras');
    for (let i = 0; i < 3; i++) {  // creating 3 layers for depth
        const aurora = document.createElement('div');
        aurora.classList.add('aurora');
        aurora.style.opacity = 0.3 + (i * 0.2);  // varying opacity
        aurora.style.height = (20 + (i * 10)) + 'vh';  // varying height
        aurora.style.background = 'linear-gradient(rgba(0, 255, 255, 0.5), rgba(0, 0, 255, 0.5))';
        aurora.style.animation = 'shimmer 5s infinite';
        aurora.style.animationDuration = (4 + (i * 2)) + 's';  // varying animation speed
        auroraContainer.appendChild(aurora);
    }
}
createAuroraBorealis();