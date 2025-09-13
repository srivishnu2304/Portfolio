const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    url: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tags: ["Vue.js", "Socket.io", "Express", "PostgreSQL"],
    url: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    featured: false
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tags: ["JavaScript", "API", "Chart.js", "CSS3"],
    url: "#",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations, dark/light mode, and contact form integration.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    url: "#",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    featured: true
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization, scheduling, and performance metrics.",
    tags: ["React", "D3.js", "Node.js", "MySQL"],
    url: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    featured: false
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    url: "#",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    featured: true
  }
];

function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container) return;
  const fragment = document.createDocumentFragment();
  
  projects.forEach((proj, index) => {
    const card = document.createElement("article");
    card.className = `card ${proj.featured ? 'featured' : ''}`;
    card.style.animationDelay = `${index * 0.1}s`;

    // Project image
    const imageContainer = document.createElement("div");
    imageContainer.className = "card-image";
    const img = document.createElement("img");
    img.src = proj.image;
    img.alt = proj.title;
    img.loading = "lazy";
    imageContainer.appendChild(img);

    // Featured badge
    if (proj.featured) {
      const badge = document.createElement("div");
      badge.className = "featured-badge";
      badge.textContent = "Featured";
      imageContainer.appendChild(badge);
    }

    // Card content
    const content = document.createElement("div");
    content.className = "card-content";

    const title = document.createElement("h3");
    const link = document.createElement("a");
    link.href = proj.url;
    link.textContent = proj.title;
    link.rel = "noopener noreferrer";
    title.appendChild(link);

    const desc = document.createElement("p");
    desc.textContent = proj.description;

    const tags = document.createElement("div");
    tags.className = "tags";
    proj.tags.forEach((t) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = t;
      tags.appendChild(tag);
    });

    // Action buttons
    const actions = document.createElement("div");
    actions.className = "card-actions";
    
    const liveBtn = document.createElement("a");
    liveBtn.href = proj.url;
    liveBtn.className = "btn btn-small";
    liveBtn.innerHTML = "<span>Live Demo</span>";
    liveBtn.rel = "noopener noreferrer";
    
    const codeBtn = document.createElement("a");
    codeBtn.href = proj.url;
    codeBtn.className = "btn btn-small btn-outline";
    codeBtn.innerHTML = "<span>Code</span>";
    codeBtn.rel = "noopener noreferrer";

    actions.appendChild(liveBtn);
    actions.appendChild(codeBtn);

    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(tags);
    content.appendChild(actions);

    card.appendChild(imageContainer);
    card.appendChild(content);
    fragment.appendChild(card);
  });
  
  container.appendChild(fragment);
}

function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  renderProjects();
  initThemeToggle();
  initScrollEffect();
  initResumeDownload();
  initTypingAnimation();

  // Enhanced contact form validation and submit handler
  const form = document.getElementById("contactForm");
  if (form) {
    // Initialize form validation
    initFormValidation();
    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Clear previous errors
      clearAllErrors();
      
      // Get form values
      const name = /** @type {HTMLInputElement} */(document.getElementById("name")).value.trim();
      const email = /** @type {HTMLInputElement} */(document.getElementById("email")).value.trim();
      const subject = /** @type {HTMLInputElement} */(document.getElementById("subject")).value.trim();
      const message = /** @type {HTMLTextAreaElement} */(document.getElementById("message")).value.trim();
      
      let isValid = true;
      
      // Validate name
      if (!name) {
        showFieldError("name", "Name is required");
        isValid = false;
      } else if (name.length < 2) {
        showFieldError("name", "Name must be at least 2 characters");
        isValid = false;
      }
      
      // Validate email
      if (!email) {
        showFieldError("email", "Email is required");
        isValid = false;
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          showFieldError("email", "Please enter a valid email address");
          isValid = false;
        }
      }
      
      // Validate subject
      if (!subject) {
        showFieldError("subject", "Subject is required");
        isValid = false;
      } else if (subject.length < 5) {
        showFieldError("subject", "Subject must be at least 5 characters");
        isValid = false;
      }
      
      // Validate message
      if (!message) {
        showFieldError("message", "Message is required");
        isValid = false;
      } else if (message.length < 10) {
        showFieldError("message", "Message must be at least 10 characters");
        isValid = false;
      }
      
      // If validation passes, show success message
      if (isValid) {
        showSuccessMessage(name, subject);
        form.reset();
        clearAllErrors();
      }
    });
  }
});

