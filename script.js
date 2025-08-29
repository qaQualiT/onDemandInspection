// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  lastScrollY = window.scrollY;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Counter Animation
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      
      // Animate counters when stats section is visible
      if (entry.target.classList.contains('stats')) {
        const counters = entry.target.querySelectorAll('.stat-number');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-count'));
          animateCounter(counter, target);
        });
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.stats, .about, .core-values, .services, .industries, .process');
  animatedElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
});

// Service Modal Functionality
const modal = document.getElementById('modalOverlay');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');

const serviceDetails = {
  inspection: {
    title: 'Quality Inspection Services',
    content: `
      <div class="service-detail">
        <h3>Comprehensive Quality Inspection</h3>
        <p>Our quality inspection services ensure your products meet the highest standards before they reach the market. We provide thorough, systematic evaluation of products, processes, and systems.</p>
        
        <h4>What We Inspect:</h4>
        <ul>
          <li>Product specifications and functionality</li>
          <li>Manufacturing processes and procedures</li>
          <li>Safety compliance and regulatory requirements</li>
          <li>Material quality and durability</li>
          <li>Packaging and labeling accuracy</li>
        </ul>
        
        <h4>Our Approach:</h4>
        <ul>
          <li>Risk-based inspection methodology</li>
          <li>Advanced testing equipment and techniques</li>
          <li>Real-time reporting and documentation</li>
          <li>Corrective action recommendations</li>
        </ul>
        
        <div class="cta-section">
          <p><strong>Ready to ensure your products meet quality standards?</strong></p>
          <a href="#contact" class="btn btn-primary">Request Inspection</a>
        </div>
      </div>
    `
  },
  audit: {
    title: 'Supplier Audit Services',
    content: `
      <div class="service-detail">
        <h3>Comprehensive Supplier Audits</h3>
        <p>Evaluate and verify your suppliers' capabilities, quality systems, and compliance with industry standards through our thorough audit process.</p>
        
        <h4>Audit Areas:</h4>
        <ul>
          <li>Quality management systems (ISO 9001, etc.)</li>
          <li>Production capabilities and capacity</li>
          <li>Environmental and safety compliance</li>
          <li>Financial stability and business continuity</li>
          <li>Supply chain management</li>
        </ul>
        
        <h4>Deliverables:</h4>
        <ul>
          <li>Detailed audit reports with findings</li>
          <li>Risk assessment and mitigation strategies</li>
          <li>Supplier performance scorecards</li>
          <li>Improvement recommendations</li>
        </ul>
        
        <div class="cta-section">
          <p><strong>Need to verify supplier capabilities?</strong></p>
          <a href="#contact" class="btn btn-primary">Schedule Audit</a>
        </div>
      </div>
    `
  },
  project: {
    title: 'Project Management Services',
    content: `
      <div class="service-detail">
        <h3>End-to-End Project Management</h3>
        <p>Comprehensive project oversight ensuring quality deliverables, timeline adherence, and stakeholder satisfaction throughout the project lifecycle.</p>
        
        <h4>Project Phases:</h4>
        <ul>
          <li>Project initiation and planning</li>
          <li>Resource allocation and scheduling</li>
          <li>Quality milestone monitoring</li>
          <li>Risk management and mitigation</li>
          <li>Progress tracking and reporting</li>
        </ul>
        
        <h4>Key Benefits:</h4>
        <ul>
          <li>Reduced project risks and delays</li>
          <li>Improved quality outcomes</li>
          <li>Enhanced stakeholder communication</li>
          <li>Cost optimization and control</li>
        </ul>
        
        <div class="cta-section">
          <p><strong>Need expert project management?</strong></p>
          <a href="#contact" class="btn btn-primary">Discuss Project</a>
        </div>
      </div>
    `
  },
  engineering: {
    title: 'Quality Engineering Services',
    content: `
      <div class="service-detail">
        <h3>Advanced Quality Engineering</h3>
        <p>Leverage our engineering expertise to optimize quality processes, implement continuous improvement, and achieve operational excellence.</p>
        
        <h4>Engineering Solutions:</h4>
        <ul>
          <li>Quality system design and optimization</li>
          <li>Process improvement and automation</li>
          <li>Statistical process control implementation</li>
          <li>Failure analysis and root cause investigation</li>
          <li>Quality training and capability building</li>
        </ul>
        
        <h4>Technologies We Use:</h4>
        <ul>
          <li>Six Sigma and Lean methodologies</li>
          <li>Advanced statistical analysis tools</li>
          <li>Digital quality management systems</li>
          <li>IoT and sensor-based monitoring</li>
        </ul>
        
        <div class="cta-section">
          <p><strong>Ready to optimize your quality processes?</strong></p>
          <a href="#contact" class="btn btn-primary">Get Consultation</a>
        </div>
      </div>
    `
  },
  expediting: {
    title: 'Expediting Services',
    content: `
      <div class="service-detail">
        <h3>Professional Expediting Services</h3>
        <p>Proactive monitoring and coordination to ensure timely delivery while maintaining quality standards throughout the supply chain.</p>
        
        <h4>Expediting Activities:</h4>
        <ul>
          <li>Production schedule monitoring</li>
          <li>Vendor performance tracking</li>
          <li>Quality milestone verification</li>
          <li>Delivery coordination and logistics</li>
          <li>Issue escalation and resolution</li>
        </ul>
        
        <h4>Key Advantages:</h4>
        <ul>
          <li>Reduced delivery delays and risks</li>
          <li>Improved supplier accountability</li>
          <li>Enhanced project visibility</li>
          <li>Proactive issue identification</li>
        </ul>
        
        <div class="cta-section">
          <p><strong>Need to accelerate your project timeline?</strong></p>
          <a href="#contact" class="btn btn-primary">Start Expediting</a>
        </div>
      </div>
    `
  },
  certification: {
    title: 'Certification Services',
    content: `
      <div class="service-detail">
        <h3>Professional Certification Services</h3>
        <p>Comprehensive certification and compliance verification for equipment, processes, and systems to meet industry standards and regulatory requirements.</p>
        
        <h4>Certification Types:</h4>
        <ul>
          <li>Equipment and machinery certification</li>
          <li>Process validation and verification</li>
          <li>Quality system certification support</li>
          <li>Regulatory compliance testing</li>
          <li>Safety and environmental certifications</li>
        </ul>
        
        <h4>Standards We Work With:</h4>
        <ul>
          <li>ISO 9001, 14001, 45001</li>
          <li>API, ASME, ASTM standards</li>
          <li>Industry-specific regulations</li>
          <li>International safety standards</li>
        </ul>
        
        <div class="cta-section">
          <p><strong>Need certification support?</strong></p>
          <a href="#contact" class="btn btn-primary">Get Certified</a>
        </div>
      </div>
    `
  }
};

