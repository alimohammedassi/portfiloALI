# ALI ASSI Portfolio Website

A modern, responsive portfolio website showcasing Flutter development and UI/UX design skills.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Project Filtering**: Filter projects by category (Flutter Apps, UI/UX Design, Web Projects)
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Semantic HTML and meta tags for better search engine visibility

## File Structure

```
ali-assi-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling and responsive design
├── js/
│   └── script.js       # Interactive functionality
├── images/             # Portfolio images and assets
│   ├── flutter-logo.png
│   ├── ux-icons.jpg
│   └── mobile-dev.jpg
└── README.md           # This documentation file
```

## How to Update Content

### 1. Personal Information

**Location**: `index.html` - Hero Section (lines 45-60)

Update your name, title, and description:
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">YOUR NAME</span>
</h1>
<h2 class="hero-subtitle">Your Title Here</h2>
<p class="hero-description">
    Your personal description here...
</p>
```

### 2. About Section

**Location**: `index.html` - About Section (lines 80-120)

Update your background, experience, and statistics:
```html
<div class="about-text">
    <h3>Your Professional Title</h3>
    <p>Your background and experience...</p>
    <!-- Update statistics -->
    <div class="stat">
        <h4>50+</h4>
        <p>Projects Completed</p>
    </div>
</div>
```

### 3. Skills

**Location**: `index.html` - Skills Section (lines 140-220)

Add or modify skills and their levels:
```html
<div class="skill-item">
    <i class="fab fa-flutter"></i>
    <span>Flutter</span>
    <div class="skill-level">
        <div class="skill-bar" data-level="95"></div>
    </div>
</div>
```

**Note**: Change `data-level` attribute to set skill percentage (0-100)

### 4. Projects

**Location**: `index.html` - Projects Section (lines 240-350)

Add new projects or update existing ones:
```html
<div class="project-card" data-category="flutter">
    <div class="project-image">
        <img src="images/your-project-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="your-live-demo-url" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="your-github-url" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
    </div>
</div>
```

**Categories**: Use `data-category` values: `flutter`, `uiux`, `web`, or create new ones

### 5. Contact Information

**Location**: `index.html` - Contact Section (lines 370-420)

Update your contact details:
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>your.email@example.com</p>
    </div>
</div>
```

Update social media links:
```html
<div class="social-links">
    <a href="your-linkedin-url" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="your-github-url" class="social-link">
        <i class="fab fa-github"></i>
    </a>
</div>
```

### 6. Adding New Images

1. Add images to the `images/` folder
2. Update the `src` attribute in the HTML
3. Optimize images for web (recommended: WebP format, max 1MB)

### 7. Customizing Colors

**Location**: `css/style.css` - CSS Variables (lines 1-15)

Update the color scheme:
```css
:root {
    --primary-color: #2196F3;      /* Main brand color */
    --secondary-color: #1976D2;    /* Darker shade */
    --accent-color: #FF5722;       /* Highlight color */
    --text-color: #333333;         /* Main text */
    --background-color: #FFFFFF;   /* Background */
}
```

### 8. Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `css/style.css`
3. Update navigation menu if needed
4. Add smooth scrolling functionality in `js/script.js`

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Tips

1. **Image Optimization**: Compress images before adding them
2. **Lazy Loading**: Consider adding lazy loading for images
3. **Minification**: Minify CSS and JavaScript for production
4. **CDN**: Use CDN for external libraries (Font Awesome, Google Fonts)

## Deployment

### Option 1: Static Hosting (Recommended)
- Upload files to services like Netlify, Vercel, or GitHub Pages
- No server configuration required

### Option 2: Traditional Web Hosting
- Upload all files to your web server's public directory
- Ensure proper file permissions

### Option 3: Local Development
```bash
# Start local server for testing
python3 -m http.server 8000
# Open http://localhost:8000 in browser
```

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **Styles not applying**: Clear browser cache and check CSS file path
3. **JavaScript not working**: Check browser console for errors
4. **Mobile layout issues**: Test responsive design at different screen sizes

### Testing Checklist

- [ ] All navigation links work
- [ ] Project filters function correctly
- [ ] Contact form validation works
- [ ] Images load properly
- [ ] Responsive design on mobile/tablet
- [ ] Cross-browser compatibility
- [ ] Page load speed is acceptable

## Support

For technical support or customization requests, contact the developer or refer to the documentation above for common modifications.

---

**Last Updated**: August 2025  
**Version**: 1.0  
**Developer**: Created for ALI ASSI

