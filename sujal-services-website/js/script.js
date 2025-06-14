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

function sendToWhatsApp(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Format WhatsApp message
  const whatsappMessage = `New Inquiry from Sujal Services Website:
  
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Subject:* ${subject}
*Message:*
${message}`;

  // Encode for URL
  const encodedMessage = encodeURIComponent(whatsappMessage);
  
  // Your WhatsApp number (with country code)
  const whatsappNumber = '919322279696'; // Replace if different
  
  // Create WhatsApp link
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Open in new tab
  window.open(whatsappUrl, '_blank');
  
  // Optional: Reset form
  event.target.reset();
  
  // Optional: Show confirmation
  alert('You will be redirected to WhatsApp to send your inquiry.');
}