function initFormValidation() {
  // Add real-time validation on input
  const fields = ['name', 'email', 'subject', 'message'];
  
  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.addEventListener('blur', () => {
        validateField(fieldId);
      });
      
      field.addEventListener('input', () => {
        // Clear error on input
        clearFieldError(fieldId);
      });
    }
  });
}

function validateField(fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = '';
  
  switch (fieldId) {
    case 'name':
      if (!value) {
        errorMessage = 'Name is required';
        isValid = false;
      } else if (value.length < 2) {
        errorMessage = 'Name must be at least 2 characters';
        isValid = false;
      }
      break;
      
    case 'email':
      if (!value) {
        errorMessage = 'Email is required';
        isValid = false;
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMessage = 'Please enter a valid email address';
          isValid = false;
        }
      }
      break;
      
    case 'subject':
      if (!value) {
        errorMessage = 'Subject is required';
        isValid = false;
      } else if (value.length < 5) {
        errorMessage = 'Subject must be at least 5 characters';
        isValid = false;
      }
      break;
      
    case 'message':
      if (!value) {
        errorMessage = 'Message is required';
        isValid = false;
      } else if (value.length < 10) {
        errorMessage = 'Message must be at least 10 characters';
        isValid = false;
      }
      break;
  }
  
  if (!isValid) {
    showFieldError(fieldId, errorMessage);
  } else {
    clearFieldError(fieldId);
  }
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  
  // Remove existing error
  clearFieldError(fieldId);
  
  // Add error class to field
  field.classList.add('error');
  
  // Create error message element
  const errorElement = document.createElement('div');
  errorElement.className = 'field-error';
  errorElement.textContent = message;
  
  // Insert error message after the field
  field.parentNode.insertBefore(errorElement, field.nextSibling);
}

function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  
  // Remove error class
  field.classList.remove('error');
  
  // Remove error message
  const errorElement = field.parentNode.querySelector('.field-error');
  if (errorElement) {
    errorElement.remove();
  }
}

function clearAllErrors() {
  const fields = ['name', 'email', 'subject', 'message'];
  fields.forEach(fieldId => {
    clearFieldError(fieldId);
  });
}

function showSuccessMessage(name, subject) {
  // Create success modal
  const modal = document.createElement('div');
  modal.className = 'success-modal';
  modal.innerHTML = `
    <div class="success-content">
      <div class="success-icon">✓</div>
      <h3>Thank you for your message!</h3>
      <p>Hi ${name}, I've received your message about "${subject}" and will get back to you soon!</p>
      <button class="success-btn" onclick="this.closest('.success-modal').remove()">Close</button>
    </div>
  `;
  
  // Add to body
  document.body.appendChild(modal);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (modal.parentNode) {
      modal.remove();
    }
  }, 5000);
}

