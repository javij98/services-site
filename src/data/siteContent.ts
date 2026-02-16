export type Lang = 'es' | 'en';

type PackageItem = {
  name: string;
  forWho: string;
  bullets: string[];
  priceHint: string;
};

type MaintenancePlan = {
  name: string;
  bullets: string[];
  priceHint: string;
};

type ProcessStep = {
  name: string;
  text: string;
};

type FaqItem = {
  q: string;
  a: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimaryLabel: string;
    ctaPrimaryHref: string;
    ctaSecondaryLabel: string;
    ctaSecondaryHref: string;
  };
  what: {
    title: string;
    bullets: string[];
  };
  packages: {
    title: string;
    note: string;
    items: PackageItem[];
  };
  maintenance: {
    title: string;
    note: string;
    plans: MaintenancePlan[];
  };
  process: {
    title: string;
    steps: ProcessStep[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  contact: {
    title: string;
    text: string;
    emailLabel: string;
    emailHref: string;
    cvLabel: string;
  };
};

const orientativeLabelEs = 'Orientativo segun alcance';
const orientativeLabelEn = 'Indicative, depends on scope';

export const content: Record<Lang, SiteContent> = {
  es: {
    meta: {
      title: 'MVPs, automatizaciones e integraciones',
      description:
        'Desarrollo web apps, automatizaciones e integraciones para que lances rapido y mantengas tu producto estable cada mes.',
    },
    hero: {
      headline: 'Web apps para lanzar, automatizaciones para escalar',
      subheadline:
        'Construyo MVPs en produccion, conecto tus herramientas y me encargo del mantenimiento mensual para que tu equipo avance sin friccion.',
      ctaPrimaryLabel: 'Contar mi proyecto',
      ctaPrimaryHref: '#contact',
      ctaSecondaryLabel: 'Ver paquetes',
      ctaSecondaryHref: '#packages',
    },
    what: {
      title: 'Que puedo resolver',
      bullets: [
        'MVPs web con foco en tiempo de salida y validacion real.',
        'Automatizaciones entre CRM, pagos, email, soporte y operaciones internas.',
        'Integraciones API para eliminar tareas manuales y errores de sincronizacion.',
        'Mantenimiento mensual con seguridad, backups, monitorizacion y mejoras pequenas.',
      ],
    },
    packages: {
      title: 'Paquetes para empezar',
      note: 'Elegimos el paquete segun tu contexto y definimos alcance desde la primera llamada.',
      items: [
        {
          name: 'MVP Launch',
          forWho: 'Para equipos que necesitan validar una idea en pocas semanas.',
          bullets: [
            'Definicion de alcance y arquitectura inicial.',
            'Desarrollo de funcionalidades clave y despliegue.',
            'Base de analitica y documentacion para evolucionar.',
          ],
          priceHint: orientativeLabelEs,
        },
        {
          name: 'Automation Sprint',
          forWho: 'Para negocios con procesos repetitivos que frenan al equipo.',
          bullets: [
            'Mapeo de flujo actual y puntos de bloqueo.',
            'Automatizaciones entre herramientas con reglas claras.',
            'Alertas y trazabilidad para reducir errores operativos.',
          ],
          priceHint: orientativeLabelEs,
        },
        {
          name: 'Integration Boost',
          forWho: 'Para productos que necesitan conectar sistemas sin deuda tecnica.',
          bullets: [
            'Integracion de APIs con autenticacion y manejo de errores.',
            'Sincronizacion de datos confiable entre plataformas.',
            'Pruebas y monitoreo basico post-lanzamiento.',
          ],
          priceHint: orientativeLabelEs,
        },
      ],
    },
    maintenance: {
      title: 'Mantenimiento mensual',
      note: 'Planes continuos para cuidar la salud del producto mientras sigues entregando valor.',
      plans: [
        {
          name: 'Plan Base',
          bullets: [
            'Actualizaciones de seguridad y dependencias.',
            'Backups verificados y restauracion documentada.',
            'Monitorizacion de disponibilidad y errores criticos.',
          ],
          priceHint: orientativeLabelEs,
        },
        {
          name: 'Plan Continuo',
          bullets: [
            'Todo lo del Plan Base.',
            'Bolsa mensual para mejoras pequenas priorizadas.',
            'Revision de rendimiento y optimizaciones puntuales.',
          ],
          priceHint: orientativeLabelEs,
        },
        {
          name: 'Plan Evolucion',
          bullets: [
            'Todo lo del Plan Continuo.',
            'Soporte de incidencias con tiempos de respuesta pactados.',
            'Iteraciones tecnicas para nuevas capacidades del producto.',
          ],
          priceHint: orientativeLabelEs,
        },
      ],
    },
    process: {
      title: 'Proceso de trabajo',
      steps: [
        {
          name: 'Diagnostico',
          text: 'Revisamos objetivo, contexto tecnico y prioridad de negocio.',
        },
        {
          name: 'Plan de accion',
          text: 'Defino alcance, entregables, hitos y riesgos antes de empezar.',
        },
        {
          name: 'Ejecucion iterativa',
          text: 'Entregas cortas con feedback continuo y visibilidad del avance.',
        },
        {
          name: 'Lanzamiento y continuidad',
          text: 'Publicamos, medimos resultados y acordamos el siguiente sprint.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: 'Cuanto tarda un MVP?',
          a: 'Depende del alcance, pero normalmente trabajamos por hitos semanales para lanzar una primera version util cuanto antes.',
        },
        {
          q: 'Puedes integrarte con mi stack actual?',
          a: 'Si. Antes de empezar reviso tu arquitectura y propongo una estrategia de integracion realista para evitar retrabajo.',
        },
        {
          q: 'Incluyes mantenimiento despues del lanzamiento?',
          a: 'Si, ofrezco planes mensuales con seguridad, backups, monitorizacion y mejoras pequenas.',
        },
        {
          q: 'Trabajas por proyecto o por bolsa mensual?',
          a: 'Ambas opciones. Podemos arrancar con un paquete cerrado y luego pasar a mantenimiento continuo.',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      text: 'Si tienes una idea o un cuello de botella operativo, escribeme y te propongo un siguiente paso claro.',
      emailLabel: 'Enviar email',
      emailHref: 'mailto:contacto@example.com',
      cvLabel: 'Ver CV',
    },
  },
  en: {
    meta: {
      title: 'MVP builds, automations and integrations',
      description:
        'I build web apps, automations and integrations so you can launch faster and keep your product healthy month after month.',
    },
    hero: {
      headline: 'Launch your web app, automate your operations',
      subheadline:
        'I ship production-ready MVPs, connect your tools, and handle monthly maintenance so your team keeps moving.',
      ctaPrimaryLabel: 'Share your project',
      ctaPrimaryHref: '#contact',
      ctaSecondaryLabel: 'View packages',
      ctaSecondaryHref: '#packages',
    },
    what: {
      title: 'What I help you solve',
      bullets: [
        'Web MVPs built for fast validation and real user feedback.',
        'Automations across CRM, billing, email, support and internal ops.',
        'API integrations that remove manual work and sync issues.',
        'Monthly maintenance covering security, backups, monitoring and small improvements.',
      ],
    },
    packages: {
      title: 'Packages to get started',
      note: 'We pick the right package for your stage and confirm scope from day one.',
      items: [
        {
          name: 'MVP Launch',
          forWho: 'For teams that need to validate a product idea quickly.',
          bullets: [
            'Scope definition and initial architecture.',
            'Core feature development and deployment.',
            'Analytics baseline and handoff documentation.',
          ],
          priceHint: orientativeLabelEn,
        },
        {
          name: 'Automation Sprint',
          forWho: 'For businesses slowed down by repetitive manual processes.',
          bullets: [
            'Current workflow mapping and bottleneck review.',
            'Tool-to-tool automations with clear business rules.',
            'Alerts and traceability to reduce operational mistakes.',
          ],
          priceHint: orientativeLabelEn,
        },
        {
          name: 'Integration Boost',
          forWho: 'For products that need reliable system connectivity.',
          bullets: [
            'API integrations with auth and error handling.',
            'Stable cross-platform data synchronization.',
            'Testing and baseline post-release monitoring.',
          ],
          priceHint: orientativeLabelEn,
        },
      ],
    },
    maintenance: {
      title: 'Monthly maintenance',
      note: 'Ongoing plans to keep your product stable while you continue shipping value.',
      plans: [
        {
          name: 'Base Plan',
          bullets: [
            'Security updates and dependency maintenance.',
            'Verified backups and restoration playbook.',
            'Availability and critical error monitoring.',
          ],
          priceHint: orientativeLabelEn,
        },
        {
          name: 'Continuous Plan',
          bullets: [
            'Everything in Base Plan.',
            'Monthly bandwidth for prioritized small improvements.',
            'Performance reviews with focused optimizations.',
          ],
          priceHint: orientativeLabelEn,
        },
        {
          name: 'Growth Plan',
          bullets: [
            'Everything in Continuous Plan.',
            'Incident support with agreed response times.',
            'Technical iterations for new product capabilities.',
          ],
          priceHint: orientativeLabelEn,
        },
      ],
    },
    process: {
      title: 'How we work',
      steps: [
        {
          name: 'Discovery',
          text: 'We align on goals, technical context, and business priorities.',
        },
        {
          name: 'Action plan',
          text: 'I define scope, deliverables, milestones and key risks up front.',
        },
        {
          name: 'Iterative execution',
          text: 'Short delivery cycles with constant feedback and visibility.',
        },
        {
          name: 'Launch and next steps',
          text: 'We release, measure impact and agree on the next sprint.',
        },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          q: 'How long does an MVP usually take?',
          a: 'It depends on scope, but we usually work in weekly milestones to release a useful first version as early as possible.',
        },
        {
          q: 'Can you work with my current stack?',
          a: 'Yes. I review your architecture first and propose a practical integration approach before implementation starts.',
        },
        {
          q: 'Do you provide post-launch maintenance?',
          a: 'Yes, monthly plans include security, backups, monitoring and small product improvements.',
        },
        {
          q: 'Do you work per project or as a monthly retainer?',
          a: 'Both. We can start with a defined package and continue with an ongoing maintenance plan.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      text: 'If you already have an idea or an operational bottleneck, email me and I will suggest a clear next step.',
      emailLabel: 'Send email',
      emailHref: 'mailto:contacto@example.com',
      cvLabel: 'View CV',
    },
  },
};
