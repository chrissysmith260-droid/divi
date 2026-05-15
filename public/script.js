// script.js
function toggleMusic() {
    try {
        const audio = document.getElementById('background-music');
        if (!audio) {
            console.warn('Audio element not found');
            return;
        }
        if (audio.paused) {
            audio.play().catch(err => console.log('Audio play error:', err));
        } else {
            audio.pause();
        }
    } catch (error) {
        console.error('Error toggling music:', error);
    }
}

// Initialize flame animations on navigation links
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Get all navigation links and buttons
        const navItems = document.querySelectorAll('nav a, nav button');
        
        navItems.forEach(item => {
            const href = item.getAttribute('href') || item.getAttribute('onclick') || '';
            const text = item.textContent.toLowerCase().trim();
            
            // Remove existing flame classes
            item.classList.remove('nav-flame', 'nav-green-flame', 'nav-orange-fire');
            
            // Add appropriate flame animation based on page
            if (text.includes('sermon generator')) {
                // Orange real fire effect
                item.classList.add('nav-orange-fire');
            } else if (text.includes('login') || text.includes('register')) {
                // Green flame for auth pages
                item.classList.add('nav-green-flame');
            } else if (text.includes('logout')) {
                // Logout also gets blue flame
                item.classList.add('nav-flame');
            } else if (href !== '' && !text.includes('logout')) {
                // Blue flame for all other regular pages
                item.classList.add('nav-flame');
            }
        });

        // Add click sound to buttons (placeholder - would need actual sound files)
        const buttons = document.querySelectorAll('button:not([onclick="toggleMusic()"])');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                console.log('Button clicked!');
            });
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const animateElements = document.querySelectorAll('.tarot-card, .sermon-list li, .note-list li');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Add weathered parchment effect to main content
        const main = document.querySelector('main');
        if (main) {
            // Add subtle animation to suggest age
            main.style.animation = 'settleIn 2s ease-out';
        }
    } catch (error) {
        console.error('Error in DOMContentLoaded handler:', error);
    }
});

// Optional: Add keyboard shortcuts for premium features
document.addEventListener('keydown', function(event) {
    try {
        // Press 'S' to focus on sermon generator link
        if (event.key === 's' || event.key === 'S') {
            const sermonLink = Array.from(document.querySelectorAll('nav a')).find(a => 
                a.textContent.toLowerCase().includes('sermon')
            );
            if (sermonLink) {
                sermonLink.focus();
                sermonLink.click();
            }
        }
    } catch (error) {
        console.error('Error in keyboard handler:', error);
    }
});