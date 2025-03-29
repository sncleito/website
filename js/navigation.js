document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
  
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        // If the link’s href is not '#' (i.e. it’s a real URL), let the default navigation occur.
        if (item.href && item.getAttribute('href') !== '#') return;
        e.preventDefault();
  
        // Remove active state and trigger fade-out animation on current sections.
        sections.forEach(section => {
          if(section.classList.contains('active')) {
            section.classList.add('fade-out');
            setTimeout(() => {
              section.classList.remove('active', 'fade-out');
            }, 400); // matches our animation duration
          }
        });
  
        // Set active nav item.
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
  
        // Activate target section with fade-in effect.
        const target = document.getElementById(item.dataset.target);
        if(target) {
          target.classList.add('active');
        }
      });
    });
  
    // On page load, check if a query parameter "tab" exists, then simulate a click.
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if(tab) {
      const targetNav = document.querySelector(`.nav-item[data-target="${tab}"]`);
      if(targetNav) {
        targetNav.click();
      }
    } else {
      // If no query, use the default active nav item.
      const defaultNavItem = document.querySelector('.nav-item.active');
      if(defaultNavItem) {
        defaultNavItem.click();
      }
    }
  });
  