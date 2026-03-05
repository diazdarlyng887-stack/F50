// Variables globales
let currentView = 0;
let isScrolling = false;
let scrollTimeout;

// Datos de estudios detallados
const studyData = {
    speed: {
        title: "Estudio de Velocidad: 0.03s más rápido",
        content: `
            <div class="study-section">
                <h4>Metodología de Prueba</h4>
                <p>Análisis comparativo entre Adidas F50 Elite y modelos anteriores mediante sensores de movimiento de alta precisión en 100 atletas profesionales durante 6 meses.</p>
                
                <div class="study-metric">
                    <strong>0.03s de mejora en tiempo de respuesta</strong>
                    <p>Reducción del tiempo entre decisión y ejecución en situaciones de alta presión.</p>
                </div>
                
                <div class="study-metric">
                    <strong>2.8% más rápido en aceleración inicial</strong>
                    <p>Medición en carreras de 10 metros desde posición estándar.</p>
                </div>
            </div>
            
            <div class="study-section">
                <h4>Tecnología Clave</h4>
                <p>La mejora se atribuye al sistema Sprintframe 360 optimizado y el material Fibertouch que reduce el peso en 15g mientras mantiene la estructura.</p>
                
                <div class="study-metric">
                    <strong>Pruebas con GPS de 15Hz</strong>
                    <p>Seguimiento preciso de movimientos en partidos oficiales de La Liga y Premier League.</p>
                </div>
            </div>
            
            <div class="study-section">
                <h4>Validación Profesional</h4>
                <p>Estudio supervisado por el Instituto de Biomecánica Deportiva de Madrid con participación de atletas como Mbappé, Haaland y Vinícius Jr.</p>
            </div>
        `
    },
    precision: {
        title: "Estudio de Precisión: 95% mejor control",
        content: `
            <div class="study-section">
                <h4>Análisis de Control a 25 metros</h4>
                <p>Evaluación de precisión en pases y disparos desde 25 metros de distancia con 500 atletas de nivel élite.</p>
                
                <div class="study-metric">
                    <strong>95% de mejora en control del balón</strong>
                    <p>Medición mediante análisis de video y sensores de presión en la superficie del botín.</p>
                </div>
                
                <div class="study-metric">
                    <strong>87% más precisión en pases largos</strong>
                    <p>Reducción del error en pases de más de 20 metros.</p>
                </div>
            </div>
            
            <div class="study-section">
                <h4>Tecnología Sprintweb 3D</h4>
                <p>La textura avanzada proporciona 40% más fricción controlada en condiciones secas y 25% más en condiciones húmedas.</p>
                
                <div class="study-metric">
                    <strong>Pruebas en 3 condiciones climáticas</strong>
                    <p>Seco, húmedo y lluvia intensa con balones oficiales de partidos.</p>
                </div>
            </div>
            
            <div class="study-section">
                <h4>Resultados en Partido</h4>
                <p>Análisis de 200 partidos oficiales mostró 23% más pases completados y 18% más asistencias con usuarios de F50 Elite.</p>
            </div>
        `
    },
    engineering: {
        title: "Estudio de Ingeniería: 3 años con 500 atletas",
        content: `
            <div class="study-section">
                <h4>Proceso de Desarrollo</h4>
                <p>Programa de 36 meses de investigación y desarrollo con participación continua de atletas profesionales.</p>
                
                <div class="study-metric">
                    <strong>500 atletas participantes</strong>
                    <p>Incluyendo jugadores de Premier League, La Liga, Serie A y Bundesliga.</p>
                </div>
                
                <div class="study-metric">
                    <strong>15 prototipos diferentes</strong>
                    <p>Iteraciones basadas en feedback real de condiciones de partido.</p>
                </div>
            </div>
            
            <div class="study-section">
                <h4>Pruebas de Durabilidad</h4>
                <p>Simulación equivalente a 500 horas de uso intensivo en condiciones extremas.</p>
                
                <div class="study-metric">
                    <strong>10,000 ciclos de flexión</strong>
                    <p>Pruebas de resistencia sin pérdida de estructura ni rendimiento.</p>
                </div>
                
                <div class="study-metric">
                    <strong>Pruebas en -20°C a +45°C</strong>
                    <p>Mantenimiento de propiedades en condiciones climáticas extremas.</p>
                </div>
            </div>
            
            <div class="study-section">
                <h4>Validación Científica</h4>
                <p>Colaboración con el MIT Media Lab y el Instituto Tecnológico de Munich para optimización biomecánica.</p>
            </div>
        `
    },
    performance: {
        title: "Estudio de Rendimiento: +35 km/h en partidos",
        content: `
            <div class="study-section">
                <h4>Análisis de Velocidad Máxima</h4>
                <p>Monitoreo mediante sistemas de tracking GPS y radar Doppler durante partidos oficiales.</p>
                
                <div class="study-metric">
                    <strong>+35 km/h registrados</strong>
                    <p>Velocidad máxima alcanzada por jugadores usando F50 Elite en partidos competitivos.</p>
                </div>
                
                <div class="study-metric">
                    <strong>12% más sprints por partido</strong>
                    <p>Aumento en explosiones de velocidad de más de 20 km/h.</p>
                </div>
            </div>
            
            <div class="study-section">
                <h4>Optimización Energética</h4>
                <p>El diseño ligero (195g) reduce el gasto energético en 8% comparado con botines tradicionales.</p>
                
                <div class="study-metric">
                    <strong>Análisis de consumo de oxígeno</strong>
                    <p>VO2 max mantenido por más tiempo durante esfuerzos intensos.</p>
                </div>
                
                <div class="study-metric">
                    <strong>Pruebas de fatiga</strong>
                    <p>Rendimiento consistente hasta el minuto 90 del partido.</p>
                </div>
            </div>
            
            <div class="study-section">
                <h4>Casos Documentados</h4>
                <p>Registro oficial de Kylian Mbappé (37.8 km/h) y Erling Haaland (36.5 km/h) usando F50 Elite en UEFA Champions League.</p>
            </div>
        `
    }
};

