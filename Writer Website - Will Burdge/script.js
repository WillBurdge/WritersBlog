  // creates a smooth scroll
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const href = link.getAttribute('href');
      const offsetTop = document.querySelector(href).offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });

  // this will show a message when user submits
  const form = document.querySelector('form');
  const submitButton = form.querySelector('button[type="submit"]');

  submitButton.addEventListener('click', e => {
    e.preventDefault();

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
      alert('Please fill in all fields before submitting the form.');
    } else {
      alert('Thank you for your message! We will get back to you as soon as possible.');
      form.reset();
    }
  });

