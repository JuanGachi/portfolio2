document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.querySelector('.logo-container');
    const logo = document.querySelector('.logo');
    const svgDoc = logo.contentDocument;
    
    const leftEye = svgDoc.getElementById('leftEye'); // Cambia este ID al ID real de tu SVG
    const rightEye = svgDoc.getElementById('rightEye'); // Cambia este ID al ID real de tu SVG

    document.addEventListener('mousemove', function(e) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX / innerWidth - 0.5) * 30;
        const y = (clientY / innerHeight - 0.5) * 30;
        
        leftEye.style.transform = `translate(${x}px, ${y}px)`;
        rightEye.style.transform = `translate(${x}px, ${y}px)`;
    });
});