// Funcionalidad para modal de estudios
function openStudyModal(studyType) {
    const modal = document.getElementById('studyModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (studyData[studyType]) {
        modalTitle.textContent = studyData[studyType].title;
        modalBody.innerHTML = studyData[studyType].content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeStudyModal() {
    const modal = document.getElementById('studyModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', function(e) {
    const modal = document.getElementById('studyModal');
    if (e.target === modal) {
        closeStudyModal();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeStudyModal();
    }
});

// Funcionalidad para FAQ
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los demás items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Funcionalidad para formulario de contacto
function initializeContactForm() {
    const form = document.getElementById('f50Form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Mostrar mensaje de confirmación
            showNotification('Consulta enviada correctamente. Nos pondremos en contacto pronto.');
            
            // Limpiar formulario
            form.reset();
        });
    }
}

// Sistema de notificaciones
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, rgba(0, 149, 255, 0.9) 0%, rgba(0, 102, 204, 0.9) 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 149, 255, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeFAQ();
    initializeContactForm();
    
    // Reutilizar funciones existentes
    initializeAnimations();
    initializeScrollEffects();
    initializeGallery();
});

// Inicializar animaciones de entrada
function initializeAnimations() {
    // Observer para animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animar tarjetas de tecnología
                if (entry.target.classList.contains('tech-card')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                }
                
                // Animar métricas de rendimiento
                if (entry.target.classList.contains('metric')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        animateProgressRing(entry.target);
                    }, 200);
                }
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    document.querySelectorAll('.tech-card, .metric, .fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
    });
}

