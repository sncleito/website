document.addEventListener('DOMContentLoaded', () => {
    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    console.log(localStorage.getItem('theme'));
    let currentTheme = localStorage.getItem('theme') || 'dark';
  
    const setTheme = (isDark) => {
      currentTheme = isDark ? 'dark' : 'light';
      document.body.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
      initParticles();
    };
  
    themeToggle.addEventListener('click', () => {
      // Read the current theme from the DOM instead of relying on the closure variable.
      const current = document.body.getAttribute('data-theme') || 'dark';
      setTheme(current !== 'dark');
    });
  
    // Particles Initialization
    const initParticles = () => {
      // If a particles instance exists, destroy it properly.
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom.forEach(instance => {
          instance.pJS.fn.vendors.destroypJS();
        });
        // Clear the array to avoid residual references.
        window.pJSDom = [];
      }
  
      // Reinitialize particles with the new theme colors.
      particlesJS('particles-js', {
        particles: {
          number: {value: 60, density: { enable: true, value_area: 800 }},
          opacity: { value: 1, random: false },
          size: { value: 3, random: true },
          color: { value: currentTheme === 'dark' ? '#ffffff' : '#172a45' },
          line_linked: {
            color: currentTheme === 'dark' ? '#3498db' : '#04d9ff',
            enable: true,
            distance: 150,
            opacity: 1,
            width: 2,
            random: true
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            out_mode: "out"
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 1, quantity: 1 }
          }
        },
        retina_detect: true
      });
    };
  
    // Initialize the theme and particles on page load.
    setTheme(currentTheme === 'dark');
  });
