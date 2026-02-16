export type Lang = 'es' | 'en';

type WhatCard = {
  title: string;
  description: string;
  icon: 'rocket' | 'workflow' | 'plug-zap' | 'shield-check';
};

type PackageItem = {
  name: string;
  forWho: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
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
    cards: WhatCard[];
  };
  packages: {
    title: string;
    intro: string;
    footnote: string;
    items: PackageItem[];
  };
  maintenance: {
    title: string;
    headline: string;
    text: string;
    uptimeLabel: string;
    uptimeValue: string;
    coverage: string[];
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
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
      hint: string;
    };
  };
};

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
      ctaPrimaryLabel: 'Agendar',
      ctaPrimaryHref: '#contact',
      ctaSecondaryLabel: 'Servicios',
      ctaSecondaryHref: '#what',
    },
    what: {
      title: 'Que puedo resolver',
      cards: [
        {
          title: 'MVP en produccion',
          description: 'Lanza una primera version util en semanas, con foco en adopcion y feedback real.',
          icon: 'rocket',
        },
        {
          title: 'Automatizacion operativa',
          description: 'Conecta CRM, pagos, email y soporte para eliminar pasos manuales.',
          icon: 'workflow',
        },
        {
          title: 'Integraciones API confiables',
          description: 'Sincroniza sistemas criticos con autenticacion robusta y manejo de errores.',
          icon: 'plug-zap',
        },
        {
          title: 'Mantenimiento continuo',
          description: 'Reduce riesgos con monitorizacion, backups verificados y mejoras constantes.',
          icon: 'shield-check',
        },
      ],
    },
    packages: {
      title: 'Paquetes para acelerar',
      intro: 'Elige una ruta de ejecucion clara y empieza con entregables desde la primera semana.',
      footnote: 'Orientativo segun alcance.',
      items: [
        {
          name: 'MVP Launch',
          forWho: 'Para equipos que necesitan validar una idea en pocas semanas.',
          bullets: [
            'Definicion de alcance y arquitectura inicial.',
            'Desarrollo de funcionalidades clave y despliegue.',
            'Base de analitica y documentacion para evolucionar.',
          ],
          ctaLabel: 'Solicitar MVP Launch',
          ctaHref: '#contact',
        },
        {
          name: 'Automation Sprint',
          forWho: 'Para negocios con procesos repetitivos que frenan al equipo.',
          bullets: [
            'Mapeo de flujo actual y puntos de bloqueo.',
            'Automatizaciones entre herramientas con reglas claras.',
            'Alertas y trazabilidad para reducir errores operativos.',
          ],
          ctaLabel: 'Reservar Automation Sprint',
          ctaHref: '#contact',
          featured: true,
        },
        {
          name: 'Integration Boost',
          forWho: 'Para productos que necesitan conectar sistemas sin deuda tecnica.',
          bullets: [
            'Integracion de APIs con autenticacion y manejo de errores.',
            'Sincronizacion de datos confiable entre plataformas.',
            'Pruebas y monitoreo basico post-lanzamiento.',
          ],
          ctaLabel: 'Activar Integration Boost',
          ctaHref: '#contact',
        },
      ],
    },
    maintenance: {
      title: 'Mantenimiento mensual',
      headline: 'Duerme tranquilo mientras tu producto sigue vendiendo.',
      text: 'Gestiono la operacion tecnica, prevengo incidencias y mantengo tu stack estable para que tu equipo se enfoque en negocio.',
      uptimeLabel: 'Uptime',
      uptimeValue: '99.9%',
      coverage: [
        'Parches de seguridad y actualizacion de dependencias.',
        'Backups automaticos con pruebas de restauracion.',
        'Monitorizacion de errores, latencia y disponibilidad 24/7.',
        'Respuesta a incidencias criticas con protocolo acordado.',
        'Bolsa de mejoras tecnicas para evolucion continua.',
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
      emailLabel: 'Email directo',
      emailHref: 'mailto:contacto@example.com',
      cvLabel: 'Sobre mi',
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Email',
        emailPlaceholder: 'tu@email.com',
        companyLabel: 'Empresa (opcional)',
        companyPlaceholder: 'Nombre de empresa',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuéntame brevemente tu proyecto, objetivo y timeline.',
        submitLabel: 'Enviar consulta',
        hint: 'Te responderé por email con el siguiente paso recomendado.',
      },
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
      ctaPrimaryLabel: 'Book a call',
      ctaPrimaryHref: '#contact',
      ctaSecondaryLabel: 'Services',
      ctaSecondaryHref: '#what',
    },
    what: {
      title: 'What I help you solve',
      cards: [
        {
          title: 'Production-ready MVPs',
          description: 'Ship a usable first release fast, focused on user adoption and measurable feedback.',
          icon: 'rocket',
        },
        {
          title: 'Operational automations',
          description: 'Connect CRM, billing, email and support flows to eliminate repetitive manual work.',
          icon: 'workflow',
        },
        {
          title: 'Reliable API integrations',
          description: 'Sync critical systems with solid auth, observability and error handling.',
          icon: 'plug-zap',
        },
        {
          title: 'Continuous maintenance',
          description: 'Keep your platform stable with monitoring, verified backups and constant improvements.',
          icon: 'shield-check',
        },
      ],
    },
    packages: {
      title: 'Packages to accelerate',
      intro: 'Choose a clear execution path and start delivering outcomes from the first week.',
      footnote: 'Indicative, depends on scope.',
      items: [
        {
          name: 'MVP Launch',
          forWho: 'For teams that need to validate a product idea quickly.',
          bullets: [
            'Scope definition and initial architecture.',
            'Core feature development and deployment.',
            'Analytics baseline and handoff documentation.',
          ],
          ctaLabel: 'Start MVP Launch',
          ctaHref: '#contact',
        },
        {
          name: 'Automation Sprint',
          forWho: 'For businesses slowed down by repetitive manual processes.',
          bullets: [
            'Current workflow mapping and bottleneck review.',
            'Tool-to-tool automations with clear business rules.',
            'Alerts and traceability to reduce operational mistakes.',
          ],
          ctaLabel: 'Book Automation Sprint',
          ctaHref: '#contact',
          featured: true,
        },
        {
          name: 'Integration Boost',
          forWho: 'For products that need reliable system connectivity.',
          bullets: [
            'API integrations with auth and error handling.',
            'Stable cross-platform data synchronization.',
            'Testing and baseline post-release monitoring.',
          ],
          ctaLabel: 'Activate Integration Boost',
          ctaHref: '#contact',
        },
      ],
    },
    maintenance: {
      title: 'Monthly maintenance',
      headline: 'Sleep easy while your product keeps generating revenue.',
      text: 'I run technical operations, prevent incidents, and keep your stack healthy so your team can focus on growth.',
      uptimeLabel: 'Uptime',
      uptimeValue: '99.9%',
      coverage: [
        'Security patching and dependency management.',
        'Automated backups with restoration testing.',
        '24/7 monitoring for errors, latency and availability.',
        'Critical incident response under agreed SLAs.',
        'Monthly technical improvement bandwidth.',
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
      emailLabel: 'Direct email',
      emailHref: 'mailto:contacto@example.com',
      cvLabel: 'About me',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        companyLabel: 'Company (optional)',
        companyPlaceholder: 'Company name',
        messageLabel: 'Message',
        messagePlaceholder: 'Share a quick summary of your project, goal, and expected timeline.',
        submitLabel: 'Send inquiry',
        hint: 'I will reply by email with the best next step.',
      },
    },
  },
};