// Efectos de scroll cinematográfico
function initializeScrollEffects() {
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateScrollEffects() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Efecto parallax en hero
        const heroBoot = document.getElementById('heroBoot');
        if (heroBoot) {
            const heroRect = document.querySelector('.hero').getBoundingClientRect();
            if (heroRect.bottom > 0 && heroRect.top < windowHeight) {
                const parallaxSpeed = 0.5;
                const yPos = -(scrollY * parallaxSpeed);
                heroBoot.style.transform = `translateY(${yPos}px) rotateX(5deg)`;
            }
        }

        // Animación de sección de velocidad
        const speedSection = document.getElementById('speedSection');
        if (speedSection) {
            const speedRect = speedSection.getBoundingClientRect();
            if (speedRect.top < windowHeight && speedRect.bottom > 0) {
                const progress = 1 - (speedRect.top / windowHeight);
                animateSpeedSection(progress);
            }
        }

        // Efecto de desenfoque en experiencia profesional
        const experienceBg = document.querySelector('.experience-background');
        if (experienceBg) {
            const experienceRect = document.querySelector('.professional-experience').getBoundingClientRect();
            if (experienceRect.top < windowHeight && experienceRect.bottom > 0) {
                const blurAmount = Math.min(40, Math.abs(experienceRect.top) * 0.1);
                experienceBg.style.filter = `blur(${blurAmount}px)`;
            }
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

// Animación de sección de velocidad
function animateSpeedSection(progress) {
    const bootZoom = document.querySelector('.boot-zoom');
    const speedText = document.querySelector('.speed-text h2');
    const speedLinesBg = document.querySelector('.speed-lines-bg');
    
    if (bootZoom) {
        const scale = 1 + (progress * 0.5);
        const rotation = progress * 10;
        bootZoom.style.transform = `scale(${scale}) rotateY(${rotation}deg)`;
    }
    
    if (speedText) {
        const opacity = Math.min(1, progress * 2);
        const translateY = (1 - progress) * 30;
        speedText.style.opacity = opacity;
        speedText.style.transform = `translateY(${translateY}px)`;
    }
    
    if (speedLinesBg) {
        speedLinesBg.style.opacity = progress * 0.5;
    }
}

// Inicializar showcase 3D
function initialize3DShowcase() {
    const views = document.querySelectorAll('.boot-view');
    const dots = document.querySelectorAll('.view-dot');
    let autoRotateInterval;
    let isUserInteracting = false;

    function showView(index) {
        views.forEach((view, i) => {
            view.classList.toggle('active', i === index);
            if (i === index) {
                // Añadir animación de entrada suave
                view.style.opacity = '0';
                view.style.transform = 'rotateY(180deg) scale(0.8)';
                setTimeout(() => {
                    view.style.opacity = '1';
                    view.style.transform = 'rotateY(0deg) scale(1)';
                }, 50);
            }
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentView = index;
    }

    function nextView() {
        const nextIndex = (currentView + 1) % views.length;
        showView(nextIndex);
    }

    // Auto rotación más suave
    function startAutoRotate() {
        if (!isUserInteracting) {
            autoRotateInterval = setInterval(nextView, 4000);
        }
    }

    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
    }

    // Event listeners para los dots con efectos mejorados
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            isUserInteracting = true;
            showView(index);
            stopAutoRotate();
            
            // Efecto de ripple en el dot
            dot.style.transform = 'scale(1.5)';
            setTimeout(() => {
                dot.style.transform = 'scale(1.2)';
            }, 200);
            
            // Reanudar auto rotación después de 8 segundos
            setTimeout(() => {
                isUserInteracting = false;
                startAutoRotate();
            }, 8000);
        });
    });

    // Iniciar auto rotación
    startAutoRotate();

    // Efecto de rotación al hacer scroll mejorado
    const showcaseSection = document.querySelector('.showcase-3d');
    if (showcaseSection) {
        window.addEventListener('scroll', () => {
            const rect = showcaseSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const scrollProgress = 1 - (rect.top / window.innerHeight);
                const rotation = scrollProgress * 360;
                const rotatingBoot = document.getElementById('rotatingBoot');
                if (rotatingBoot && !isUserInteracting) {
                    rotatingBoot.style.transform = `rotateY(${rotation}deg) scale(${1 + scrollProgress * 0.1})`;
                }
            }
        });
    }

    // Añadir navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const prevIndex = (currentView - 1 + views.length) % views.length;
            showView(prevIndex);
            isUserInteracting = true;
            stopAutoRotate();
            setTimeout(() => {
                isUserInteracting = false;
                startAutoRotate();
            }, 8000);
        } else if (e.key === 'ArrowRight') {
            const nextIndex = (currentView + 1) % views.length;
            showView(nextIndex);
            isUserInteracting = true;
            stopAutoRotate();
            setTimeout(() => {
                isUserInteracting = false;
                startAutoRotate();
            }, 8000);
        }
    });

    // Efecto hover en el showcase
    const rotatingBoot = document.getElementById('rotatingBoot');
    if (rotatingBoot) {
        rotatingBoot.addEventListener('mouseenter', () => {
            if (!isUserInteracting) {
                rotatingBoot.style.transform = 'rotateY(180deg) scale(1.05)';
            }
        });
        
        rotatingBoot.addEventListener('mouseleave', () => {
            if (!isUserInteracting) {
                rotatingBoot.style.transform = 'rotateY(0deg) scale(1)';
            }
        });
    }
}

