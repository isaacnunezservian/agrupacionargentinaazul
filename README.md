# 🌊 Agrupación Argentina Azul - Sitio Web

Sitio web de la Agrupación Argentina Azul, movimiento de militancia por la conciencia marítima argentina.

## 🚀 Tecnologías

- **React 18** - Framework principal
- **Vite** - Build tool y dev server
- **CSS3** - Estilos puros sin frameworks
- **Google Fonts** - Belleza + Nunito

## 🎨 Características

✅ Diseño moderno y minimalista  
✅ Animaciones suaves al scroll  
✅ Logo animado en navbar  
✅ Completamente responsive  
✅ Optimizado para performance  
✅ Listo para deploy en Netlify  

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🌐 Deploy en Netlify

### Opción 1: Deploy automático desde Git

1. Subí el proyecto a GitHub
2. Conectá el repositorio en Netlify
3. Netlify detectará automáticamente la configuración desde `netlify.toml`

### Opción 2: Deploy manual

```bash
# Build del proyecto
npm run build

# Arrastrá la carpeta /dist a Netlify
```

### Configuración incluida

El archivo `netlify.toml` ya está configurado con:
- Redirects para SPA
- Build command
- Publish directory
- Node version

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx          # Navegación con logo animado
│   ├── Hero.jsx            # Hero section con estadísticas
│   ├── About.jsx           # ¿Qué es Argentina Azul?
│   ├── Impact.jsx          # ¿Por qué importa?
│   ├── CallToAction.jsx    # CTA para unirse
│   └── Footer.jsx          # Footer con links
├── App.jsx                 # Componente principal
├── App.css                 # Estilos globales
├── index.css               # Variables y reset CSS
└── main.jsx                # Entry point
```

## 🎨 Paleta de Colores

- **Navy**: `#1d385e` - Color principal
- **Blue**: `#5c9dcb` - Acentos y hover
- **White**: `#FFFFFF` - Fondo y texto

## 🔤 Tipografías

- **Belleza** - Títulos display (elegante, serifa)
- **Nunito** - Cuerpo de texto (moderna, sans-serif)

## 📱 Responsive

El sitio está optimizado para:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🌊 Elementos Decorativos

- Olas animadas en hero y secciones
- Logo con animación al scroll
- Transiciones suaves en hover
- Animaciones de entrada con Intersection Observer

## 🔗 Links Importantes

- [Fundación Argentina Azul](https://fundacionargentinaazul.org)
- [Instagram](https://www.instagram.com/fundacionargentinaazul/)
- [Facebook](https://www.facebook.com/fundacionargentinaazul)

## 📄 Licencia

© 2025 Agrupación Argentina Azul. Todos los derechos reservados.
