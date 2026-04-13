# TRADEFYY Website CSS Files

This folder contains all the CSS styling for the TRADEFYY website, separated by component/section for easy customization and maintenance.

## 📁 File Structure

```
css-export/
├── variables.css       # Global variables, theme colors, typography, animations
├── header.css          # Header navigation and mobile menu styles
├── hero.css            # Hero section with gradient backgrounds
├── why-choose-us.css   # Why Choose Us section with stats grid
├── about.css           # About section with principles
├── services.css        # Services grid section
├── approach.css        # Investment approach section
├── technology.css      # Technology section
├── contact.css         # Contact form and information
├── footer.css          # Footer with links and social media
└── README.md           # This file
```

## 🎨 Usage

### Option 1: Import All Files (Recommended)
Create a main CSS file and import all sections:

```css
/* main.css */
@import url('variables.css');
@import url('header.css');
@import url('hero.css');
@import url('why-choose-us.css');
@import url('about.css');
@import url('services.css');
@import url('approach.css');
@import url('technology.css');
@import url('contact.css');
@import url('footer.css');
```

### Option 2: Include in HTML
Add each CSS file in your HTML head:

```html
<head>
  <!-- Always include variables first -->
  <link rel="stylesheet" href="css/variables.css">
  
  <!-- Then include component styles -->
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/hero.css">
  <link rel="stylesheet" href="css/why-choose-us.css">
  <link rel="stylesheet" href="css/about.css">
  <link rel="stylesheet" href="css/services.css">
  <link rel="stylesheet" href="css/approach.css">
  <link rel="stylesheet" href="css/technology.css">
  <link rel="stylesheet" href="css/contact.css">
  <link rel="stylesheet" href="css/footer.css">
</head>
```

## 🎯 Key Features

### Color Scheme
- **Primary Purple**: `hsl(270, 91%, 65%)`
- **Dark Background**: `hsl(0, 0%, 7%)`
- **Card Background**: `hsl(0, 0%, 11%)`
- **Text**: `hsl(0, 0%, 98%)`
- **Muted Text**: `hsl(0, 0%, 65%)`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 600 weight, tight tracking
- **Body**: 400 weight, 1.6 line-height

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🔧 Customization Guide

### Changing Colors
Edit `variables.css` and update the `:root` CSS variables:

```css
:root {
  --color-primary: hsl(270, 91%, 65%);  /* Change purple color */
  --color-background: hsl(0, 0%, 7%);   /* Change dark background */
  /* ... other colors ... */
}
```

### Changing Fonts
Replace the Google Fonts import in `variables.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

:root {
  --font-sans: 'YourFont', system-ui, sans-serif;
}
```

### Changing Spacing
Adjust spacing variables in `variables.css`:

```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  /* ... */
}
```

### Animations
All animations are defined in `variables.css`:
- `fadeIn` - Fade in effect
- `slideUp` - Slide up from bottom
- `slideIn` - Slide in from left
- `pulse` - Pulsing effect
- `bounce` - Bouncing effect

## 📱 Mobile Responsiveness

All sections are fully responsive with:
- Flexible grid layouts that adapt to screen size
- Mobile-first approach
- Touch-friendly buttons and links
- Optimized typography for small screens

## 🎨 Glass Morphism Effect

The `.glass-card` class provides a frosted glass effect:

```css
.glass-card {
  background-color: rgba(28, 28, 30, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 🌐 Browser Support

These CSS files support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: Some effects like `backdrop-filter` may have limited support in older browsers.

## ⚡ Performance Tips

1. **Minimize HTTP Requests**: Combine CSS files in production
2. **Minify CSS**: Use a minifier to reduce file size
3. **Critical CSS**: Inline critical CSS for above-the-fold content
4. **Remove Unused Styles**: Only include CSS files for sections you're using

## 🔍 Class Naming Convention

Classes follow a BEM-like naming convention:
- `.section-name` - Main section container
- `.section-name-element` - Element within section
- `.section-name-element-modifier` - Modified element state

## 📞 Support

For questions about the CSS files:
- Email: info@tradefyy.net
- Location: Tallinn, Estonia

---

**Last Updated**: December 2025
**Version**: 1.0
**Company**: TRADEFYY - Registered in Estonia
