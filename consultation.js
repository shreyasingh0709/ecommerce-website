const form = document.getElementById('appointmentForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const date = document.getElementById('date').value;
  const treatment = document.getElementById('treatment').value;

  const message = `Hello, I would like to book a hair treatment appointment.%0A%0AName: ${encodeURIComponent(name)}%0ADate: ${encodeURIComponent(date)}%0ATreatment: ${encodeURIComponent(treatment)}%0A%0AIs this slot available?`;

  // ✅ Correct WhatsApp number format: country code + number (no + or spaces)
  const phoneNumber = "234567890125"; 

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, '_blank');
});