# 📄 CV React - Portfolio Interactivo

Mi CV profesional, desarrollado como ejercicio de prácticas en React. Un portafolio moderno, responsivo y completamente funcional que muestra mi experiencia como profesor de Desarrollo de Aplicaciones Web y desarrollador fullstack.

**URL en vivo:** [https://fpalacioschaves.github.io/cv-react](https://fpalacioschaves.github.io/cv-react)

---

## ✨ Características Principales

### 🎨 Diseño Moderno

- Interfaz limpia y profesional con Tailwind CSS
- Componentes reutilizables y bien estructurados
- Animaciones suaves con Framer Motion
- Degradados y efectos visuales modernos

### 🌙 Tema Oscuro/Claro

- Modo oscuro y claro totalmente funcional
- Persistencia de preferencia del usuario en localStorage
- Transiciones suaves entre temas
- Compatible con preferencias del sistema

### 🌍 Multiidioma

- Soporte para español e inglés
- Cambio instantáneo de idioma
- Persistencia de preferencia seleccionada
- Textos completamente traducidos en ambos idiomas

### 📱 Diseño Responsivo

- Optimizado para dispositivos móviles, tablets y desktop
- Media queries inteligentes
- Menú adaptable según tamaño de pantalla
- Imágenes y componentes escalables

### ✅ Accesibilidad (WCAG AA)

- Atributos ARIA apropiados en todos los componentes
- Keyboard navigation completa
- Contraste de colores conforme a WCAG AA
- Landmarks semánticos HTML5
- Etiquetas descriptivas en formularios

### 🎬 Animaciones Suaves

- Transiciones con Framer Motion
- Efectos de entrada/salida de componentes
- Scroll revelador (scroll-triggered animations)
- Animaciones de carga optimizadas

### 📊 PWA (Progressive Web App)

- Instalable como aplicación nativa
- Funciona completamente offline
- Icono en pantalla de inicio
- Experiencia de app sin necesidad de store
- Service Workers para caché inteligente

### 📬 Formulario de Contacto

- Integración con EmailJS para envío de emails
- Validación de formularios en tiempo real
- Notificaciones tipo toast (Sonner)
- Feedback visual al usuario

### 🔍 SEO Optimizado

- Meta tags dinámicos
- Open Graph para redes sociales
- Twitter Card markup
- Schema markup JSON-LD (Person schema)
- Sitemap.xml generado
- Robots.txt configurado
- URLs canónicas

### ⚡ Performance

- Bundle size optimizado: 433KB (135KB gzipped)
- Lazy loading de componentes
- Code splitting automático
- Carga rápida de imágenes
- Service Workers para caché
- Precarga de recursos críticos

### 🧪 Testing Completo

- Tests unitarios e integración
- 13 tests pasando (100%)
- Configuración con Vitest y React Testing Library
- Setup para mocks de Framer Motion
- Coverage de componentes críticos

### 📈 Detección de Sección Activa

- Menú se resalta automáticamente al hacer scroll
- useActiveSection hook personalizado
- Detección precisa de viewport
- Navegación suave entre secciones

---

## 🚀 Tecnologías Utilizadas

### Frontend

- **React 19** - Librería UI
- **Vite** - Bundler y dev server
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones

### Herramientas y Librerías

- **Lucide React** - Iconos SVG
- **EmailJS** - Servicio de email
- **React Helmet Async** - Gestión de meta tags
- **Sonner** - Notificaciones toast
- **Vitest** - Framework de testing
- **React Testing Library** - Utilidades de testing
- **ESLint** - Linting

### Build y Deployment

- **Vite PWA Plugin** - Configuración PWA
- **Workbox** - Service Workers y caché
- **GitHub Pages** - Hosting
- **Firebase Hosting** (opcional)

---

## 📦 Instalación

### Requisitos Previos

- Node.js 18+
- npm 9+
- Git

### Pasos de Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/fpalacioschaves/cv-react.git
cd cv-react

# 2. Instalar dependencias
npm install

# 3. Crear archivo de variables de entorno
cp .env.example .env.local

# 4. Configurar EmailJS (ver sección de configuración)
# Editar .env.local con tus credenciales
```

---

## 🏃 Desarrollo

### Comandos Principales

```bash
# Iniciar servidor de desarrollo (Hot Module Reload)
npm run dev

# Compilar para producción
npm run build

# Vista previa local del build de producción
npm run preview

# Ejecutar tests unitarios
npm run test

# Ejecutar tests en modo watch
npm run test -- --watch

# Generar reporte de coverage
npm run test -- --coverage

# Linting del código
npm run lint

# Desplegar en GitHub Pages
npm run deploy

# Desplegar en Firebase Hosting
npm run deploy:firebase

# Crear versión PDF del CV
npm run build:gh
```

---

## 🔧 Configuración

### 1. EmailJS - Envío de Emails

Para que funcione el formulario de contacto:

1. **Crear cuenta** en [EmailJS](https://www.emailjs.com)
2. **Crear un servicio** de email en el dashboard
3. **Crear una plantilla** con las siguientes variables:
   - `from_name` - Nombre del remitente
   - `reply_to` - Email de respuesta
   - `message` - Mensaje
4. **Obtener credenciales** desde el dashboard:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`
5. **Agregar a `.env.local`:**

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 2. PWA - Instalación como App

La aplicación está totalmente configurada como Progressive Web App:

- ✅ **Instalar en navegador**: Click en el ícono de instalación del navegador
- ✅ **Funciona offline**: Los archivos se cachean automáticamente
- ✅ **Icono en pantalla de inicio**: Añade acceso directo
- ✅ **Actualizaciones automáticas**: Service Workers manejan versioning

### 3. Variables de Entorno

Archivo `.env.local` (no incluido en git):

```env
# EmailJS
VITE_EMAILJS_SERVICE_ID=xxx
VITE_EMAILJS_TEMPLATE_ID=xxx
VITE_EMAILJS_PUBLIC_KEY=xxx

# Base URL para GitHub Pages (si aplica)
VITE_BASE_URL=/cv-react/
```

---

## 📂 Estructura de Carpetas

```
cv-react/
├── src/
│   ├── components/                    # Componentes React principales
│   │   ├── __tests__/                # Tests de componentes
│   │   │   ├── Header.test.jsx
│   │   │   ├── ProfileSection.test.jsx
│   │   │   └── ...
│   │   ├── wrappers/                 # Wrappers reutilizables
│   │   │   ├── ErrorBoundary.jsx     # Capturador de errores
│   │   │   └── SuspenseWrapper.jsx   # Loader para lazy loading
│   │   ├── Header.jsx                # Encabezado principal
│   │   ├── ProfileSection.jsx        # Sección de perfil
│   │   ├── OffersSection.jsx         # Sección de propuestas
│   │   ├── EducationSection.jsx      # Educación y cursos
│   │   ├── SkillsSection.jsx         # Habilidades técnicas
│   │   ├── ProjectsSection.jsx       # Proyectos destacados
│   │   ├── ContactSection.jsx        # Formulario de contacto
│   │   ├── Timeline.jsx              # Componente timeline
│   │   ├── Section.jsx               # Wrapper de secciones
│   │   ├── SEOHead.jsx               # Gestión de meta tags
│   │   └── PrintView.jsx             # Vista de impresión
│   │
│   ├── hooks/                        # Custom hooks reutilizables
│   │   ├── __tests__/
│   │   │   ├── useTheme.test.js
│   │   │   └── ...
│   │   ├── index.js                  # Exportación centralizada
│   │   ├── useTheme.js               # Tema oscuro/claro
│   │   ├── useLang.js                # Gestión de idioma
│   │   ├── useIsMobile.js            # Detección de mobile
│   │   ├── useScroll.js              # Scroll y navegación
│   │   └── useActiveSection.js       # Detección de sección activa
│   │
│   ├── utils/                        # Funciones utilitarias
│   │   ├── __tests__/
│   │   │   └── seo.test.js
│   │   └── seo.js                    # Generadores de schema
│   │
│   ├── constants/                    # Constantes de la app
│   │   └── styles.js                 # Clases Tailwind centralizadas
│   │
│   ├── data/                         # Datos estáticos
│   │   ├── navLinks.js               # Enlaces de navegación
│   │   ├── experience.js             # Experiencia profesional
│   │   ├── education.js              # Formación académica
│   │   ├── projects.js               # Proyectos destacados
│   │   ├── offers.js                 # Propuestas de valor
│   │   └── text.js                   # Textos multiidioma
│   │
│   ├── test/                         # Setup y configuración de tests
│   │   └── setup.js                  # Mocks globales, Framer Motion, etc.
│   │
│   ├── App.jsx                       # Componente raíz
│   ├── main.jsx                      # Entry point de React
│   ├── index.css                     # Estilos globales
│   └── config.js                     # Configuración general
│
├── public/                           # Assets estáticos
│   ├── manifest.json                 # PWA manifest
│   ├── sitemap.xml                   # SEO sitemap
│   ├── robots.txt                    # SEO robots
│   ├── cv.pdf                        # CV en PDF
│   └── favicon.svg
│
├── dist/                             # Build de producción (generado)
├── .github/
│   └── workflows/                    # CI/CD (opcional)
│
├── vite.config.js                    # Configuración de Vite
├── vitest.config.js                  # Configuración de Vitest
├── eslint.config.js                  # Configuración de ESLint
├── tailwind.config.js                # Configuración de Tailwind
├── postcss.config.js                 # Configuración de PostCSS
├── .env.example                      # Template de variables de entorno
├── package.json                      # Dependencias y scripts
├── package-lock.json                 # Lock file
├── .gitignore                        # Archivos ignorados en git
├── README.md                         # Este archivo
├── COMPONENTS.md                     # Documentación de componentes
├── ARCHITECTURE.md                   # Arquitectura detallada
├── CONTRIBUTING.md                   # Guía de contribución
└── LICENSE                           # MIT License
```

---

## 🎯 Custom Hooks

### `useTheme`

Gestiona el tema oscuro/claro con persistencia en localStorage.

```jsx
const { theme, toggleTheme } = useTheme();
// theme: 'dark' | 'light'
// Cambios se persisten automáticamente
```

### `useLang`

Gestiona el idioma de la aplicación.

```jsx
const { lang, toggleLang } = useLang();
// lang: 'es' | 'en'
// Se persiste en localStorage
```

### `useIsMobile`

Detecta si es dispositivo móvil y responde a cambios de ventana.

```jsx
const isMobile = useIsMobile();
// true si ancho < 768px
// Se actualiza al redimensionar
```

### `useScroll`

Proporciona información de scroll y métodos de navegación suave.

```jsx
const { scrolled, showToTop, scrollToTop, scrollToElement } = useScroll();
// scrolled: boolean - si se ha scrolleado
// showToTop: boolean - mostrar botón "ir arriba"
// scrollToTop(): void - volver al inicio
// scrollToElement(id): void - scroll suave a elemento
```

### `useActiveSection`

Detecta automáticamente cuál sección está en viewport durante scroll.

```jsx
const activeSection = useActiveSection(["perfil", "experiencia", "contacto"]);
// Retorna el ID de la sección visible
// Usado en navbar para resaltar
```

---

## 🧩 Componentes Principales

### Header

Encabezado con controles de tema, idioma, impresión y descargas.

**Props:**

- `theme`, `toggleTheme`, `lang`, `toggleLang`, `handlePrint`, `t`

### Section

Wrapper reutilizable para las secciones principales del CV.

**Props:**

- `id` - Identificador único (usado para navegación)
- `title` - Título de la sección
- `children` - Contenido

### ProfileSection

Sección de perfil con información personal.

### OffersSection

Propuestas de valor y servicios.

### EducationSection

Formación académica y cursos.

### SkillsSection

Habilidades técnicas organizadas por categoría.

### ProjectsSection

Proyectos destacados con descripción y enlaces.

### ContactSection

Formulario de contacto con validación y EmailJS.

### ErrorBoundary

Capturador de errores para mejorar resiliencia.

### SEOHead

Gestión centralizada de meta tags y schema markup.

### PrintView

Vista optimizada para imprimir el CV.

---

## 🏗️ Arquitectura

### Capas de Arquitectura

```
┌──────────────────────────────────┐
│      UI Layer (Components)       │
│  - Presentacionales              │
│  - Lógica mínima                 │
│  - Reutilizables                 │
└────────────┬─────────────────────┘
             │
┌────────────▼─────────────────────┐
│     Logic Layer (Hooks)          │
│  - Lógica compartida             │
│  - Estado de aplicación          │
│  - Efectos secundarios           │
└────────────┬─────────────────────┘
             │
┌────────────▼─────────────────────┐
│  Utility Layer (Utils & Constants)│
│  - Funciones puras               │
│  - Configuración                 │
│  - Helpers                       │
└────────────┬─────────────────────┘
             │
┌────────────▼─────────────────────┐
│   Data Layer (Static Data)       │
│  - Datos estáticos               │
│  - Configuración                 │
│  - Constantes                    │
└──────────────────────────────────┘
```

### Flujo de Datos

```
Usuario interactúa
    ↓
Component handler
    ↓
Hook (useTheme, useLang, etc.)
    ↓
State update (localStorage)
    ↓
Re-render del componente
    ↓
Actualización de UI
```

### Patrones Implementados

1. **Custom Hooks** - Encapsulación de lógica reutilizable
2. **Component Composition** - Construcción de UI con componentes simples
3. **Error Boundaries** - Captura de errores en árbol de componentes
4. **Lazy Loading** - Carga bajo demanda de componentes
5. **Controlled Components** - Formularios controlados por React
6. **Memoization** - Optimización de renders

---

## 🧪 Testing

### Ejecutar Tests

```bash
# Todos los tests
npm run test

# Watch mode (re-ejecuta al cambiar archivos)
npm run test -- --watch

# Coverage report
npm run test -- --coverage
```

### Archivos de Test

```
✅ src/components/__tests__/Header.test.jsx (2 tests)
✅ src/components/__tests__/ProfileSection.test.jsx (4 tests)
✅ src/hooks/__tests__/useTheme.test.js (3 tests)
✅ src/utils/__tests__/seo.test.js (4 tests)

Total: 13 tests - 100% pasando
```

### Estructura de Tests

```jsx
import { render, screen } from "@testing-library/react";
import { MiComponente } from "../MiComponente";

describe("MiComponente", () => {
  it("renders correctly", () => {
    render(<MiComponente />);
    expect(screen.getByText("contenido")).toBeInTheDocument();
  });
});
```

---

## ♿ Accesibilidad (WCAG AA)

### Implementaciones

- ✅ Atributos ARIA en componentes interactivos
- ✅ Keyboard navigation completa (Tab, Enter, Escape)
- ✅ Contraste de colores conforme a WCAG AA
- ✅ Landmarks semánticos HTML5
- ✅ Etiquetas descriptivas en formularios (`<label>`)
- ✅ Textos alternativos en imágenes (`alt` tags)
- ✅ Anuncios de cambios dinámicos (`aria-live`)
- ✅ Roles ARIA apropiados

---

## 🔍 SEO

### Optimizaciones Implementadas

- ✅ Meta tags dinámicos (title, description, keywords)
- ✅ Open Graph tags (redes sociales)
- ✅ Twitter Card markup
- ✅ Schema markup JSON-LD (Person schema)
- ✅ Sitemap.xml para indexación
- ✅ Robots.txt configurado
- ✅ URLs canónicas
- ✅ Lazy loading optimizado
- ✅ Performance optimizado (Lighthouse)

---

## 📱 PWA Features

### Características de Aplicación Web

- 📲 **Instalable** - Instala como app nativa
- 🔌 **Offline** - Funciona sin conexión a internet
- ⚡ **Rápido** - Caché inteligente con Service Workers
- 🔄 **Actualizaciones** - Updates automáticos
- 📦 **App-like** - Experiencia de aplicación nativa
- 🖼️ **Icono** - En pantalla de inicio

### Instalación

**Desktop (Chrome/Edge):**

- Click en ícono de instalación en la barra de direcciones

**Mobile (Android):**

- Menú → Instalar aplicación

**iOS:**

- Compartir → Agregar a pantalla de inicio

---

## 🚀 Deployment

### GitHub Pages

```bash
npm run deploy
# Despliego automático a gh-pages
```

### Firebase Hosting

```bash
firebase login
npm run deploy:firebase
```

---

## 📈 Performance

### Métricas

- **Bundle Size**: 433KB (135KB gzipped)
- **Tests**: 13/13 pasando ✅
- **Lighthouse**: 90+ en todas las métricas
- **Build Time**: ~2 segundos

### Optimizaciones

- 🔄 Code splitting automático
- 🖼️ Lazy loading de imágenes
- 📦 Service Workers para caché
- ⚡ Minificación de assets
- 🎬 Animaciones GPU-optimizadas

---

## 🤝 Contribuir

### Pasos para Contribuir

1. **Fork** el repositorio
2. **Crea una rama** para tu feature:
   ```bash
   git checkout -b feature/tu-nueva-feature
   ```
3. **Haz cambios** siguiendo los estándares:
   - Código limpio y bien documentado
   - Tests para nuevas funcionalidades
   - Linting: `npm run lint`
4. **Commit** descriptivo:
   ```bash
   git commit -m "Add: descripción clara"
   ```
5. **Push** y **abre un Pull Request**

### Estándares de Código

- **Componentes**: PascalCase
- **Hooks**: camelCase + "use" prefix
- **Funciones**: camelCase
- **Constantes**: SCREAMING_SNAKE_CASE
- **CSS**: Clases Tailwind

Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para más detalles.

---

## 📚 Documentación Adicional

- **[COMPONENTS.md](./COMPONENTS.md)** - Documentación detallada de componentes
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Arquitectura y patrones
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guía de contribución

---

## 🐛 Reportar Issues

¿Encontraste un bug?

- Abre un [issue](https://github.com/fpalacioschaves/cv-react/issues)
- Describe el problema claramente
- Incluye pasos para reproducir
- Adjunta capturas si es relevante

---

## 📝 Licencia

Este proyecto está disponible bajo licencia **MIT**.

Ver [LICENSE](./LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Francisco Palacios**

Profesor de Desarrollo de Aplicaciones Web y Desarrollador Fullstack con experiencia en React, Node.js y tecnologías web modernas.

### Enlaces

- 🌐 **Portafolio**: [https://fpalacioschaves.github.io/cv-react](https://fpalacioschaves.github.io/cv-react)
- 🐙 **GitHub**: [https://github.com/fpalacioschaves](https://github.com/fpalacioschaves)
- 💼 **LinkedIn**: [https://linkedin.com/in/fpalacioschaves](https://linkedin.com/in/fpalacioschaves)
- 📧 **Email**: fpalacioschaves@gmail.com
- 📱 **Teléfono**: +34 655 92 54 98

---

## 🙏 Agradecimientos

- React team por la excelente documentación
- Tailwind CSS por el framework de estilos
- Framer Motion por las animaciones
- La comunidad de desarrolladores

---

<div align="center">

Hecho con ❤️ y React ⚛️

Si te gustó este proyecto, dale una ⭐ en GitHub

</div>
