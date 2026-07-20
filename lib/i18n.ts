export type Lang = "en" | "pt";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

type FeaturedProject = {
  name: string;
  description: string;
  tags: string[];
  language: string;
  url: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

export type Dictionary = {
  nav: { about: string; experience: string; projects: string; skills: string; contact: string };
  hero: {
    greeting: string;
    title: string;
    tagline: string;
    location: string;
    ctaGithub: string;
    ctaLinkedin: string;
    ctaResume: string;
  };
  about: { heading: string; paragraphs: string[] };
  experience: { heading: string; items: ExperienceItem[] };
  projects: {
    heading: string;
    featuredLabel: string;
    viewOnGithub: string;
    apiError: string;
    stars: string;
    featured: FeaturedProject[];
  };
  skills: { heading: string; groups: SkillGroup[] };
  contact: {
    heading: string;
    blurb: string;
    emailLabel: string;
    copy: string;
    copied: string;
  };
  footer: { builtWith: string };
};

const skillGroups = {
  en: [
    { title: "Languages & Frameworks", items: ["Java 17/21", "Spring Boot 3", "Quarkus", "Node.js", "TypeScript"] },
    { title: "Architecture", items: ["Microservices", "DDD", "Clean Architecture", "Event-Driven", "BFF"] },
    { title: "Data & Messaging", items: ["Kafka", "PostgreSQL", "MongoDB", "Redis", "Transactional Outbox"] },
    { title: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "CI/CD", "Observability"] },
    { title: "Testing", items: ["JUnit 5", "Testcontainers", "Integration Testing", "Load Testing"] },
    { title: "Security & Resilience", items: ["OAuth2 / JWT", "Keycloak", "Resilience4j", "Circuit Breakers", "AES-256"] },
  ],
  pt: [
    { title: "Linguagens & Frameworks", items: ["Java 17/21", "Spring Boot 3", "Quarkus", "Node.js", "TypeScript"] },
    { title: "Arquitetura", items: ["Microsserviços", "DDD", "Clean Architecture", "Event-Driven", "BFF"] },
    { title: "Dados & Mensageria", items: ["Kafka", "PostgreSQL", "MongoDB", "Redis", "Transactional Outbox"] },
    { title: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "CI/CD", "Observabilidade"] },
    { title: "Testes", items: ["JUnit 5", "Testcontainers", "Testes de Integração", "Testes de Carga"] },
    { title: "Segurança & Resiliência", items: ["OAuth2 / JWT", "Keycloak", "Resilience4j", "Circuit Breakers", "AES-256"] },
  ],
};

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      title: "Backend Software Engineer · Java & Cloud-Native Systems",
      tagline: "I cut latency and scale distributed systems — **30–45%** faster APIs on platforms serving **500k+ requests/day**.",
      location: "Brazil (remote-ready) · English C1 · Spanish B2",
      ctaGithub: "GitHub",
      ctaLinkedin: "LinkedIn",
      ctaResume: "Resume",
    },
    about: {
      heading: "About",
      paragraphs: [
        "4+ years designing and shipping cloud-native microservices and distributed systems at IBM, CI&T and NTT DATA.",
        "I specialize in Java (Spring Boot 3, Quarkus), event-driven architectures (Kafka, Transactional Outbox), distributed data patterns (Redis, optimistic/pessimistic locking, circuit breakers) and API performance tuning — with **30–45%** latency reductions on high-traffic enterprise systems.",
      ],
    },
    experience: {
      heading: "Experience",
      items: [
        {
          company: "IBM",
          role: "Backend Software Engineer",
          period: "May 2025 — Present",
          bullets: [
            "Cut API response times by **30–45%** (~800ms → ~450ms) on platforms handling **500k+ requests/day**.",
            "BFF architecture improvements reducing payload size by **35%**.",
            "Raised test coverage from ~40% to **~75%**.",
          ],
        },
        {
          company: "Montreal",
          role: "Backend Software Engineer",
          period: "Feb 2025 — May 2025",
          bullets: [
            "Built APIs processing **100k+ transactions/day** with a **<200ms p95** latency SLA.",
            "Implemented circuit breakers and reusable infrastructure components.",
          ],
        },
        {
          company: "CI&T (Vivo/Telefônica)",
          role: "Backend Engineer",
          period: "Oct 2024 — Feb 2025",
          bullets: [
            "Refactored critical billing workflows, cutting response time by **20%**.",
            "Modernized SOAP → REST integrations, reducing downstream failures by **40%**.",
          ],
        },
        {
          company: "NTT DATA (AbInBev/Allianz)",
          role: "Backend/Platform Engineer",
          period: "Apr 2022 — Oct 2024",
          bullets: [
            "Migrated monoliths to microservices on a platform with **2M+ monthly users**, reducing latency by **~25%**.",
            "Introduced observability: structured logging and distributed tracing.",
          ],
        },
      ],
    },
    projects: {
      heading: "Projects",
      featuredLabel: "Featured",
      viewOnGithub: "View on GitHub",
      apiError: "GitHub API is unavailable right now — showing featured projects. See all repositories on GitHub.",
      stars: "stars",
      featured: [
        {
          name: "Banking Ledger Core System",
          description:
            "Financial transaction engine with double-entry bookkeeping, Clean Architecture + DDD, Transactional Outbox (Kafka + PostgreSQL), deadlock-free pessimistic locking, AES-256 encryption and Keycloak. Handles 10k+ concurrent transactions in load tests.",
          tags: ["Java", "Kafka", "PostgreSQL", "DDD", "Keycloak"],
          language: "Java",
          url: "https://github.com/samuelbaldasso",
        },
        {
          name: "Java Subscription Platform",
          description:
            "B2C subscription platform implementing 6 distributed-systems patterns: Transactional Outbox, Optimistic Locking, Kafka idempotency, Redis caching (95%+ hit rate) and Resilience4j. 126+ integration tests with Testcontainers.",
          tags: ["Java", "Spring Boot", "Redis", "Kafka", "Testcontainers"],
          language: "Java",
          url: "https://github.com/samuelbaldasso",
        },
      ],
    },
    skills: { heading: "Skills", groups: skillGroups.en },
    contact: {
      heading: "Contact",
      blurb: "Open to remote backend roles. The fastest way to reach me is email — or find me on LinkedIn and GitHub.",
      emailLabel: "Email",
      copy: "Copy",
      copied: "Copied!",
    },
    footer: { builtWith: "Built with Next.js & Tailwind CSS" },
  },
  pt: {
    nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", skills: "Skills", contact: "Contato" },
    hero: {
      greeting: "Olá, eu sou",
      title: "Backend Software Engineer · Java & Sistemas Cloud-Native",
      tagline: "Reduzo latência e escalo sistemas distribuídos — APIs **30–45%** mais rápidas em plataformas com **500k+ requisições/dia**.",
      location: "Brasil (remote-ready) · Inglês C1 · Espanhol B2",
      ctaGithub: "GitHub",
      ctaLinkedin: "LinkedIn",
      ctaResume: "Currículo",
    },
    about: {
      heading: "Sobre",
      paragraphs: [
        "4+ anos projetando e entregando microsserviços cloud-native e sistemas distribuídos na IBM, CI&T e NTT DATA.",
        "Especialista em Java (Spring Boot 3, Quarkus), arquiteturas orientadas a eventos (Kafka, Transactional Outbox), padrões de dados distribuídos (Redis, locking otimista/pessimista, circuit breakers) e tuning de performance de APIs — com reduções de **30–45%** em latência em sistemas enterprise de alto tráfego.",
      ],
    },
    experience: {
      heading: "Experiência",
      items: [
        {
          company: "IBM",
          role: "Backend Software Engineer",
          period: "mai 2025 — atual",
          bullets: [
            "Redução de **30–45%** no tempo de resposta de APIs (~800ms → ~450ms) em plataformas com **500k+ requisições/dia**.",
            "Melhorias de arquitetura BFF com payload **35%** menor.",
            "Cobertura de testes elevada de ~40% para **~75%**.",
          ],
        },
        {
          company: "Montreal",
          role: "Backend Software Engineer",
          period: "fev 2025 — mai 2025",
          bullets: [
            "APIs com **100k+ transações/dia** e SLA de latência **<200ms p95**.",
            "Circuit breakers e componentes reutilizáveis de infraestrutura.",
          ],
        },
        {
          company: "CI&T (Vivo/Telefônica)",
          role: "Backend Engineer",
          period: "out 2024 — fev 2025",
          bullets: [
            "Refatoração de workflows críticos de billing com **-20%** no tempo de resposta.",
            "Modernização SOAP → REST com **-40%** de falhas downstream.",
          ],
        },
        {
          company: "NTT DATA (AbInBev/Allianz)",
          role: "Backend/Platform Engineer",
          period: "abr 2022 — out 2024",
          bullets: [
            "Migração de monolitos para microsserviços em plataforma com **2M+ usuários mensais**, com **~25%** menos latência.",
            "Observabilidade: logging estruturado e tracing distribuído.",
          ],
        },
      ],
    },
    projects: {
      heading: "Projetos",
      featuredLabel: "Destaque",
      viewOnGithub: "Ver no GitHub",
      apiError: "A API do GitHub está indisponível no momento — exibindo projetos em destaque. Veja todos os repositórios no GitHub.",
      stars: "estrelas",
      featured: [
        {
          name: "Banking Ledger Core System",
          description:
            "Engine de transações financeiras com double-entry bookkeeping, Clean Architecture + DDD, Transactional Outbox (Kafka + PostgreSQL), locking pessimista sem deadlocks, criptografia AES-256 e Keycloak. 10k+ transações concorrentes em testes de carga.",
          tags: ["Java", "Kafka", "PostgreSQL", "DDD", "Keycloak"],
          language: "Java",
          url: "https://github.com/samuelbaldasso",
        },
        {
          name: "Java Subscription Platform",
          description:
            "Plataforma de assinaturas B2C com 6 padrões de sistemas distribuídos: Transactional Outbox, Optimistic Locking, idempotência Kafka, cache Redis (95%+ hit rate) e Resilience4j. 126+ testes de integração com Testcontainers.",
          tags: ["Java", "Spring Boot", "Redis", "Kafka", "Testcontainers"],
          language: "Java",
          url: "https://github.com/samuelbaldasso",
        },
      ],
    },
    skills: { heading: "Skills", groups: skillGroups.pt },
    contact: {
      heading: "Contato",
      blurb: "Aberto a vagas remotas de backend. O jeito mais rápido de falar comigo é por e-mail — ou me encontre no LinkedIn e no GitHub.",
      emailLabel: "E-mail",
      copy: "Copiar",
      copied: "Copiado!",
    },
    footer: { builtWith: "Feito com Next.js & Tailwind CSS" },
  },
};

export const links = {
  github: "https://github.com/samuelbaldasso",
  linkedin: "https://linkedin.com/in/samuel-baldasso",
  email: "baldassosamuel93@gmail.com",
  resume: "/resume.pdf",
};
