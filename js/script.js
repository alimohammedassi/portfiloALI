// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initNavigation();
  initScrollEffects();
  initSkillBars();
  initProjectFilters();
  initContactForm();
  initBackToTop();
  initAnimations();
});

// Navigation functionality
function initNavigation() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.getElementById("navbar");

  // Mobile menu toggle
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Update active navigation link based on scroll position
  window.addEventListener("scroll", function () {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });

    // Add scrolled class to navbar
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Scroll effects and animations
function initScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");

        // Trigger skill bar animations when skills section is visible
        if (entry.target.id === "skills") {
          animateSkillBars();
        }
      }
    });
  }, observerOptions);

  // Observe sections for animations
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
}

// Skill bars animation
function initSkillBars() {
  // This will be triggered by scroll observer
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach((bar) => {
    const level = bar.getAttribute("data-level");
    setTimeout(() => {
      bar.style.width = level + "%";
    }, 200);
  });
}

// Project filtering
function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter projects
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 100);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.8)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  const formInputs = contactForm.querySelectorAll("input, textarea");

  // Form validation
  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });

    input.addEventListener("input", function () {
      if (this.classList.contains("error")) {
        validateField(this);
      }
    });
  });

  // Form submission
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    formInputs.forEach((input) => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Simulate form submission
      showFormMessage(
        "Thank you! Your message has been sent successfully.",
        "success"
      );
      contactForm.reset();
    } else {
      showFormMessage("Please fill in all required fields correctly.", "error");
    }
  });

  // Download CV functionality - CV is already linked in HTML with download attribute
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;

  // Remove existing error styling
  field.classList.remove("error");
  removeErrorMessage(field);

  // Required field validation
  if (value === "") {
    showFieldError(field, "This field is required");
    isValid = false;
  }
  // Email validation
  else if (field.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, "Please enter a valid email address");
      isValid = false;
    }
  }
  // Message length validation
  else if (field.name === "message" && value.length < 10) {
    showFieldError(field, "Message must be at least 10 characters long");
    isValid = false;
  }

  return isValid;
}

function showFieldError(field, message) {
  field.classList.add("error");

  const errorElement = document.createElement("span");
  errorElement.className = "error-message";
  errorElement.textContent = message;

  field.parentNode.appendChild(errorElement);
}

function removeErrorMessage(field) {
  const errorMessage = field.parentNode.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
}

function showFormMessage(message, type) {
  const messageElement = document.createElement("div");
  messageElement.className = `form-message ${type}`;
  messageElement.textContent = message;

  const form = document.getElementById("contact-form");
  form.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}

// Back to top functionality
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Initialize animations
function initAnimations() {
  // Add CSS for form validation errors
  const style = document.createElement("style");
  style.textContent = `
        .form-group input.error,
        .form-group textarea.error {
            border-color: #f44336;
            box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.1);
        }
        
        .error-message {
            color: #f44336;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: block;
        }
        
        .form-message {
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
            font-weight: 500;
        }
        
        .form-message.success {
            background-color: #e8f5e8;
            color: #2e7d32;
            border: 1px solid #4caf50;
        }
        
        .form-message.error {
            background-color: #ffebee;
            color: #c62828;
            border: 1px solid #f44336;
        }
        
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: var(--primary-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-hover);
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        @media (max-width: 768px) {
            .notification {
                right: 15px;
                left: 15px;
                transform: translateY(-100%);
            }
            
            .notification.show {
                transform: translateY(0);
            }
        }
    `;
  document.head.appendChild(style);
}

// Utility functions
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Smooth scroll for hero scroll button
document.addEventListener("DOMContentLoaded", function () {
  const scrollDownBtn = document.querySelector(".scroll-down");
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector("#about");
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  }
});

// Parallax effect for hero section (optional)
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero && scrolled < hero.offsetHeight) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Typing effect for hero title (optional enhancement)
function initTypingEffect() {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    setTimeout(typeWriter, 1000);
  }
}

// Initialize typing effect on page load
// Uncomment the line below to enable typing effect
// initTypingEffect();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events for better performance
const debouncedScrollHandler = debounce(function () {
  // Scroll-based animations can be added here
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

// Preload images for better performance
function preloadImages() {
  const images = [
    "images/flutter-logo.png",
    "images/ux-icons.jpg",
    "images/mobile-dev.jpg",
  ];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Initialize image preloading
preloadImages();
