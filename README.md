# TrueCareSupply - Next.js Website

Este proyecto es una aplicación web moderna construida con Next.js 15, TypeScript y CSS Modules.

## Tecnologías Utilizadas

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático para mejor desarrollo
- **CSS Modules** - Estilos modulares y con scope local
- **React 19** - Biblioteca de UI

## Estructura del Proyecto

```
TrueCareSupply/
├── app/
│   ├── layout.tsx       # Layout principal de la aplicación
│   ├── page.tsx         # Página principal (home)
│   └── globals.css      # Estilos globales
├── components/
│   ├── Navbar.tsx       # Componente de navegación
│   ├── Hero.tsx         # Sección hero
│   ├── TrustBar.tsx     # Barra de confianza con estadísticas
│   ├── About.tsx        # Sección sobre nosotros
│   ├── Services.tsx     # Sección de servicios
│   ├── Benefits.tsx     # Sección de beneficios
│   ├── Clients.tsx      # Sección de clientes
│   ├── CTA.tsx          # Call to action
│   ├── Contact.tsx      # Sección de contacto
│   └── Footer.tsx       # Pie de página
├── public/              # Archivos estáticos
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Instalación

1. Instalar las dependencias:

```bash
npm install
```

## Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Build para Producción

Para crear una build optimizada para producción:

```bash
npm run build
```

Para ejecutar la versión de producción:

```bash
npm start
```

## Características

- ✅ Next.js 15 con App Router
- ✅ TypeScript para type safety
- ✅ CSS Modules para estilos con scope
- ✅ Componentes modulares y reutilizables
- ✅ Diseño responsive
- ✅ Animaciones y transiciones suaves
- ✅ SEO optimizado
- ✅ Navegación con scroll suave

## Componentes Principales

### Navbar

Barra de navegación fija con efecto de scroll y enlaces de navegación.

### Hero

Sección principal con título destacado, botones de CTA y tarjetas flotantes animadas.

### TrustBar

Barra con estadísticas clave de la empresa.

### About

Sección sobre la empresa con grid de información y métricas destacadas.

### Services

Grid de servicios con tarjetas interactivas con hover effects.

### Benefits

Tarjetas de beneficios con iconos y descripciones.

### Clients

Grid de tipos de clientes atendidos.

### CTA

Call-to-action con fondo gradiente y botones destacados.

### Contact

Formulario de contacto con información de la empresa.

### Footer

Pie de página con enlaces y información de contacto.

## Variables CSS Globales

El proyecto utiliza variables CSS para mantener consistencia en los colores:

- `--primary`: #0052cc
- `--primary-dark`: #003d99
- `--primary-light`: #3d7fff
- `--accent`: #00d4ff
- `--dark`: #0a1628
- `--gray`: #64748b
- `--light-bg`: #f8fafc

## Soporte de Navegadores

Este proyecto soporta los navegadores modernos más recientes:

- Chrome
- Firefox
- Safari
- Edge

## Licencia

Este proyecto está bajo la licencia especificada en el archivo LICENSE.