function initResumeDownload() {
  const downloadBtn = document.getElementById("downloadResume");
  const formatSelect = document.getElementById("resumeFormat");
  
  if (downloadBtn && formatSelect) {
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      
      const selectedFormat = formatSelect.value;
      
      // Resume data structure
      const resumeData = {
        name: "Sri Vishnu",
        title: "VFX Artist | No Code Automation Specialist",
        contact: {
          email: "srivishnu23042003@gmail.com",
          phone: "+91 8300962214",
          location: "Madurai, Tamil Nadu",
          linkedin: "linkedin.com/in/srivishnu",
          github: "github.com/srivishnu"
        },
        summary: "I'm a hands-on automation enthusiast passionate about building AI-powered workflows that make processes smarter, faster, and more scalable. Over the past months, I've designed and implemented end-to-end systems using Make.com, Google Sheets, Gmail, Gemini AI, and Looker Studio, transforming raw data into actionable insights.",
        skills: [
          "Make.com (Integromat) Automation",
          "Google Sheets (Formulas, Data Pipelines)",
          "Google Looker Studio (Dashboards & KPIs)",
          "Gemini AI Integration (Resume Scoring, Email Generation)",
          "Webhook & JSON Parsing",
          "API Integration",
          "Gmail Automation",
          "Error Handling & Logging in Workflows",
          "Recruitment Automation Systems"
        ],
        experience: [
          {
            title: "Automation Specialist",
            company: "Freelance",
            period: "2023 - Present",
            description: "Designed and implemented end-to-end automation systems using Make.com, Google Sheets, and AI integration for various clients."
          }
        ],
        education: [
          {
            degree: "Bachelor of Computer Science",
            institution: "University of Technology",
            period: "2018 - 2021"
          }
        ],
        projects: [
          "Resume Screening Automation: AI-powered system using Gemini AI and Make.com",
          "Email Outreach Automation: Personalized campaigns with Google Sheets integration",
          "Real-time Dashboard: Looker Studio dashboards with error handling and alerts",
          "Data Pipeline Automation: End-to-end data processing workflows"
        ]
      };
      
      // Generate and download based on selected format
      switch (selectedFormat) {
        case 'pdf':
          generatePDF(resumeData);
          break;
        case 'docx':
          generateDOCX(resumeData);
          break;
        case 'txt':
        default:
          generateTXT(resumeData);
          break;
      }
      
      // Show success message
      showDownloadSuccess(selectedFormat);
    });
  }
}

function generatePDF(resumeData) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Set font
  doc.setFont("helvetica");
  
  // Title
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text(resumeData.name, 20, 30);
  
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text(resumeData.title, 20, 40);
  
  // Contact Information
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("CONTACT INFORMATION", 20, 60);
  
  doc.setFont("helvetica", "normal");
  doc.text(`Email: ${resumeData.contact.email}`, 20, 70);
  doc.text(`Phone: ${resumeData.contact.phone}`, 20, 80);
  doc.text(`Location: ${resumeData.contact.location}`, 20, 90);
  doc.text(`LinkedIn: ${resumeData.contact.linkedin}`, 20, 100);
  doc.text(`GitHub: ${resumeData.contact.github}`, 20, 110);
  
  // Professional Summary
  doc.setFont("helvetica", "bold");
  doc.text("PROFESSIONAL SUMMARY", 20, 130);
  
  doc.setFont("helvetica", "normal");
  const summaryLines = doc.splitTextToSize(resumeData.summary, 170);
  doc.text(summaryLines, 20, 140);
  
  // Skills
  doc.setFont("helvetica", "bold");
  doc.text("TECHNICAL SKILLS", 20, 180);
  
  doc.setFont("helvetica", "normal");
  let yPos = 190;
  resumeData.skills.forEach(skill => {
    doc.text(`• ${skill}`, 20, yPos);
    yPos += 7;
  });
  
  // Experience
  doc.setFont("helvetica", "bold");
  doc.text("EXPERIENCE", 20, yPos + 10);
  
  doc.setFont("helvetica", "normal");
  yPos += 20;
  resumeData.experience.forEach(exp => {
    doc.setFont("helvetica", "bold");
    doc.text(`${exp.title} | ${exp.company} | ${exp.period}`, 20, yPos);
    yPos += 7;
    doc.setFont("helvetica", "normal");
    const expLines = doc.splitTextToSize(exp.description, 170);
    doc.text(expLines, 20, yPos);
    yPos += expLines.length * 7 + 5;
  });
  
  // Education
  doc.setFont("helvetica", "bold");
  doc.text("EDUCATION", 20, yPos + 10);
  
  doc.setFont("helvetica", "normal");
  yPos += 20;
  resumeData.education.forEach(edu => {
    doc.text(`${edu.degree}`, 20, yPos);
    doc.text(`${edu.institution} | ${edu.period}`, 20, yPos + 7);
    yPos += 20;
  });
  
  // Projects
  doc.setFont("helvetica", "bold");
  doc.text("PROJECTS", 20, yPos + 10);
  
  doc.setFont("helvetica", "normal");
  yPos += 20;
  resumeData.projects.forEach(project => {
    doc.text(`• ${project}`, 20, yPos);
    yPos += 7;
  });
  
  // Download the PDF
  doc.save(`${resumeData.name.replace(/\s+/g, '_')}_Resume.pdf`);
}

