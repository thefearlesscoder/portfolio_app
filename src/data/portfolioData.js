export const portfolioData = {
  name: "Vivek Kumar",
  role: "Aspiring SOFTWARE DEVELOPMENT ENGINEER",
  description: "Building scalable systems & delightful products.\nOpen to roles globally — India, EU, US, remote.",
  badges: [
    { text: "Final Year at MNNIT Allahabad", highlight: false },
    { text: "OPEN TO RELOCATION", highlight: false },
    { text: "📍 India", highlight: false, isLocation: true }
  ],
  stats: [
    { value: "12+", label: "PROJECTS" },
    { value: "3", label: "YRS EXP" },
    { value: "500+", label: "COMMITS" }
  ],
  currentProject: {
    title: "CURRENTLY BUILDING",
    name: "MNNIT Athletics Club dedicated website",
    link: "github.com/yourname/taskq"
  },
  socialLinks: {
    github: "https://github.com/thefearlesscoder",
    linkedin: "https://linkedin.com",
    email: "mailto:vivekkumarhari03@gmail.com",
    resume: "/off_campus.pdf"
  },
  projects: [
    {
      id: "taskq",
      name: "TaskQ",
      status: "LIVE",
      link: "https://github.com/thefearlesscoder/taskq",
      description: "Distributed task queue with Redis-backed persistence, retry logic, dead-letter queues. Handles 10k req/s.",
      tags: [
        { name: "Go", highlight: true },
        { name: "Redis", highlight: true },
        { name: "Docker", highlight: false },
        { name: "k8s", highlight: false }
      ]
    },
    {
      id: "codecollab",
      name: "CodeCollab",
      status: "LIVE",
      link: "https://github.com/thefearlesscoder/codecollab",
      description: "Real-time collaborative code editor with CRDT-based conflict resolution and syntax highlighting.",
      tags: [
        { name: "React", highlight: true },
        { name: "WebSockets", highlight: true },
        { name: "Node.js", highlight: false }
      ]
    },
    {
      id: "minidb",
      name: "MiniDB",
      status: null,
      link: "https://github.com/thefearlesscoder/minidb",
      description: "Toy relational DB with B-tree indexing, basic SQL parser, and WAL for crash recovery. Educational project.",
      tags: [
        { name: "C++", highlight: true },
        { name: "B-tree", highlight: false },
        { name: "WAL", highlight: false }
      ]
    },
    {
      id: "infra-monitor",
      name: "Infra Monitor",
      status: null,
      link: "https://github.com/thefearlesscoder/infra-monitor",
      description: "Self-hosted metrics dashboard with Prometheus + Grafana, alerting via Slack webhooks.",
      tags: [
        { name: "Prometheus", highlight: true },
        { name: "Grafana", highlight: false },
        { name: "Python", highlight: false }
      ]
    }
  ],
  skills: [
    {
      category: "LANGUAGES",
      items: [
        { name: "C++", level: 50 },
        { name: "Java", level: 80 },
        { name: "Python", level: 70 },
        { name: "C", level: 55 }
      ]
    },
    {
      category: "SYSTEMS & CLOUD",
      items: [
        { name: "AWS / GCP", level: 75 },
        { name: "Kubernetes", level: 65 },
        { name: "Kafka", level: 60 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 40}
      ]
    },
    {
      category: "FRONTEND",
      items: [
        { name: "React", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "Next.js", level: 60 },
        { name: "REST / gRPC", level: 80 }
      ]
    }
  ],
  experience: [
    {
      id: "acme",
      company: "Acme Corp",
      location: "New Delhi",
      role: "SDE-II · Backend & Platform",
      period: "Jul 2023 → Present",
      dotColor: "#4a9"
    },
    {
      id: "startupxyz",
      company: "StartupXYZ",
      location: "Remote",
      role: "SDE-I · Full-stack",
      period: "Jun 2022 → Jun 2023",
      dotColor: "#2a5"
    },
    {
      id: "edu",
      company: "IIT / NIT",
      location: "B.Tech CS",
      role: "Computer Science & Engineering",
      period: "2018 → 2022",
      dotColor: "#444"
    }
  ],
  contact: {
    heading: "Open to SDE roles globally",
    subheading: "Visa sponsorship welcome · Remote or on-site · Available Q3 2026"
  }
};