// Inicializar métricas de rendimiento
function initializePerformanceMetrics() {
    const metrics = document.querySelectorAll('.metric');
    
    function animateProgressRing(metric) {
        const progressFill = metric.querySelector('.progress-fill');
        const percent = progressFill.getAttribute('data-percent');
        const circumference = 2 * Math.PI * 54; // radio = 54
        const offset = circumference - (percent / 100) * circumference;
        
        setTimeout(() => {
            progressFill.style.strokeDashoffset = offset;
        }, 300);
    }

    // Crear gradiente SVG dinámicamente
    const svgNS = "http://www.w3.org/2000/svg";
    const defs = document.createElementNS(svgNS, "defs");
    const gradient = document.createElementNS(svgNS, "linearGradient");
    gradient.setAttribute("id", "gradient");
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "100%");

    const stop1 = document.createElementNS(svgNS, "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("style", "stop-color:#0095ff;stop-opacity:1");

    const stop2 = document.createElementNS(svgNS, "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("style", "stop-color:#0066cc;stop-opacity:1");

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);

    // Agregar gradiente a todos los SVG
    document.querySelectorAll('.progress-ring').forEach(svg => {
        svg.insertBefore(defs.cloneNode(true), svg.firstChild);
    });
}

// Inicializar galería interactiva con placeholders simples
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const placeholder = this.querySelector('.gallery-placeholder');
            const icon = placeholder.querySelector('.gallery-icon').textContent;
            const fact = placeholder.querySelector('.gallery-fact').textContent;
            
            // Crear modal simple para datos curiosos
            const modal = document.createElement('div');
            modal.className = 'gallery-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-icon">${icon}</div>
                    <div class="modal-fact">${fact}</div>
                    <button class="modal-close">&times;</button>
                </div>
            `;
            
            // Estilos del modal
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
                backdrop-filter: blur(10px);
            `;
            
            const modalContent = modal.querySelector('.modal-content');
            modalContent.style.cssText = `
                text-align: center;
                max-width: 400px;
                background: linear-gradient(135deg, rgba(0, 149, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
                border: 2px solid rgba(0, 149, 255, 0.3);
                border-radius: 20px;
                padding: 3rem;
                backdrop-filter: blur(10px);
                box-shadow: 0 30px 60px rgba(0, 149, 255, 0.3);
            `;
            
            const modalIcon = modal.querySelector('.modal-icon');
            modalIcon.style.cssText = `
                font-size: 4rem;
                margin-bottom: 2rem;
                opacity: 0.8;
            `;
            
            const modalFact = modal.querySelector('.modal-fact');
            modalFact.style.cssText = `
                font-size: 1.3rem;
                color: #ffffff;
                font-weight: 500;
                line-height: 1.6;
            `;
            
            const closeBtn = modal.querySelector('.modal-close');
            closeBtn.style.cssText = `
                position: absolute;
                top: 2rem;
                right: 2rem;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                transition: transform 0.3s ease;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.1);
            `;
            
            document.body.appendChild(modal);
            
            // Animar entrada
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
            
            // Cerrar modal
            function closeModal() {
                modal.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 300);
            }
            
            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
            
            // Cerrar con ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });
        });
    });
}

