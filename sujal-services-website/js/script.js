// WhatsApp Button Click Event
document.querySelector('.whatsapp-float').addEventListener('click', function() {
    alert("You'll be redirected to WhatsApp. Please send your inquiry!");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});