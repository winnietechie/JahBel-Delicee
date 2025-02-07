// Initialize Lucide icons
lucide.createIcons();

// Initialize slideshow
new Slideshow();

// Form submission
document.querySelector('.signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here
  console.log('Form submitted');
});
