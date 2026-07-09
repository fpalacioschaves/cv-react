# CV React · Francisco Palacios Chaves

CV interactivo desarrollado con React y Vite. El proyecto funciona como currículum online y pequeño portfolio profesional, con versión bilingüe, modo claro/oscuro, secciones navegables, proyectos destacados y formulario de contacto mediante EmailJS.

**URL en vivo:** https://fpalacioschaves.github.io/cv-react

## Objetivo

El objetivo del proyecto es presentar un perfil profesional mixto: docente técnico en ciclos DAM/DAW, desarrollador PHP/WordPress y perfil especializado en bases de datos, desarrollo web y formación TIC.

## Funcionalidades actuales

- Aplicación SPA creada con React y Vite.
- Modo claro/oscuro con persistencia en `localStorage`.
- Contenido bilingüe en español e inglés.
- Navegación por secciones con menú responsive.
- Detección de sección activa durante el scroll.
- Descarga del CV en PDF desde la carpeta `public`.
- Proyectos destacados definidos manualmente.
- Carga de repositorios recientes desde la API pública de GitHub.
- Formulario de contacto con EmailJS.
- Metadatos básicos para SEO y redes sociales.

## Tecnologías

- React 19
- Vite
- JavaScript
- CSS mediante estilos centralizados en JS y reglas globales mínimas
- EmailJS
- GitHub Pages
- Firebase Hosting opcional

## Instalación

```bash
git clone https://github.com/fpalacioschaves/cv-react.git
cd cv-react
npm install
npm run dev
```

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción
npm run preview   # Vista previa del build
npm run lint      # Linting
npm run deploy    # Despliegue a GitHub Pages
```

Para GitHub Pages se usa:

```bash
npm run build:gh
npm run deploy
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
├── App.jsx
├── config.js
├── index.css
└── main.jsx
```

## Notas de mantenimiento

- El contenido profesional está separado en `src/data/`.
- La estructura visual está dividida en componentes dentro de `src/components/`.
- Los estilos principales están centralizados en `src/styles/createStyles.js`.
- Los datos sensibles o variables de servicio deben ir en `.env.local`, no en el repositorio.
- El archivo PDF actual se define en `src/config.js` mediante `PDF_FILE_NAME`.

## Autor

**Francisco Palacios Chaves**

Docente técnico en DAW/DAM, desarrollador PHP/WordPress y perfil especializado en bases de datos, desarrollo web y formación TIC.
