// ==================== BUTTON CLICK EVENT ====================
const greetBtn = document.getElementById('greetBtn');
greetBtn.addEventListener('click', () => {
  alert('Hello! You clicked the button.');
});

// ==================== LIGHT/DARK MODE TOGGLE ====================
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ==================== COUNTER ====================
let count = 0;
const counterBtn = document.getElementById('counterBtn');
counterBtn.addEventListener('click', () => {
  count++;
  counterBtn.textContent = `Clicks: ${count}`;
});

// ==================== COLLAPSIBLE FAQ ====================
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  const question = faq.querySelector('h3');
  const answer = faq.querySelector('.answer');

  question.addEventListener('click', () => {
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  });
});

// ==================== FORM VALIDATION ====================
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent actual submission

  let messages = [];

  // Name validation
  if (nameInput.value.trim() === '') {
    messages.push('Name is required');
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    messages.push('Enter a valid email');
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    messages.push('Password must be at least 6 characters');
  }

  if (messages.length > 0) {
    formMsg.innerHTML = messages.join('<br>');
    formMsg.style.color = 'red';
  } else {
    formMsg.innerHTML = 'Form submitted successfully!';
    formMsg.style.color = 'green';
    form.reset();
  }
});
