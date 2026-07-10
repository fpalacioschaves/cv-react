# CV React · Francisco Palacios Chaves

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=ffffff)](https://vite.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-111827?logo=github)](https://fpalacioschaves.github.io/cv-react/)

CV web y portfolio profesional desarrollado con React y Vite. El proyecto presenta mi perfil como **docente FP TIC en DAM/DAW**, **desarrollador web full stack** y profesional orientado a **tecnología educativa, documentación técnica, WordPress, datos y proyectos reales**.

**Demo en vivo:** https://fpalacioschaves.github.io/cv-react/

## Objetivo del proyecto

Este repositorio no es solo una página personal. Está planteado como una pequeña aplicación frontend mantenible para presentar un perfil profesional híbrido: aula, código, documentación y soluciones digitales aplicadas a formación técnica.

El objetivo principal es que el CV pueda funcionar en varios contextos:

- Consulta rápida desde navegador.
- Portfolio técnico enlazable desde GitHub o LinkedIn.
- Versión imprimible / PDF.
- Presentación bilingüe español-inglés.
- Base fácilmente actualizable para nuevas experiencias, proyectos o tecnologías.

## Funcionalidades principales

- SPA desarrollada con React y Vite.
- Diseño responsive para escritorio y móvil.
- Modo claro/oscuro con persistencia en `localStorage`.
- Contenido bilingüe en español e inglés.
- Navegación por secciones con menú responsive.
- Detección de sección activa durante el scroll.
- Efecto `scroll reveal` para aparición progresiva de tarjetas.
- Versión optimizada para impresión/PDF mediante hojas CSS específicas.
- Proyectos destacados definidos manualmente.
- Carga de repositorios recientes desde la API pública de GitHub.
- Formulario de contacto con EmailJS.
- SEO, Open Graph, Twitter Card, favicon, manifest, `robots.txt` y `sitemap.xml`.
- Despliegue en GitHub Pages.
- Workflow de GitHub Actions para build y publicación automática.

## Stack técnico

| Área | Tecnologías |
| --- | --- |
| Frontend | React 19, JavaScript, Vite |
| Estilos | CSS modular por capas, estilos centralizados en JS, CSS específico para responsive, accesibilidad, impresión y pulido visual |
| Integraciones | EmailJS, GitHub public API |
| SEO / publicación | Open Graph, Twitter Card, JSON-LD, sitemap, robots, GitHub Pages |
| Automatización | GitHub Actions, gh-pages |

## Enfoque técnico

El proyecto está organizado con una separación clara entre contenido, componentes y estilos:

- Los textos profesionales viven en `src/data/`.
- Las secciones visuales viven en `src/components/`.
- Los estilos base están centralizados en `src/styles/createStyles.js`.
- Los ajustes globales se reparten en hojas CSS específicas: responsive, accesibilidad, pulido visual, impresión y correcciones finales de PDF.
- La configuración principal del CV, como usuario de GitHub, URL de LinkedIn, correo y nombre del PDF, se define en `src/config.js`.

Esto permite actualizar el CV sin tener que tocar toda la aplicación.

## Instalación local

```bash
git clone https://github.com/fpalacioschaves/cv-react.git
cd cv-react
npm install
npm run dev
```

La aplicación quedará disponible normalmente en:

```txt
http://localhost:5173
```

## Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run build:gh     # Build con base /cv-react/ para GitHub Pages
npm run preview      # Vista previa del build
npm run lint         # Revisión con ESLint
npm run deploy       # Despliegue manual a GitHub Pages mediante gh-pages
npm run deploy:firebase # Build y despliegue opcional en Firebase Hosting
```

## Variables de entorno

El formulario de contacto usa EmailJS. Para configurarlo, crea un archivo `.env.local` a partir de `.env.example`:

```bash
cp .env.example .env.local
```

Y completa las variables:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

Si estas variables no están configuradas, la aplicación seguirá funcionando y mostrará un aviso en la sección de contacto.

## Estructura principal

```txt
src/
├── components/
│   ├── ContactSection.jsx
│   ├── EducationSection.jsx
│   ├── ExperienceSection.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── OffersSection.jsx
│   ├── ProfileSection.jsx
│   ├── ProjectsSection.jsx
│   ├── Section.jsx
│   ├── SkillsSection.jsx
│   └── Timeline.jsx
├── data/
│   ├── education.js
│   ├── experience.js
│   ├── navLinks.js
│   ├── offers.js
│   ├── projects.js
│   ├── skills.js
│   └── text.js
├── styles/
│   └── createStyles.js
├── accessibility.css
├── App.jsx
├── config.js
├── index.css
├── main.jsx
├── print.css
├── print-fixes.css
├── responsive.css
└── visual-polish.css
```

## Despliegue

El repositorio está preparado para GitHub Pages.

Despliegue manual:

```bash
npm run deploy
```

Build específico para GitHub Pages:

```bash
npm run build:gh
```

También existe un workflow en `.github/workflows/deploy.yml` para construir y publicar automáticamente cuando se actualiza la rama `main`.

## SEO y vista previa social

El proyecto incluye:

- Metadatos SEO básicos.
- Open Graph para LinkedIn, WhatsApp y otras plataformas.
- Twitter Card.
- Imagen social `og-card.svg`.
- Favicon propio.
- Manifest web.
- `robots.txt`.
- `sitemap.xml`.
- Datos estructurados `Person` con JSON-LD.

## PDF e impresión

El CV está preparado para imprimirse desde el navegador con:

```txt
Ctrl + P → Guardar como PDF → A4 → Escala 100%
```

La versión impresa utiliza reglas específicas en:

```txt
src/print.css
src/print-fixes.css
```

Estas hojas corrigen paginación, saltos de sección, compactación de tarjetas y cierre del documento.

## Notas de mantenimiento

- Actualizar experiencia profesional: `src/data/experience.js`.
- Actualizar formación: `src/data/education.js`.
- Actualizar habilidades: `src/data/skills.js`.
- Actualizar proyectos destacados: `src/data/projects.js`.
- Actualizar textos principales: `src/data/text.js`.
- Actualizar nombre del PDF, correo, teléfono, GitHub o LinkedIn: `src/config.js`.
- Ajustar la versión PDF: `src/print.css` y `src/print-fixes.css`.

## Autor

**Francisco Palacios Chaves**

Docente FP TIC en DAM/DAW, desarrollador web full stack y perfil especializado en formación técnica, WordPress, JavaScript, React, Node.js, PHP, SQL, bases de datos, documentación y tecnología educativa.

- GitHub: https://github.com/fpalacioschaves
- LinkedIn: https://linkedin.com/in/fpalacioschaves
- CV online: https://fpalacioschaves.github.io/cv-react/
