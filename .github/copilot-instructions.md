# Agrupación Argentina Azul - AI Agent Guide

## Project Overview
React 18 + Vite SPA for maritime consciousness movement. Single-page application with smooth scroll navigation, no routing library. Deployed to Netlify.

## Architecture & Component Patterns

### Component Structure
Each component follows the pattern: `ComponentName.jsx` + `ComponentName.css` in [src/components/](src/components/)
- **Standalone components**: No shared state, props, or component composition
- **Direct DOM manipulation**: Components use `scrollToSection()` with `scrollIntoView()` for navigation
- **Animation lifecycle**: Each component implements its own Intersection Observer for scroll animations

Example component structure:
```jsx
import { useEffect, useRef } from 'react';
import './ComponentName.css';

const ComponentName = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    
    const elements = ref.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  
  return <section className="component-name section" id="unique-id" ref={ref}>...</section>;
};
```

## Design System & CSS Conventions

### CSS Variables ([src/index.css](src/index.css))
```css
--color-navy: #1d385e;      /* Primary brand color */
--color-blue: #5c9dcb;      /* Accent & hover states */
--color-white: #FFFFFF;     /* Background & text */
--font-display: 'Belleza';  /* Titles (serif) */
--font-body: 'Nunito';      /* Body text (sans-serif) */
```

### Typography Rules
- Display titles: `font-family: var(--font-display)`, loaded from Google Fonts (see [index.html](index.html))
- Body text: `font-family: var(--font-body)`
- Use `clamp()` for responsive font sizing: `clamp(2rem, 5vw, 3.5rem)`

### Animation Pattern
All scroll-triggered animations use `.animate-on-scroll` class:
1. Elements start with `opacity: 0; transform: translateY(20px)`
2. When `.visible` class is added by Intersection Observer: `opacity: 1; transform: translateY(0)`
3. Transition duration: `var(--transition-slow)` (0.6s)

### Button Styles ([src/App.css](src/App.css))
- `.btn-primary`: Blue background, white text, hover changes to navy with lift effect
- `.btn-secondary`: Transparent with blue border, hover fills with blue

## Development Workflows

### Commands
```bash
npm run dev      # Start dev server on http://0.0.0.0:5173
npm run build    # Build to /dist
npm run preview  # Preview production build
```

### Adding New Components
1. Create `ComponentName.jsx` and `ComponentName.css` in `src/components/`
2. Import and add to [src/App.jsx](src/App.jsx) component tree
3. Add section `id` for scroll navigation if needed
4. Implement Intersection Observer pattern for animations (see above)

### Responsive Breakpoints
```css
/* Mobile-first approach */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

## Key Files & Patterns

- **[src/App.jsx](src/App.jsx)**: Global Intersection Observer + component composition
- **[src/index.css](src/index.css)**: CSS variables, reset, base styles (142 lines)
- **[src/App.css](src/App.css)**: Global utilities (buttons, section titles, containers)
- **[netlify.toml](netlify.toml)**: SPA redirects configured (`/* → /index.html`)
- **[public/](public/)**: Static assets (video.mp4, team photos)

## Project-Specific Conventions

1. **No CSS frameworks**: Pure CSS3 with custom variables
2. **No state management**: Components are self-contained with local state only
3. **Smooth scroll navigation**: Use `element.scrollIntoView({ behavior: 'smooth' })`
4. **Mobile-responsive video**: Hero background video uses `autoPlay muted loop playsInline`
5. **SVG animations**: Logo wave animates via `.logo-animate` class on scroll (see [Navbar.jsx](src/components/Navbar.jsx))

## Content & Branding

- **Mission**: Maritime consciousness for Argentina's 6.5M km² ocean territory
- **Slogan**: "El cambio está en el mar" (The change is in the sea)
- **Key message**: "2.5x the continental territory is underwater"
- **Google Fonts**: Belleza (display), Nunito (body) - preloaded in [index.html](index.html)
