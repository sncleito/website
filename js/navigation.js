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
          }, 350); // matches our animation duration
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
  // Add event listeners for research topics
  const topicHeaders = document.querySelectorAll('.topic-header');
  topicHeaders.forEach(header => {
    header.addEventListener('click', () => {
      // Get the content area for the clicked topic
      const content = header.nextElementSibling;

      // Close all other content areas and remove 'active' class from headers
      topicHeaders.forEach(otherHeader => {
        const otherContent = otherHeader.nextElementSibling;
        if (otherHeader !== header) {
          otherContent.classList.remove('active');
          otherHeader.classList.remove('active');
        }
      });

      setTimeout(() => {
        // Toggle the 'active' class for the clicked topic
        content.classList.toggle('active');
        header.classList.toggle('active');
      }, 500); // matches our animation duration
    });
  });

  // Add event listeners for carousel
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  let currentIndex = 0;
  const totalImages = images.length;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  });


});
  