document.addEventListener('DOMContentLoaded', () => {
  // WhatsApp floating alert
  document.querySelector('.whatsapp-float')?.addEventListener('click', () => {
    alert("You'll be redirected to WhatsApp. Please send your inquiry!");
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // WhatsApp Form Submission
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const whatsappMessage = `New Inquiry from Sujal Services Website:

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Subject:* ${subject}
*Message:* ${message}`;

    const url = `https://wa.me/919322279696?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
    form.reset();
    alert('You will be redirected to WhatsApp.');

    // Delay loader to let WhatsApp redirect happen
    setTimeout(() => {
      loadingOverlay.classList.add('active');
    }, 100);
  });

  // Loader on page load
  const loadingOverlay = document.getElementById('loadingOverlay');
  const MIN_DISPLAY_TIME = 2500;
  window.addEventListener('load', () => {
    const elapsed = Date.now() - performance.timing.navigationStart;
    const delay = MIN_DISPLAY_TIME - elapsed;
    setTimeout(() => loadingOverlay.classList.remove('active'), delay > 0 ? delay : 0);
  });

  // Universal loader trigger (excluding form & WhatsApp links)
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('https://wa.me') ||
        link.closest('form') ||
        link.classList.contains('no-loader')
      ) return;
      loadingOverlay.classList.add('active');
    });
  });
});

// Category Filter Functionality
document.querySelectorAll('.category-filter').forEach(button => {
  button.addEventListener('click', function() {
    // Update active button
    document.querySelectorAll('.category-filter').forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
    
    const category = this.dataset.category;
    
    // Show/hide categories
    if (category === 'all') {
      document.querySelectorAll('.category-section').forEach(section => {
        section.classList.add('active');
      });
      document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = 'block';
      });
    } else {
      document.querySelectorAll('.category-section').forEach(section => {
        section.classList.remove('active');
      });
      document.querySelector(`#${category}-bearings`).classList.add('active');
      
      document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = 'none';
      });
      document.querySelectorAll(`.product-card[data-category="${category}"]`).forEach(card => {
        card.style.display = 'block';
      });
    }
  });
});

// Inquiry Button Functionality
document.querySelectorAll('.inquire-btn').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.dataset.product;
    const message = `I'm interested in ${productName}. Please share pricing and availability.`;
    window.open(`https://wa.me/919322279696?text=${encodeURIComponent(message)}`, '_blank');
  });
});
