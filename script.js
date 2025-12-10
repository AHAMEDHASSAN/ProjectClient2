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
        const city = document.getElementById('city')?.value.trim() || '';
        const areaToCover = document.getElementById('areaToCover')?.value.trim() || '';
        const propertyType = document.getElementById('propertyType')?.value || '';
        const flooringType = document.getElementById('flooringType')?.value || '';
        const whenToBegin = document.getElementById('whenToBegin')?.value || '';
        const budgetRange = document.getElementById('budgetRange')?.value || '';

        
        // Basic validation
      if (!firstName || !lastName || !phone || !email || !areaToCover || !city || !propertyType || !flooringType || !whenToBegin) {
    showNotification(translations[currentLang].notifRequired, 'error');
    return;
}
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification(translations[currentLang].notifEmail, 'error');
            return;
        }
        
        // Phone validation removed - accepts any format
        
        // Show loading state
        const submitButton = contactForm.querySelector('.form-submit');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${translations[currentLang].notifSending}`;
        submitButton.disabled = true;
        
        // Send data to Google Sheets
        const googleSheetsURL = 'https://script.google.com/macros/s/AKfycbxAdmp4lIZgvnlNOR5PoQbdiC8rvKTFDgn7mfXC2v_ZSLf50ARWW14zZa7I3C7MkPy1jQ/exec';
        
        // Prepare form data
      const formData = {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    phone,
    email,
    city: city || areaToCover, // يفضّل City لو موجود، وإلا يستخدم Area to Cover كـ fallback
    areaToCover: areaToCover,
    propertyType,
    flooringType,
    whenToBegin,
    budgetRange,
    message: ''
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
            // Redirect to thank you page
            window.location.href = 'thank-you.html';
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
const animateElements = document.querySelectorAll('.feature-card, .process-step, .testimonial-card, .faq-item, .review-card');
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

    // Video Autoplay/Pause Logic
    let isUserPaused = false;
    let isSystemPaused = false;

    // Detect manual pause vs system pause
    // We assume clicks on the video trigger pause/play.
    // However, the 'pause' event fires for both.
    // We can use the 'pointerdown' or 'click' event to set a flag, but native controls handle it internally.
    // A robust way: If 'pause' fires and we are currently visible, it's likely a user action.
    // If 'pause' fires and we are NOT visible (or the checkVideoVisibility function triggered it), it's a system action.
    
    // Better approach: We control the system pause.
    // If WE call pause(), we set isSystemPaused = true.
    // If the event fires and isSystemPaused is false, then it was the USER.

    heroVideo.addEventListener('pause', () => {
        if (!isSystemPaused) {
            isUserPaused = true;
            console.log("User manually paused the video.");
        }
        // Reset system pause flag for next time
        isSystemPaused = false;
    });

    heroVideo.addEventListener('play', () => {
        // If user plays it, we reset the user paused flag
        if (!isSystemPaused) { // If we didn't trigger this play (we usually don't trigger play via system except resume)
             isUserPaused = false;
             console.log("User resumed the video.");
        }
        isSystemPaused = false;
    });

    const heroSection = document.getElementById('hero');
    
    const checkVideoVisibility = () => {
        if (heroSection && heroVideo) {
            const rect = heroSection.getBoundingClientRect();
            const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
            
            if (!isVisible && !heroVideo.paused) {
                // System Pause
                isSystemPaused = true; 
                heroVideo.pause();
                console.log("System paused video (scroll).");
            } else if (isVisible && heroVideo.paused) {
                // System Resume - ONLY if user hasn't manually paused
                if (!isUserPaused) {
                    // We don't set isSystemPaused = true here because .play() triggers 'play' event
                    // We need to differentiate system resume vs user play. 
                    // But for 'play' event listener above, we just need to know if we should clear isUserPaused.
                    // If we resume it, isUserPaused should remain... false?
                    // Actually, if we resume it, it's NOT a user action, so we shouldn't accidentally set isUserPaused = false (it's already false).
                    // So we are good.
                    
                    const playPromise = heroVideo.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            console.log("Auto-resume failed:", error);
                        });
                    }
                }
            }
        }
    };

    // Check on scroll
    window.addEventListener('scroll', checkVideoVisibility);
    
    // Check initially
    checkVideoVisibility();
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

/* ==================== REVIEWS CAROUSEL (RESPONSIVE 1/2/3, PIXEL STEP) ==================== */
function initReviewsCarousel() {
    const track = document.querySelector('.reviews-track');
    const prevBtn = document.getElementById('reviewsPrev');
    const nextBtn = document.getElementById('reviewsNext');

    if (!track || !prevBtn || !nextBtn) return;

    const cards = Array.from(track.querySelectorAll('.carousel-review-card'));
    let visibleCards = 3;
    let currentIndex = 0;
    let maxIndex = 0;
    let cardWidth = 0;
    let cardGap = 0;

    function computeVisibleCards() {
        const w = window.innerWidth || document.documentElement.clientWidth;
        if (w <= 640) return 1;
        if (w <= 992) return 2;
        return 3;
    }

    function measure() {
        if (!cards.length) return;
        const rect = cards[0].getBoundingClientRect();
        cardWidth = rect.width;
        const styles = window.getComputedStyle(track);
        const gapVal = styles.columnGap || styles.gap || '0px';
        cardGap = parseFloat(gapVal) || 0;
    }

    function recalc() {
        visibleCards = computeVisibleCards();
        measure();
        maxIndex = Math.max(cards.length - visibleCards, 0);
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        updateCarousel();
    }

    function updateCarousel() {
        const step = cardWidth + cardGap; // slide by exactly one card
        const offset = step * currentIndex;
        track.style.transform = `translateX(-${offset}px)`;
    }

    function goNext() {
        if (cards.length <= visibleCards) return;
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
    }

    function goPrev() {
        if (cards.length <= visibleCards) return;
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateCarousel();
    }

    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);

    // Basic touch support on the whole reviews section
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        const swipeThreshold = 50;
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                goNext();
            } else {
                goPrev();
            }
        }
    }, { passive: true });

    // Recalc on resize to keep steps aligned with layout
    window.addEventListener('resize', recalc);

    // Initial setup
    recalc();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReviewsCarousel);
} else {
    initReviewsCarousel();
}