// Service modal handlers
document.querySelectorAll('.explore-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const service = e.target.getAttribute('data-service');
    const serviceData = serviceDetails[service];
    
    if (serviceData) {
      modalBody.innerHTML = serviceData.content;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Close modal handlers
closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Form validation
function validateForm(form) {
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = 'var(--safety-orange)';
      isValid = false;
    } else {
      field.style.borderColor = 'var(--gray-200)';
    }
  });
  
  return isValid;
}

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Enhanced form submission
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (!validateForm(this)) {
    Swal.fire({
      title: 'Please Complete Required Fields',
      text: 'All required fields must be filled out before submitting.',
      icon: 'warning',
      confirmButtonColor: 'var(--safety-orange)'
    });
    return;
  }
  
  const email = document.getElementById('email').value;
  if (!validateEmail(email)) {
    Swal.fire({
      title: 'Invalid Email Address',
      text: 'Please enter a valid email address.',
      icon: 'error',
      confirmButtonColor: 'var(--safety-orange)'
    });
    return;
  }
  
  // Show loading state
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    Swal.fire({
      title: 'Request Submitted Successfully!',
      text: 'Thank you for your inquiry. Our team will contact you within 24 hours to discuss your inspection requirements.',
      icon: 'success',
      confirmButtonColor: 'var(--safety-orange)',
      confirmButtonText: 'Great!'
    }).then(() => {
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    });
  }, 2000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-background');
  
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Loading animation for page
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Accessibility improvements
document.addEventListener('keydown', (e) => {
  // Skip to main content
  if (e.key === 'Tab' && e.target === document.body) {
    const mainContent = document.querySelector('main') || document.querySelector('.hero');
    if (mainContent) {
      mainContent.focus();
    }
  }
});

// Focus management for modal
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.style.display = 'none';
    console.warn('Failed to load image:', this.src);
  });
});

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }, 0);
  });
}