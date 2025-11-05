// JavaScript Document

/*

TemplateMo 600 Prism Flux

https://templatemo.com/tm-600-prism-flux

*/


// Portfolio data for carousel
        const portfolioData = [
            {
                id: 1,
                title: 'Interfaz de mesero',
                description: 'Una interfaz intuitiva, organizada y optimizada para que los meseros puedan tomar pedidos de manera eficiente y brindar un mejor servicio a los clientes.',
                image: 'images/mi-proyecto/interfaz-mesero.png', // <-- ¡CAMBIA ESTA RUTA!
                tech: ['Notificaciones en tiempo real', 'Gestion de ordenes pendientes', 'TPV integrado'],
                video: 'videos/mesero-demo.mp4' // <-- ¡CAMBIA ESTA RUTA DE VIDEO!
            },
            {
                id: 2,
                title: 'Interfaz de hostess',
                description: 'Una interfaz diseñada para que las hostesses puedan gestionar las reservas, asignar mesas y coordinar la llegada de los clientes de manera fluida y eficiente.',
                image: 'images/mi-proyecto/interfaz-hostess.png', // <-- ¡CAMBIA ESTA RUTA!
                tech: ['Lista de espera', 'Modificacion de reservaciones', 'Gestion de mesas disponibles y ocupadas'],
                video: 'videos/hostess-demo.mp4' // <-- ¡CAMBIA ESTA RUTA DE VIDEO!
            },
            {
                id: 3,
                title: 'Interfaz de cocina',
                description: 'Una interfaz especializada para que el personal de cocina pueda recibir y gestionar los pedidos de manera clara y organizada, optimizando el flujo de trabajo en la cocina.',
                image: 'images/mi-proyecto/interfaz-cocina.png', // <-- ¡CAMBIA ESTA RUTA!
                tech: ['Historial de ordenes por dia', 'cambio de estados de pedidos'],
                video: 'videos/cocina-demo.mp4' // <-- ¡CAMBIA ESTA RUTA DE VIDEO!
            },
            {
                id: 4,
                title: 'Interfaz de barra',
                description: 'Una interfaz diseñada para que el personal de barra pueda gestionar las órdenes de bebidas de manera eficiente, asegurando un servicio rápido y preciso.',
                image: 'images/mi-proyecto/interfaz-barra.png', // <-- ¡CAMBIA ESTA RUTA!
                tech: ['Historial de ordenes por dia', 'cambio de estados en pedidos'],
                video: 'videos/barra-demo.mp4' // <-- ¡CAMBIA ESTA RUTA DE VIDEO!
            },
            {
                id: 5,
                title: 'Interfaz de caja',
                description: 'Una interfaz intuitiva para que el personal de caja pueda procesar pagos, gestionar transacciones y generar recibos de manera rápida y segura.',
                image: 'images/mi-proyecto/interfaz-caja.png', // <-- ¡CAMBIA ESTA RUTA!
                tech: ['Cortes', 'Busqueda de tickets finales', 'Historial de ventas'],
                video: 'videos/caja-demo.mp4' // <-- ¡CAMBIA ESTA RUTA DE VIDEO!
            },
            {
                id: 6,
                title: 'Interfaz de gerente',
                description: 'Una interfaz completa para que los gerentes puedan supervisar todas las operaciones del restaurante, gestionar el personal y analizar el rendimiento del negocio.',
                image: 'images/mi-proyecto/interfaz-gerente.png', // <-- ¡CAMBIA ESTA RUTA!
                tech: ['Interfaz de reportes', 'Registrar nuevos usuarios'],
                video: 'videos/gerente-demo.mp4' // <-- ¡CAMBIA ESTA RUTA DE VIDEO!
            },
            {
                id: 7,
                title: 'Login y pantalla de bloqueo',
                description: 'Interfaz segura y fácil de usar para que los empleados puedan acceder a sus cuentas y proteger la información sensible del restaurante.',
                image: 'images/mi-proyecto/interfaz-login.png', // <-- ¡CAMBIA ESTA RUTA!
                tech: ['Passwords hasheadas', 'Validaciones', 'Pantalla amigable al cerrar sesion'],
                video: 'videos/login-demo.mp4' // <-- ¡CAMBIA ESTA RUTA DE VIDEO!
            }
        ];

        // Skills data (Datos de Habilidades - ¡CORREGIDO CON TU LISTA!)
        const skillsData = [
            // Frontend
            { name: 'HTML5', icon: '📄', level: 98, category: 'frontend' },
            { name: 'CSS3', icon: '🎨', level: 95, category: 'frontend' },
            { name: 'JavaScript (JS)', icon: '⚡', level: 90, category: 'frontend' },

            // Backend
            { name: 'PHP (API)', icon: '🐘', level: 90, category: 'backend' },
            { name: 'MySQL', icon: '🐬', level: 85, category: 'backend' },

            // Herramientas (Tools) - Usando la categoría 'cloud' del template
            { name: 'GitHub', icon: 'G', level: 93, category: 'cloud' }, 
            { name: 'VSCode', icon: '💻', level: 95, category: 'cloud' },
            { name: 'Sublime Merge', icon: 'S', level: 80, category: 'cloud' }
        ];

        // Scroll to section function
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            const header = document.getElementById('header');
            if (section) {
                const headerHeight = header.offsetHeight;
                const targetPosition = section.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Initialize particles for philosophy section
        function initParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random horizontal position
                particle.style.left = Math.random() * 100 + '%';
                
                // Start particles at random vertical positions throughout the section
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay for natural movement
                particle.style.animationDelay = Math.random() * 20 + 's';
                
                // Random animation duration for variety
                particle.style.animationDuration = (18 + Math.random() * 8) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize carousel
        let currentIndex = 0;
        const carousel = document.getElementById('carousel');
        const indicatorsContainer = document.getElementById('indicators');

        // ========= FUNCIÓN MODIFICADA PARA EL MODAL =========
        function createCarouselItem(data, index) {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.dataset.index = index;
            
            item.innerHTML = `
                <div class="card">
                    <div class="card-number">0${data.id}</div>
                    <div class="card-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <h3 class="card-title">${data.title}</h3>
                    <p class="card-description">${data.description}</p>
                    
                    <button class="card-cta" onclick="openModal(${data.id})">Ver Detalles</button>
                </div>
            `;
            
            return item;
        }
        // ========= FIN DE LA FUNCIÓN MODIFICADA =========


        function initCarousel() {
            // Create carousel items
            portfolioData.forEach((data, index) => {
                const item = createCarouselItem(data, index);
                carousel.appendChild(item);
                
                // Create indicator
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.dataset.index = index;
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            updateCarousel();
        }

        function updateCarousel() {
            const items = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.indicator');
            const totalItems = items.length;
            const isMobile = window.innerWidth <= 768;
            const isTablet = window.innerWidth <= 1024;
            
            items.forEach((item, index) => {
                // Calculate relative position
                let offset = index - currentIndex;
                
                // Wrap around for continuous rotation
                if (offset > totalItems / 2) {
                    offset -= totalItems;
                } else if (offset < -totalItems / 2) {
                    offset += totalItems;
                }
                
                const absOffset = Math.abs(offset);
                const sign = offset < 0 ? -1 : 1;
                
                // Reset transform
                item.style.transform = '';
                item.style.opacity = '';
                item.style.zIndex = '';
                item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
                
                // Adjust spacing based on screen size
                let spacing1 = 400;
                let spacing2 = 600;
                let spacing3 = 750;
                
                if (isMobile) {
                    spacing1 = 280;
                    spacing2 = 420;
                    spacing3 = 550;
                } else if (isTablet) {
                    spacing1 = 340;
                    spacing2 = 520;
                    spacing3 = 650;
                }
                
                if (absOffset === 0) {
                    // Center item
                    item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
                    item.style.opacity = '1';
                    item.style.zIndex = '10';
                } else if (absOffset === 1) {
                    // Side items
                    const translateX = sign * spacing1;
                    const rotation = isMobile ? 25 : 30;
                    const scale = isMobile ? 0.88 : 0.85;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.8';
                    item.style.zIndex = '5';
                } else if (absOffset === 2) {
                    // Further side items
                    const translateX = sign * spacing2;
                    const rotation = isMobile ? 35 : 40;
                    const scale = isMobile ? 0.75 : 0.7;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.5';
                    item.style.zIndex = '3';
                } else if (absOffset === 3) {
                    // Even further items
                    const translateX = sign * spacing3;
                    const rotation = isMobile ? 40 : 45;
                    const scale = isMobile ? 0.65 : 0.6;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.3';
                    item.style.zIndex = '2';
                } else {
                    // Hidden items (behind)
                    item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
                    item.style.opacity = '0';
                    item.style.zIndex = '1';
                }
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % portfolioData.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
            updateCarousel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        // Initialize hexagonal skills grid
        function initSkillsGrid() {
            const skillsGrid = document.getElementById('skillsGrid');
            const categoryTabs = document.querySelectorAll('.category-tab');
            
            function displaySkills(category = 'all') {
                skillsGrid.innerHTML = '';
                
                const filteredSkills = category === 'all' 
                    ? skillsData 
                    : skillsData.filter(skill => skill.category === category);
                
                filteredSkills.forEach((skill, index) => {
                    const hexagon = document.createElement('div');
                    hexagon.className = 'skill-hexagon';
                    hexagon.style.animationDelay = `${index * 0.1}s`;
                    
                    hexagon.innerHTML = `
                        <div class="hexagon-inner">
                            <div class="hexagon-content">
                                <div class="skill-icon-hex">${skill.icon}</div>
                                <div class="skill-name-hex">${skill.name}</div>
                                <div class="skill-level">
                                    <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                                </div>
                                <div class="skill-percentage-hex">${skill.level}%</div>
                            </div>
                        </div>
                    `;
                    
                    skillsGrid.appendChild(hexagon);
                });
            }
            
            categoryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    displaySkills(tab.dataset.category);
                });
            });
            
            displaySkills();
        }

        // Event listeners
        document.getElementById('nextBtn').addEventListener('click', nextSlide);
        document.getElementById('prevBtn').addEventListener('click', prevSlide);

        // Auto-rotate carousel
        setInterval(nextSlide, 5000);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Update carousel on window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateCarousel();
            }, 250);
        });

        // Initialize on load
        initCarousel();
        initSkillsGrid();
        initParticles();

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling and active navigation
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        // Update active navigation on scroll
        function updateActiveNav() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        const href = link.getAttribute('href').substring(1);
                        if (href === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);

        // Animated counter for stats
        function animateCounter(element) {
            const target = parseInt(element.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(counter);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        }

        // Intersection Observer for stats animation
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(number => {
                        if (!number.classList.contains('animated')) {
                            number.classList.add('animated');
                            animateCounter(number);
                        }
                    });
                }
            });
        }, observerOptions);

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message
            alert(`Thank you ${data.name}! Your message has been transmitted successfully. We'll respond within 24 hours.`);
            
            // Reset form
            contactForm.reset();
        });

        // Loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
            }, 1500);
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });


/* ----- INICIO DE LÓGICA DEL MODAL ----- */

// 1. Obtener los elementos del Modal
const modalOverlay = document.getElementById('portfolioModal');
const modalClose = document.getElementById('modalClose');
const modalVideoContainer = document.getElementById('modalVideoContainer');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');

// 2. Función para ABRIR el modal
function openModal(id) {
    // Encontrar los datos del proyecto por su ID
    const projectData = portfolioData.find(item => item.id === id);
    
    if (projectData) {
        // Llenar el modal con los datos
        modalTitle.textContent = projectData.title;
        modalDescription.textContent = projectData.description;
        
        // Crear los badges de tecnología
        modalTech.innerHTML = projectData.tech.map(tech => 
            `<span class="tech-badge">${tech}</span>`
        ).join('');
        
        // Crear e insertar el video
        modalVideoContainer.innerHTML = `
            <video src="${projectData.video}" controls autoplay loop muted playsinline>
                Tu navegador no soporta el video.
            </video>
        `;
        
        // Mostrar el modal
        modalOverlay.classList.add('visible');
    }
}

// 3. Función para CERRAR el modal
function closeModal() {
    modalOverlay.classList.remove('visible');
    
    // Detener el video (importante para que no siga sonando)
    // Al quitar el HTML, el video se detiene y se elimina.
    modalVideoContainer.innerHTML = ''; 
}

// 4. Asignar eventos
modalClose.addEventListener('click', closeModal);

// Cerrar el modal si se hace clic en el fondo (overlay)
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

/* ----- FIN DE LÓGICA DEL MODAL ----- */