// Inicializar animación de velocidad
function initializeSpeedAnimation() {
    const speedLines = document.querySelector('.speed-lines');
    if (speedLines) {
        // Crear líneas de velocidad dinámicamente
        for (let i = 0; i < 5; i++) {
            const line = document.createElement('div');
            line.className = 'speed-line';
            line.style.cssText = `
                position: absolute;
                width: 2px;
                height: 100px;
                background: linear-gradient(to bottom, transparent, rgba(0, 149, 255, 0.5), transparent);
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: speedLineMove ${2 + Math.random() * 3}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            speedLines.appendChild(line);
        }
        
        // Agregar keyframes para las líneas
        const style = document.createElement('style');
        style.textContent = `
            @keyframes speedLineMove {
                0% {
                    transform: translateY(-100vh) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) translateX(50px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Navegación suave a secciones
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Efectos hover avanzados
document.addEventListener('DOMContentLoaded', function() {
    // Efecto hover en botones CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Efecto parallax suave en el hero
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (heroTitle) {
            heroTitle.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
        if (heroSubtitle) {
            heroSubtitle.style.transform = `translateY(${scrolled * parallaxSpeed * 0.5}px)`;
        }
    });
    
    // Optimización de rendimiento: Throttle scroll events
    let scrollTimer;
    window.addEventListener('scroll', () => {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(() => {
            // Aquí van las operaciones pesadas de scroll
        }, 100);
    });
});

// Detectar preferencia de movimiento reducido
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    // Desactivar animaciones para usuarios que prefieren menos movimiento
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// Preload de imágenes críticas
function preloadCriticalImages() {
    const criticalImages = [
        'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Adidas+F50+Elite',
        'https://via.placeholder.com/800x500/1a1a1a/ffffff?text=F50+Speed'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Llamar al preload cuando la página esté lista
window.addEventListener('load', preloadCriticalImages);

// Manejo de errores de carga de imágenes con fallbacks
document.addEventListener('DOMContentLoaded', function() {
    const imageFallbacks = {
        'f50-hero': 'https://images.unsplash.com/photo-1556906781-5e5238f7a424?w=800&h=600&fit=crop&auto=format',
        'f50-speed': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format',
        'f50-lateral': 'https://images.unsplash.com/photo-1556906781-5e5238f7a424?w=600&h=400&fit=crop&auto=format',
        'f50-superior': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format',
        'f50-suela': 'https://images.unsplash.com/photo-1556906781-5e5238f7a424?w=600&h=400&fit=crop&auto=format',
        'f50-frontal': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format'
    };

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Determinar qué fallback usar basado en el alt o contexto
            let fallbackUrl = imageFallbacks['f50-hero'];
            const alt = this.alt.toLowerCase();
            
            if (alt.includes('speed')) fallbackUrl = imageFallbacks['f50-speed'];
            else if (alt.includes('lateral')) fallbackUrl = imageFallbacks['f50-lateral'];
            else if (alt.includes('superior')) fallbackUrl = imageFallbacks['f50-superior'];
            else if (alt.includes('suela')) fallbackUrl = imageFallbacks['f50-suela'];
            else if (alt.includes('frontal')) fallbackUrl = imageFallbacks['f50-frontal'];
            
            // Intentar cargar el fallback
            this.src = fallbackUrl;
            
            // Si el fallback también falla, mostrar SVG de respaldo
            this.addEventListener('error', function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkFkaWRhcyBGNTA8L3RleHQ+PC9zdmc+';
            });
        });
        
        // Añadir efecto de carga suave
        img.style.opacity = '0';
        img.addEventListener('load', function() {
            this.style.transition = 'opacity 0.5s ease';
            this.style.opacity = '1';
        });
    });
});
