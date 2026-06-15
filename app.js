/* --------------------------------------------------
 * Lollie's Exterior Cleaning Services - Interactive Logic
 * Vanilla JavaScript - Premium Micro-interactions
 * -------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU TOGGLE
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
            
            // Hamburger animation
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navMenu.classList.remove('open');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // 2. ACTIVE NAVIGATION LINK ON SCROLL
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        mobileNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // 3. STATS COUNTING ANIMATION
    const animatedStats = [
        { id: 'customer-count', target: 4800, suffix: '+' },
        { id: 'experience-count', target: 15, suffix: '+' }
    ];

    const animateCount = (el, target, suffix) => {
        let currentVal = 0;
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / target));
        const increment = target > 100 ? 50 : 1;
        
        const timer = setInterval(() => {
            currentVal += increment;
            if (currentVal >= target) {
                el.textContent = target + suffix;
                clearInterval(timer);
            } else {
                el.textContent = currentVal + suffix;
            }
        }, stepTime * (increment === 1 ? 1 : 1.5));
    };

    // Intersection Observer to trigger counter when visible
    const observerOptions = {
        threshold: 0.2
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedStats.forEach(stat => {
                    const el = document.getElementById(stat.id);
                    if (el) {
                        animateCount(el, stat.target, stat.suffix);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats-bottom-bar');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // 3.5. SERVICES SHOWCASE INTERACTIVE DASHBOARD
    const showcaseMenuItems = document.querySelectorAll('.showcase-menu-item');
    const showcasePanelCards = document.querySelectorAll('.showcase-panel-card');

    // Function to activate a specific service tab by index
    const activateServiceTab = (index) => {
        if (showcaseMenuItems.length === 0) return;
        const item = showcaseMenuItems[index];
        // Remove active class from all menu items
        showcaseMenuItems.forEach(mi => mi.classList.remove('active'));
        // Add active class to target item
        item.classList.add('active');

        const targetId = item.getAttribute('data-target');

        // Toggle active class on showcase cards
        showcasePanelCards.forEach(card => {
            if (card.id === targetId) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Smooth scroll sidebar menu item into view on mobile
        const sidebar = document.querySelector('.services-showcase-sidebar');
        if (window.innerWidth <= 1024 && sidebar) {
            const offsetLeft = item.offsetLeft - (sidebar.offsetWidth / 2) + (item.offsetWidth / 2);
            sidebar.scrollTo({
                left: offsetLeft,
                behavior: 'smooth'
            });
        }
    };

    if (showcaseMenuItems.length > 0 && showcasePanelCards.length > 0) {
        let currentServiceIndex = 0;
        let serviceAutoRotateInterval = null;

        // Start auto-rotating service tabs every 3 seconds
        const startServiceAutoRotate = () => {
            serviceAutoRotateInterval = setInterval(() => {
                currentServiceIndex = (currentServiceIndex + 1) % showcaseMenuItems.length;
                activateServiceTab(currentServiceIndex);
            }, 3000);
        };

        // Stop auto-rotation
        const stopServiceAutoRotate = () => {
            if (serviceAutoRotateInterval) {
                clearInterval(serviceAutoRotateInterval);
                serviceAutoRotateInterval = null;
            }
        };

        // Manual click handler — pause auto-rotate, resume after 8s
        showcaseMenuItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                stopServiceAutoRotate();
                currentServiceIndex = index;
                activateServiceTab(index);
                // Resume auto-rotate after 8 seconds of inactivity
                setTimeout(() => {
                    if (!serviceAutoRotateInterval) {
                        startServiceAutoRotate();
                    }
                }, 8000);
            });
        });

        // Start auto-rotate when services section comes into view
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            const servicesObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startServiceAutoRotate();
                    } else {
                        stopServiceAutoRotate();
                    }
                });
            }, { threshold: 0.15 });
            servicesObserver.observe(servicesSection);
        } else {
            startServiceAutoRotate();
        }
    }

    // 4. BEFORE/AFTER DRAGGABLE COMPARISON SLIDER
    const sliderContainer = document.getElementById('slider-container');
    const afterImageDiv = document.getElementById('after-image-div');
    const sliderHandle = document.getElementById('slider-handle');
    const afterImgScaled = document.querySelector('.after-img-scaled');

    if (sliderContainer && afterImageDiv && sliderHandle) {
        let isSliding = false;

        // Set slider position by percentage (0–100)
        const setSliderPercent = (percent) => {
            afterImageDiv.style.width = `${percent}%`;
            sliderHandle.style.left = `${percent}%`;
        };

        const updateSliderWidth = (xPosition) => {
            const rect = sliderContainer.getBoundingClientRect();
            // Restrict position to boundary
            let offset = xPosition - rect.left;
            if (offset < 0) offset = 0;
            if (offset > rect.width) offset = rect.width;

            // Calculate percentage
            const percentage = (offset / rect.width) * 100;
            setSliderPercent(percentage);
        };

        // Resize handler to adjust inner image width to match the wrapper
        const adjustInnerImageSize = () => {
            const width = sliderContainer.offsetWidth;
            if (afterImgScaled) {
                afterImgScaled.style.width = `${width}px`;
            }
        };
        
        window.addEventListener('resize', adjustInnerImageSize);
        adjustInnerImageSize();

        // Mouse Events
        sliderContainer.addEventListener('mousedown', (e) => {
            isSliding = true;
            updateSliderWidth(e.clientX);
        });

        window.addEventListener('mouseup', () => {
            isSliding = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isSliding) return;
            updateSliderWidth(e.clientX);
        });

        // Touch Events for Mobile
        sliderContainer.addEventListener('touchstart', (e) => {
            isSliding = true;
            updateSliderWidth(e.touches[0].clientX);
        });

        window.addEventListener('touchend', () => {
            isSliding = false;
        });

        window.addEventListener('touchmove', (e) => {
            if (!isSliding) return;
            updateSliderWidth(e.touches[0].clientX);
        });

        // AUTO-ANIMATE: Smoothly slide from left to right once when section is visible
        let sliderAutoAnimated = false;

        const autoAnimateSlider = () => {
            if (sliderAutoAnimated) return;
            sliderAutoAnimated = true;

            // Add smooth CSS transition for auto-animation
            afterImageDiv.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            sliderHandle.style.transition = 'left 1.2s cubic-bezier(0.4, 0, 0.2, 1)';

            // Start at 50% (default)
            setSliderPercent(50);

            // Step 1: Slide to 15% (show "before")
            setTimeout(() => {
                setSliderPercent(15);
            }, 400);

            // Step 2: Slide to 85% (show "after")
            setTimeout(() => {
                setSliderPercent(85);
            }, 1800);

            // Step 3: Return to 50% center
            setTimeout(() => {
                setSliderPercent(50);
            }, 3200);

            // Step 4: Remove transition so manual drag is instant
            setTimeout(() => {
                afterImageDiv.style.transition = 'none';
                sliderHandle.style.transition = 'none';
            }, 4500);
        };

        // Trigger auto-animation when the before-after section scrolls into view
        const beforeAfterSection = document.getElementById('before-after');
        if (beforeAfterSection) {
            const sliderObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !sliderAutoAnimated) {
                        autoAnimateSlider();
                        sliderObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.4 });
            sliderObserver.observe(beforeAfterSection);
        }
    }

    // 5. BEFORE/AFTER IMAGES SELECTOR SWAPPER
    const selectorButtons = document.querySelectorAll('.selector-btn');
    const beforeImgEl = document.querySelector('.img-before img');
    const afterImgEl = document.querySelector('.img-after img');

    const serviceImages = {
        driveway: 'assets/images/driveway_washing.png',
        gutter: 'assets/images/gutter_cleaning.png',
        couch: 'assets/images/couch_cleaning_video.png'
    };

    selectorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class
            selectorButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to current
            button.classList.add('active');

            const type = button.getAttribute('data-type');
            const newImgSrc = serviceImages[type];

            if (beforeImgEl && afterImgEl && newImgSrc) {
                // Fade effect on container
                sliderContainer.style.opacity = '0.3';
                setTimeout(() => {
                    beforeImgEl.src = newImgSrc;
                    afterImgEl.src = newImgSrc;
                    sliderContainer.style.opacity = '1';
                }, 200);
            }
        });
    });

    // 6. CONTACT FORM LEAD SUBMISSION
    const leadForm = document.getElementById('lead-form');
    const formStatus = document.getElementById('form-status');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('form-name').value;
            const phone = document.getElementById('form-phone').value;
            const email = document.getElementById('form-email').value;
            const service = document.getElementById('form-service').value;

            if (!name || !phone || !email || !service) {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Please fill out all required fields marked with *.';
                return;
            }

            // Set sending status
            formStatus.className = 'form-status';
            formStatus.textContent = 'Sending your request...';

            // Simulate server-side post delay
            setTimeout(() => {
                formStatus.className = 'form-status success';
                formStatus.innerHTML = 'Thank you, <strong>' + name + '</strong>! Your estimate request has been received. Our team will contact you shortly.';
                leadForm.reset();
            }, 1500);
        });
    }

    // 7. FAQ ACCORDION INTERACTIVE LOGIC
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const questionBtn = item.querySelector('.faq-question');
            if (questionBtn) {
                questionBtn.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other FAQs
                    faqItems.forEach(otherItem => {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) otherAnswer.style.maxHeight = null;
                    });
                    
                    // Toggle current FAQ
                    if (!isActive) {
                        item.classList.add('active');
                        const answer = item.querySelector('.faq-answer');
                        if (answer) {
                            answer.style.maxHeight = answer.scrollHeight + 'px';
                        }
                    }
                });
            }
        });
    }
});
