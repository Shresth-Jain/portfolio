# 🚀 Portfolio Website

A modern, elegant portfolio website for a software engineer with a cyberpunk/hacker aesthetic. Built with pure HTML, CSS, and JavaScript - no frameworks required!

## ✨ Features

- **Matrix Rain Background**: Animated matrix-style background effect
- **Terminal-Themed Hero**: Command-line interface aesthetic with typing animation
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Interactive Elements**: Hover effects, custom cursor, and smooth scrolling
- **Performance Optimized**: Lightweight with no external dependencies
- **Dark Theme**: Easy on the eyes with a cyberpunk color scheme
- **Easter Egg**: Try the Konami code! (↑ ↑ ↓ ↓ ← → ← → B A)

## 🎨 Color Palette

- Primary: `#00ff9f` (Neon Green)
- Secondary: `#00d4ff` (Cyan)
- Background: `#0a0e27` (Deep Navy)
- Accent: `#ff006e` (Hot Pink)

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styles
├── scripts/
│   └── main.js            # JavaScript functionality
├── Shresth_Jain_2024_Resume.pdf  # Resume PDF
└── README.md              # This file
```

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be live at `https://yourusername.github.io/repository-name/`

### Method 2: Using Git Command Line

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add remote repository
git remote add origin https://github.com/yourusername/repository-name.git

# Push to GitHub
git push -u origin main

# Enable GitHub Pages
# Go to repository Settings → Pages → Select "main" branch → Save
```

## 🛠️ Customization Guide

### 1. Personal Information

Edit `index.html` to update:
- Name and title in the hero section
- About me text
- Skills and technologies
- Projects (add your own with links)
- Experience timeline
- Contact information
- Social media links

### 2. Resume

Replace `Shresth_Jain_2024_Resume.pdf` with your own resume file. Make sure to:
- Keep the same filename, OR
- Update the link in `index.html` (line ~26):
  ```html
  <a href="your_resume.pdf" class="nav-link resume-link">
  ```

### 3. Colors

Edit CSS variables in `styles/main.css` (lines 7-17):
```css
:root {
    --primary: #00ff9f;        /* Change main accent color */
    --secondary: #00d4ff;      /* Change secondary color */
    --bg-dark: #0a0e27;        /* Change background color */
    /* ... */
}
```

### 4. Projects

Add or modify projects in the Projects section of `index.html`:
```html
<div class="project-card">
    <div class="project-header">
        <span class="project-type">Featured</span>
        <div class="project-links">
            <a href="your-github-link" class="project-link">GitHub Icon</a>
            <a href="your-demo-link" class="project-link">Demo Icon</a>
        </div>
    </div>
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Description...</p>
    <div class="project-tech">
        <span class="tech-tag">Tech1</span>
        <span class="tech-tag">Tech2</span>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 640px - 968px
- Mobile: < 640px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📝 To-Do / Enhancement Ideas

- [ ] Add blog section
- [ ] Integrate with a CMS
- [ ] Add dark/light theme toggle
- [ ] Include contact form with backend
- [ ] Add more interactive animations
- [ ] Create loading screen
- [ ] Add language switcher (i18n)
- [ ] Include testimonials section
- [ ] Add achievement/certification badges

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- Matrix rain effect inspired by The Matrix
- Terminal aesthetics from hacker culture
- Icons from inline SVG
- Fonts from Google Fonts (Inter & Fira Code)

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Built with ❤️ and ☕ by Shresth Jain**

*"Code with purpose, design with passion"*
