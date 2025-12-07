/* ==================== NAVIGATION MENU ==================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        if (navToggle) {
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

/* ==================== ACTIVE LINK ON SCROLL ==================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ==================== HEADER SHADOW ON SCROLL ==================== */
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/* ==================== FAQ ACCORDION ==================== */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

/* ==================== DARK LIGHT THEME ==================== */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun'; // Icon to show when in dark mode (to switch to light)

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.querySelector('i').classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

// Validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    // Adjust icon
    if (selectedTheme === 'dark') {
        themeButton.querySelector('i').classList.add(iconTheme);
        themeButton.querySelector('i').classList.remove('fa-moon');
    } else {
        themeButton.querySelector('i').classList.remove(iconTheme);
        themeButton.querySelector('i').classList.add('fa-moon');
    }
}

// Activate / deactivate the theme manually with the button
if (themeButton) {
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme);
        const icon = themeButton.querySelector('i');
        icon.classList.toggle(iconTheme);
        icon.classList.toggle('fa-moon');
        
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });
}

/* ==================== FORM VALIDATION & SUBMISSION ==================== */
let currentLang = 'en';
const translations = {
    en: {
        notifRequired: 'Please fill in all required fields.',
        notifEmail: 'Please enter a valid email address.',
        notifPhone: 'Please enter a valid phone number (at least 10 digits).',
        notifSending: 'Sending...'
    }
};

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values with null checks
        const firstName = document.getElementById('firstName')?.value.trim() || '';
        const lastName = document.getElementById('lastName')?.value.trim() || '';
        const phone = document.getElementById('phone')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const areaToCover = document.getElementById('areaToCover')?.value.trim() || '';
        const propertyType = document.getElementById('propertyType')?.value || '';
        const flooringType = document.getElementById('flooringType')?.value || '';
        const whenToBegin = document.getElementById('whenToBegin')?.value || '';
        const budgetRange = document.getElementById('budgetRange')?.value || '';

        
        // Basic validation
        if (!firstName || !lastName || !phone || !email || !areaToCover || !propertyType || !flooringType || !whenToBegin) {
            showNotification(translations[currentLang].notifRequired, 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification(translations[currentLang].notifEmail, 'error');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[0-9]{10,}$/;
        if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
            showNotification(translations[currentLang].notifPhone, 'error');
            return;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('.form-submit');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${translations[currentLang].notifSending}`;
        submitButton.disabled = true;
        
        // Send data to Google Sheets
        const googleSheetsURL = 'https://script.google.com/macros/s/AKfycbyGieD6rf1DQp6Xoq6GYeQT4hxyDJWAxbKU0omH5b0GXyKsnmDGxmT5JR96_PYZ5kTz/exec';
        
        // Prepare form data
        const formData = {
            firstName: firstName,
            lastName: lastName,
            fullName: `${firstName} ${lastName}`,
            phone: phone,
            email: email,
            city: areaToCover, // Mapping "Area to Cover" to "city" column as requested
            propertyType: propertyType,
            flooringType: flooringType,
            whenToBegin: whenToBegin,
            budgetRange: budgetRange,
            message: '' // Message field removed from UI, sending empty string to maintain backend structure
        };
        
        // Send data to Google Sheets
        fetch(googleSheetsURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(() => {
            // Show success notification
            showNotification('✓ Form submitted successfully! Data saved to Google Sheets.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('Error submitting form. Please try again.', 'error');
            
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        });
    });
}

/* ==================== NOTIFICATION SYSTEM ==================== */
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#EF4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-content i {
        font-size: 1.25rem;
    }
    
    .notification-content span {
        font-size: 0.9375rem;
        font-weight: 500;
    }
`;
document.head.appendChild(style);

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== INPUT FOCUS EFFECTS ==================== */
const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    // Add focus class to parent
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
    
    // Add animation on input
    input.addEventListener('input', () => {
        if (input.value) {
            input.parentElement.classList.add('has-value');
        } else {
            input.parentElement.classList.remove('has-value');
        }
    });
});

/* ==================== SCROLL ANIMATIONS ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -35px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const animateElements = document.querySelectorAll('.feature-card, .process-step, .testimonial-card, .faq-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

/* ==================== HERO VIDEO AUTOPLAY WITH SOUND ==================== */
const heroVideo = document.getElementById('heroVideo');

if (heroVideo) {
    // Force MUTED autoplay - Critical for browser support
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;
    
    // Attempt play immediately
    const playPromise = heroVideo.play();
    
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            console.log("Autoplay started successfully");
        })
        .catch(error => {
            console.log("Autoplay failed initially, trying again muted:", error);
            heroVideo.muted = true;
            heroVideo.play();
        });
    }

    // Interaction to enable sound (optional, keeps video playing)
    const enableSound = () => {
        heroVideo.muted = false;
        // Don't force volume, let user decide or default 
    };
    
    document.addEventListener('click', enableSound, { once: true });
    document.addEventListener('touchstart', enableSound, { once: true });

    // Pause video when scrolling past the hero section
    const heroSection = document.getElementById('hero');
    
    const checkVideoVisibility = () => {
        if (heroSection && heroVideo) {
            const rect = heroSection.getBoundingClientRect();
            const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
            
            if (!isVisible && !heroVideo.paused) {
                heroVideo.pause();
            } else if (isVisible && heroVideo.paused) {
                heroVideo.play().catch(() => {
                    // Silently handle play errors
                });
            }
        }
    };

    // Check on scroll
    window.addEventListener('scroll', checkVideoVisibility);
    
    // Check initially
    // Check initially
    checkVideoVisibility();
    
    // Poster Overlay Logic
    const videoPoster = document.getElementById('videoPoster');
    if (videoPoster) {
        // Function to fade out poster
        const fadeOutPoster = () => {
            videoPoster.classList.add('fade-out');
            // Remove from DOM after transition to avoid z-index issues
            setTimeout(() => {
                videoPoster.style.display = 'none';
            }, 1000);
        };
        
        // If video is already playing, fade out immediately
        if (!heroVideo.paused && heroVideo.currentTime > 0.1) {
            fadeOutPoster();
        } else {
            // Wait for play event
            heroVideo.addEventListener('play', () => {
                // Small delay to ensure first frame is rendered
                setTimeout(fadeOutPoster, 200); 
            });
            
            // Fallback: fade out after 3 seconds anyway if autoplay fails or delays
            setTimeout(fadeOutPoster, 3000);
        }
    }
}

/* ==================== PERFORMANCE OPTIMIZATION ==================== */
// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

/* ==================== CONSOLE MESSAGE ==================== */
console.log('%c🎨 Premium Landing Page', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%cDesigned with ❤️ for excellence', 'color: #6B6B7E; font-size: 14px;');
