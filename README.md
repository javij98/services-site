# services-site

Landing bilingue (ES/EN) para oferta de servicios tech: MVPs web, automatizaciones, integraciones y mantenimiento mensual.

Implementada con Astro (sin frameworks UI adicionales), contenido i18n centralizado y componentes reutilizables.

## 1) Estado del proyecto

- Tema visual: `Dark DevOps` (fondo `slate-950`, cards oscuras, acentos cian/emerald).
- Idiomas activos: Espanol e Ingles.
- Rutas publicas:
  - `/` redirige a `/es` (302).
  - `/es` landing en espanol.
  - `/en` landing en ingles.
  - `/404` pagina de no encontrado (texto ES + EN).
- SEO base implementado:
  - `meta description`
  - `og:title` y `og:description`
  - `canonical` + `hreflang` condicionales segun env
  - sitemap con `@astrojs/sitemap`
  - `robots.txt`
- Contacto y enlaces parametrizados por variables de entorno publicas.

## 2) Stack tecnico

- Astro `^5.17.1`
- `@astrojs/sitemap` `^3.7.0`
- TypeScript en modo estricto via `astro/tsconfigs/strict`
- CSS global custom (sin Tailwind runtime ni librerias de UI)

## 3) Estructura del proyecto

```text
services-site/
├── astro.config.mjs
├── package.json
├── .env.example
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── components/
    │   ├── CardGrid.astro
    │   ├── Faq.astro
    │   ├── PackageCard.astro
    │   ├── ProcessSteps.astro
    │   └── Section.astro
    ├── data/
    │   └── siteContent.ts
    ├── layouts/
    │   └── Layout.astro
    ├── pages/
    │   ├── 404.astro
    │   ├── index.astro
    │   ├── en/index.astro
    │   └── es/index.astro
    └── styles/
        └── global.css
```

## 4) Arquitectura funcional

### 4.1 Contenido i18n centralizado

Toda la copia de la landing vive en `src/data/siteContent.ts`:

- `type Lang = "es" | "en"`
- `content: Record<Lang, SiteContent>`
- Modelo por idioma:
  - `meta`
  - `hero`
  - `what`
  - `packages`
  - `maintenance`
  - `process`
  - `faq`
  - `contact`

Esto evita duplicacion de copy entre `src/pages/es/index.astro` y `src/pages/en/index.astro`.

### 4.2 Paginas

- `src/pages/es/index.astro`:
  - fija `lang = "es"`
  - `t = content[lang]`
  - renderiza secciones Hero, What, Packages, Maintenance, Process, FAQ y Contact.
- `src/pages/en/index.astro`:
  - mismo patron con `lang = "en"`.
- `src/pages/index.astro`:
  - `Astro.redirect('/es', 302)` (no tocar salvo cambio de estrategia de idioma default).
- `src/pages/404.astro`:
  - mensaje simple y enlaces a `/es` y `/en`.

### 4.3 Layout base

`src/layouts/Layout.astro` concentra:

- `<head>` SEO base (description + OpenGraph).
- Canonical y alternates `hreflang` cuando existe `PUBLIC_SERVICES_URL`.
- Header con nav y switch de idioma.
- Logica de enlaces al CV por idioma.
- Script inline para efecto de glow que sigue al cursor (`--mouse-x`, `--mouse-y`).

### 4.4 Componentes reutilizables

- `Section.astro`: wrapper de seccion con `id` + `h2`.
- `CardGrid.astro`: grid responsive para tarjetas.
- `PackageCard.astro`: card de paquete (`name`, `forWho`, `bullets`, `priceHint`).
- `ProcessSteps.astro`: listado numerado de proceso.
- `Faq.astro`: acordeon accesible con `<details>/<summary>`.

## 5) UI / UX (Dark DevOps)

Definido en `src/styles/global.css`:

- Paleta base:
  - Fondo `#020617`
  - Superficie card `rgba(15, 23, 42, 0.6)`
  - Texto principal `#f1f5f9`
  - Texto secundario `#94a3b8`
  - Borde `#1e293b`
  - Acento `#06b6d4`
  - Exito `#10b981`
- Tipografias:
  - `Inter` para texto.
  - `JetBrains Mono` para badges, indices y botones.
- Efectos:
  - Header glassmorphism (`backdrop-filter`).
  - Hover suave en cards/botones.
  - Top border luminosa en cards.
  - Glow radial difuminado que sigue el raton en `.card`, `.process-step` y `.btn`.
  - Ajustes responsive para mobile.

## 6) SEO y discoverability

### 6.1 Meta tags

En `Layout.astro`:

- `<meta name="description" ...>`
- `<meta property="og:title" ...>`
- `<meta property="og:description" ...>`
- `title` compuesto: `${title} — ${siteName}`

### 6.2 Canonical y hreflang

Se generan solo si `PUBLIC_SERVICES_URL` tiene valor.