function generateDOCX(resumeData) {
  const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = window.docx;
  
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Name and Title
        new Paragraph({
          children: [
            new TextRun({
              text: resumeData.name,
              bold: true,
              size: 32,
            }),
          ],
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: resumeData.title,
              size: 20,
            }),
          ],
          alignment: AlignmentType.CENTER,
        }),
        
        new Paragraph({ text: "" }), // Empty line
        
        // Contact Information
        new Paragraph({
          children: [
            new TextRun({
              text: "CONTACT INFORMATION",
              bold: true,
              size: 24,
            }),
          ],
          heading: HeadingLevel.HEADING_1,
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: `Email: ${resumeData.contact.email}`,
              size: 20,
            }),
          ],
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: `Phone: ${resumeData.contact.phone}`,
              size: 20,
            }),
          ],
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: `Location: ${resumeData.contact.location}`,
              size: 20,
            }),
          ],
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: `LinkedIn: ${resumeData.contact.linkedin}`,
              size: 20,
            }),
          ],
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: `GitHub: ${resumeData.contact.github}`,
              size: 20,
            }),
          ],
        }),
        
        new Paragraph({ text: "" }), // Empty line
        
        // Professional Summary
        new Paragraph({
          children: [
            new TextRun({
              text: "PROFESSIONAL SUMMARY",
              bold: true,
              size: 24,
            }),
          ],
          heading: HeadingLevel.HEADING_1,
        }),
        
        new Paragraph({
          children: [
            new TextRun({
              text: resumeData.summary,
              size: 20,
            }),
          ],
        }),
        
        new Paragraph({ text: "" }), // Empty line
        
        // Skills
        new Paragraph({
          children: [
            new TextRun({
              text: "TECHNICAL SKILLS",
              bold: true,
              size: 24,
            }),
          ],
          heading: HeadingLevel.HEADING_1,
        }),
        
        ...resumeData.skills.map(skill => 
          new Paragraph({
            children: [
              new TextRun({
                text: `• ${skill}`,
                size: 20,
              }),
            ],
          })
        ),
        
        new Paragraph({ text: "" }), // Empty line
        
        // Experience
        new Paragraph({
          children: [
            new TextRun({
              text: "EXPERIENCE",
              bold: true,
              size: 24,
            }),
          ],
          heading: HeadingLevel.HEADING_1,
        }),
        
        ...resumeData.experience.map(exp => 
          new Paragraph({
            children: [
              new TextRun({
                text: `${exp.title} | ${exp.company} | ${exp.period}`,
                bold: true,
                size: 20,
              }),
            ],
          })
        ),
        
        ...resumeData.experience.map(exp => 
          new Paragraph({
            children: [
              new TextRun({
                text: exp.description,
                size: 20,
              }),
            ],
          })
        ),
        
        new Paragraph({ text: "" }), // Empty line
        
        // Education
        new Paragraph({
          children: [
            new TextRun({
              text: "EDUCATION",
              bold: true,
              size: 24,
            }),
          ],
          heading: HeadingLevel.HEADING_1,
        }),
        
        ...resumeData.education.map(edu => 
          new Paragraph({
            children: [
              new TextRun({
                text: `${edu.degree}`,
                bold: true,
                size: 20,
              }),
            ],
          })
        ),
        
        ...resumeData.education.map(edu => 
          new Paragraph({
            children: [
              new TextRun({
                text: `${edu.institution} | ${edu.period}`,
                size: 20,
              }),
            ],
          })
        ),
        
        new Paragraph({ text: "" }), // Empty line
        
        // Projects
        new Paragraph({
          children: [
            new TextRun({
              text: "PROJECTS",
              bold: true,
              size: 24,
            }),
          ],
          heading: HeadingLevel.HEADING_1,
        }),
        
        ...resumeData.projects.map(project => 
          new Paragraph({
            children: [
              new TextRun({
                text: `• ${project}`,
                size: 20,
              }),
            ],
          })
        ),
      ],
    }],
  });
  
  // Generate and download the DOCX
  Packer.toBlob(doc).then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resumeData.name.replace(/\s+/g, '_')}_Resume.docx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  });
}

