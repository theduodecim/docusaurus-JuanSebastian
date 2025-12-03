import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Juan Sebastián Portafolio',
  tagline: 'Arquitecto de Soluciones Digitales & Creador de @DuodecimStudio',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://thedoodecim.github.io',
  baseUrl: '/portafolio-juanSebastian/',

  organizationName: 'TheDuodecim',
  projectName: 'portafolio-JuanSebastian',
  deploymentBranch: 'main',
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  scripts: [
    {
    src: "/js/schema-person.js",
    }
  ],

  presets: [
    [
      'classic',
      {
         gtag: {
          trackingID: 'G-Z68R4TTDY3',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/TheDuodecim/juan-sebastian-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/TheDuodecim/juan-sebastian-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
    { name: 'description', content: 'Portafolio profesional de Juan Sebastián, Arquitecto de Soluciones.' },
    { name: 'keywords', content: 'portafolio, arquitectura, software, cloud, liderazgo técnico' },

    { property: 'og:title', content: 'Juan Sebastián – Portafolio' },
    { property: 'og:description', content: 'Arquitecto de Soluciones Digitales.' },
    { property: 'og:image', content: 'img/logo_personal_cube.png' },
    { property: 'og:type', content: 'website' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Juan Sebastián – Portafolio' },
    { name: 'twitter:image', content: 'img/logo_personal_cube.png' },
  

    { property: 'og:title', content: 'Juan Sebastián – Arquitecto de Soluciones Digitales' },
    { property: 'og:description', content: 'Explorá mi experiencia en arquitectura de software, cloud, liderazgo técnico y diseño de soluciones.' },
    { property: 'og:image', content: 'img/preview.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://portafolio-juanSebastian.duodecimstudio.com.ar' },
    { property: 'og:site_name', content: 'Portafolio de Juan Sebastián' },
    { property: 'og:locale', content: 'es_AR' },

  ],

    image: 'img/open_graph_image.png',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
    },
    
    navbar: {
      title: 'Juan Sebastian CV',
      logo: {
        alt: 'Juan Sebastian Logo',
        src: 'img/logo_personal.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'techSidebar',
          position: 'left',
          label: 'Tech Stack & Wiki',
        },
        {
          href: 'https://www.linkedin.com/in/juan-sebastian-42ab7aa5/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://duodecimstudio.com.ar',
          label: 'DuodecimStudio ↗',
          position: 'right',
        },
      ],
    },
    
    // FOOTER ARREGLADO - Mejor distribución
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Conocimiento',
          items: [
            {
              label: 'Resumen de Trayectoria (CV)',
              to: '/docs/trayectoria/resumen',
            },
            {
              label: 'Stack Core & Skills',
              to: '/docs/trayectoria/stack-core',
            },
            {
              label: 'Arquitectura de Sistemas',
              to: '/docs/arquitectura/ecosistema-duodecimstudio',
            },
          ],
        },
        {
          title: 'Ecosistema',
          items: [
            {
              label: 'DuodecimStudio',
              href: 'https://duodecimstudio.com.ar',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TheDuodecim',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/juan-sebastian-42ab7aa5/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Juan Sebastián Portafolio · Creador de @DuodecimStudio · Built with Docusaurus`,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;