- Canonical: URL base + pathname actual.
- Alternates:
  - `hreflang="es"` hacia equivalente en `/es`.
  - `hreflang="en"` hacia equivalente en `/en`.
- Reglas de path resueltas automaticamente por el layout.

### 6.3 Sitemap

- Integracion en `astro.config.mjs` via `@astrojs/sitemap`.
- `site` se alimenta de `PUBLIC_SERVICES_URL` (o fallback `https://services.example.com`).
- Resultado build: `dist/sitemap-index.xml` y `dist/sitemap-0.xml`.

### 6.4 Robots

`public/robots.txt`:

- Permite indexacion global.
- Incluye placeholder de sitemap para dominio final:
  - `https://services.TU_DOMINIO.com/sitemap-index.xml`

Recuerda actualizar este dominio al publicar en produccion.

## 7) Variables de entorno

Archivo base: `.env.example`

Importante: `.env.example` no se carga automaticamente.  
Para desarrollo local crea `.env.local` con los valores reales.

| Variable | Uso | Fallback actual |
| --- | --- | --- |
| `PUBLIC_SITE_NAME` | Nombre de marca en title/meta/logo | `Javier Jimenez` |
| `PUBLIC_CONTACT_EMAIL` | Email para el boton de contacto (`mailto`) | `jjime981@gmail.com` |
| `PUBLIC_CV_URL` | Base URL del CV/portfolio (se concatena `/{lang}`) | `https://javier-jimenez-molina.vercel.app` |
| `PUBLIC_SERVICES_URL` | Base URL canonica de este sitio (SEO + sitemap site) | vacio en layout, `https://services.example.com` en config de build |

Notas de implementacion:

- Si `PUBLIC_CONTACT_EMAIL` incluye `mailto:`, se limpia para evitar `mailto:mailto:...`.
- Si `PUBLIC_CV_URL` no trae protocolo, se normaliza a `https://...`.
- En landing, el contacto usa env y no el valor hardcodeado de `siteContent.ts`.

## 8) Comandos de trabajo

```bash
npm install
npm run dev
npm run build
npm run preview
```

Scripts definidos en `package.json`:

- `dev`: arranca Astro en local.
- `build`: build estatico en `dist/`.
- `preview`: sirve el build localmente.
- `astro`: passthrough de CLI Astro.

## 9) Flujo recomendado de desarrollo

1. Copia `.env.example` a `.env.local`.
2. Completa al menos:
   - `PUBLIC_CONTACT_EMAIL`
   - `PUBLIC_CV_URL`
   - `PUBLIC_SITE_NAME`
   - `PUBLIC_SERVICES_URL` (si quieres validar canonical/hreflang exactos)
3. Arranca `npm run dev`.
4. Verifica rutas:
   - `http://localhost:4321/` -> redirige a `/es`
   - `http://localhost:4321/es`
   - `http://localhost:4321/en`
   - `http://localhost:4321/404`
5. Lanza `npm run build` antes de commitear.
6. Revisa `dist/` y sitemap generado.

## 10) Personalizacion de contenido

### Cambiar copy ES/EN

Editar `src/data/siteContent.ts`.

### Cambiar estructura de secciones

Editar `src/pages/es/index.astro` y `src/pages/en/index.astro` (idealmente manteniendo el mismo orden para paridad).

### Cambiar look & feel

Editar `src/styles/global.css`:

- tokens (`:root`)
- cards
- botones
- animaciones/hover

### Cambiar comportamiento SEO global

Editar `src/layouts/Layout.astro` y `astro.config.mjs`.

## 11) Checklist pre-produccion

- [ ] Configurar `PUBLIC_SERVICES_URL` con dominio real.
- [ ] Configurar `PUBLIC_CONTACT_EMAIL` final.
- [ ] Configurar `PUBLIC_CV_URL` final.
- [ ] Revisar `PUBLIC_SITE_NAME`.
- [ ] Actualizar `public/robots.txt` con dominio real del sitemap.
- [ ] Validar canonical/hreflang en HTML generado.
- [ ] Ejecutar `npm run build` sin errores.

## 12) Publicar en un nuevo repositorio GitHub (javij98)

Cuando quieras subirlo a tu nuevo repo:

```bash
# estando en la raiz del proyecto
git status
git add .
git commit -m "docs: add complete project README"

# si el repo remoto aun no existe localmente:
git remote add origin git@github.com:javij98/services-site.git

# o si ya existe origin y quieres apuntarlo al nuevo:
# git remote set-url origin git@github.com:javij98/services-site.git

git branch -M main
git push -u origin main
```

Si prefieres HTTPS:

```bash
git remote add origin https://github.com/javij98/services-site.git
```

## 13) Notas tecnicas relevantes

- Proyecto sin dependencias extra de UI ni formularios complejos.
- Arquitectura simple y mantenible para landing de servicios.
- Diseñado para SSR/SSG de Astro con salida estatica.
- El contenido comercial vive en codigo (no CMS), priorizando rapidez de iteracion.
