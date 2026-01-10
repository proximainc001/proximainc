// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Add stagger animation to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// WhatsApp Product Links
const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.product-card');
        const serviceName = card.getAttribute('data-service');
        const whatsappNumber = '8801839045505'; // Replace with actual number
        const message = `হ্যালো, আমি ${serviceName} কিনতে চাই`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
});

// Formspree Form Handling
const reviewForm = document.getElementById('reviewForm');
const formMessage = document.getElementById('formMessage');

if (reviewForm) {
    reviewForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const submitButton = this.querySelector('.submit-button');
        const originalButtonText = submitButton.innerHTML;

        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i data-lucide="loader-2"></i><span>পাঠানো হচ্ছে...</span>';
        lucide.createIcons();

        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                formMessage.className = 'form-message success';
                formMessage.innerHTML = '<i data-lucide="check-circle"></i> ধন্যবাদ! আপনার রিভিউ সফলভাবে জমা হয়েছে।';
                lucide.createIcons();
                reviewForm.reset();
            } else {
                // Error
                formMessage.className = 'form-message error';
                formMessage.innerHTML = '<i data-lucide="alert-circle"></i> কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।';
                lucide.createIcons();
            }
        } catch (error) {
            formMessage.className = 'form-message error';
            formMessage.innerHTML = '<i data-lucide="alert-circle"></i> নেটওয়ার্ক সমস্যা। অনুগ্রহ করে আবার চেষ্টা করুন।';
            lucide.createIcons();
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            lucide.createIcons();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
}

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Parallax effect for hero gradient
window.addEventListener('scroll', () => {
    const heroGradient = document.querySelector('.hero-gradient');
    if (heroGradient) {
        const scrolled = window.pageYOffset;
        heroGradient.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
