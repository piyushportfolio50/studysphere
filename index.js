 // Loading Screen
        window.addEventListener('load', function() {
            const loadingScreen = document.querySelector('.loading-screen');
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1500);
        });

        // Page Transition
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if(this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    
                    const pageTransition = document.querySelector('.page-transition');
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    pageTransition.style.transformOrigin = 'top';
                    pageTransition.style.transform = 'scaleY(1)';
                    
                    setTimeout(() => {
                        window.location.href = targetId;
                        pageTransition.style.transformOrigin = 'bottom';
                        pageTransition.style.transform = 'scaleY(0)';
                        
                        // Scroll to section after transition
                        setTimeout(() => {
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }, 500);
                }
            });
        });

        // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Animate elements when scrolling
        function animateOnScroll() {
            const materialCards = document.querySelectorAll('.material-card');
            const feeTable = document.querySelector('.fee-table');
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            
            materialCards.forEach((card, index) => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(cardPosition < screenPosition) {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 200);
                }
            });
            
            const tablePosition = feeTable.getBoundingClientRect().top;
            const tableScreenPosition = window.innerHeight / 1.3;
            
            if(tablePosition < tableScreenPosition) {
                feeTable.classList.add('animate');
            }
            
            testimonialCards.forEach((card, index) => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(cardPosition < screenPosition) {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 200);
                }
            });
        }
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Background bubbles animation
        document.addEventListener('mousemove', function(e) {
            const bubbles = document.querySelectorAll('.bubble');
            bubbles.forEach(bubble => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                // bubble.style.transform = translate(${x * 20}px, ${y * 20}px);
            });
        });