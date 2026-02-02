/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.skill-item, .project-card, .glass-panel, .section-title');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            
            if(boxTop < triggerBottom) {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            } else {
                box.style.opacity = '0';
                box.style.transform = 'translateY(20px)';
            }
        });
    };

    // Initialize initial styles for reveal
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check once on load


    // --- Particle Background Animation (The Grid/Network) ---
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    
    let particlesArray;
    
    // Resize canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    // Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = (Math.random() * 1.5) - 0.75;
            this.speedY = (Math.random() * 1.5) - 0.75;
            // Color variation between primary cyan and secondary purple
            this.color = Math.random() > 0.5 ? 'rgba(0, 243, 255, ' : 'rgba(188, 19, 254, '; 
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Boundary check - wrap around
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = this.color + '0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            
            // Connect particles
            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = particlesArray[i].color + (1 - distance/100) * 0.2 + ')';
                    ctx.lineWidth = 1;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();
});