function generateTXT(resumeData) {
  const resumeContent = `
${resumeData.name}
${resumeData.title}

CONTACT INFORMATION
Email: ${resumeData.contact.email}
Phone: ${resumeData.contact.phone}
Location: ${resumeData.contact.location}
LinkedIn: ${resumeData.contact.linkedin}
GitHub: ${resumeData.contact.github}

PROFESSIONAL SUMMARY
${resumeData.summary}

TECHNICAL SKILLS
${resumeData.skills.map(skill => `• ${skill}`).join('\n')}

EXPERIENCE
${resumeData.experience.map(exp => `${exp.title} | ${exp.company} | ${exp.period}\n${exp.description}`).join('\n\n')}

EDUCATION
${resumeData.education.map(edu => `${edu.degree}\n${edu.institution} | ${edu.period}`).join('\n\n')}

PROJECTS
${resumeData.projects.map(project => `• ${project}`).join('\n')}
  `;
  
  // Create and download the resume file
  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${resumeData.name.replace(/\s+/g, '_')}_Resume.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

function showDownloadSuccess(format) {
  // Create success notification
  const notification = document.createElement('div');
  notification.className = 'download-notification';
  
  const formatIcons = {
    'pdf': '📄',
    'docx': '📝',
    'txt': '📄'
  };
  
  const formatNames = {
    'pdf': 'PDF',
    'docx': 'DOCX',
    'txt': 'TXT'
  };
  
  notification.innerHTML = `
    <div class="notification-content">
      <div class="notification-icon">${formatIcons[format] || '📄'}</div>
      <div class="notification-text">
        <h4>Resume Downloaded!</h4>
        <p>Your resume in ${formatNames[format] || 'TXT'} format has been saved to your downloads folder.</p>
      </div>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 16px 20px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    max-width: 300px;
  `;
  
  // Add animation keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .notification-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .notification-icon {
      font-size: 1.5rem;
    }
    .notification-text h4 {
      margin: 0 0 4px 0;
      font-size: 1rem;
      font-weight: 600;
    }
    .notification-text p {
      margin: 0;
      font-size: 0.875rem;
      opacity: 0.9;
    }
  `;
  document.head.appendChild(style);
  
  // Add to page
  document.body.appendChild(notification);
  
  // Auto-remove after 4 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideInRight 0.3s ease reverse';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    }
  }, 4000);
}

function initTypingAnimation() {
  const typingElement = document.getElementById('typingText');
  if (!typingElement) return;

  const words = ['Animator', 'Web Developer', 'VFX Artist', 'Creator', 'Designer', 'Innovator'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let deletingSpeed = 50;
  let pauseTime = 2000;

  function typeText() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Deleting characters
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = deletingSpeed;
    } else {
      // Typing characters
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Finished typing, pause before deleting
      typingSpeed = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next word
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // Pause before starting next word
    }

    setTimeout(typeText, typingSpeed);
  }

  // Start the typing animation
  setTimeout(typeText, 1000); // Initial delay
}

function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  const body = document.body;
  
  // Get saved theme or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  body.setAttribute("data-theme", savedTheme);
  
  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
}

function initScrollEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = scrollY;
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
}


