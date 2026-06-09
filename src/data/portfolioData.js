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
    { value: "3", label: "PROJECTS" },
    // { },
    { value: "500+", label: "COMMITS" }
  ],
  currentProject: {
    title: "CURRENTLY BUILDING",
    name: "MNNIT Athletics Club dedicated website",
    link: "github.com/thefearlesscoder/mnnit_athletics_club"
  },
  socialLinks: {
    github: "https://github.com/thefearlesscoder",
    linkedin: "https://www.linkedin.com/in/vivekkumar2004/",
    email: "mailto:vivekkumarhari03@gmail.com",
    resume: "/off_campus.pdf"
  },
  projects: [
    {
      id: "modelsmith",
      name: "Model Smith",
      status: null, //LIVE
      link: "https://github.com/Anubhav17ambudhi/ModelSmith",
      description: "End-to-end AutoML system that generates neural architectures from CSV datasets and natural-language constraints",
      tags: [
        { name: "FastAPI", highlight: true },
        { name: "Optuna", highlight: true },
        { name: "Pytorch", highlight: true },
        { name: "MongoDB", highlight: true }
      ]
    },
    {
      id: "eventhub",
      name: "Event Hub",
      status: null, // LIVE
      link: "https://github.com/thefearlesscoder/EventHub",
      description: "A web application to help users find ideal meetup venues for an Event based on location and preferences.",
      tags: [
        { name: "React", highlight: true },
        { name: "WebSockets", highlight: true },
        { name: "Express", highlight: true},
        { name: "OAuth2", highlight: true },
        { name: "Leaflet", highlight: true}
      ]
    },
    {
      id: "techbridge",
      name: "Tech Bridge",
      status: null,
      link: "https://github.com/thefearlesscoder/Tech-Bridge",
      description: "A platform for tech enthusiasts to showcase their projects, find collaborators, and raise funds.",
      tags: [
        { name: "Stripe", highlight: true },
        { name: "Clerk", highlight: true },
        { name: "Node", highlight: false },
        { name: "React", highlight: false},
        { name: "Express", highlight: false}
      ]
    },
    
  ],
  skills: [
    {
      category: "LANGUAGES",
      items: [
        { name: "C++", level: 80 },
        { name: "Java", level: 50 },
        { name: "Python", level: 50 },
        { name: "C", level: 55 }
      ]
    },
    {
      category: "SYSTEMS & CLOUD",
      items: [
        { name: "AWS / GCP", level: 50 },
        { name: "Redis", level: 30 },
        { name: "MongoDB", level: 70 },
        { name: "Git", level: 80}
      ]
    },
    {
      category: "FRONTEND",
      items: [
        { name: "React", level: 75 },
        { name: "TypeScript", level: 50 },
        { name: "Next.js", level: 50 },
        { name: "REST / gRPC", level: 80 }
      ]
    }
  ],
  experience: [
    // {
    //   id: "acme",
    //   company: "Acme Corp",
    //   location: "New Delhi",
    //   role: "SDE-II · Backend & Platform",
    //   period: "Jul 2023 → Present",
    //   dotColor: "#4a9"
    // },
    {
      id: "startupxyz",
      company: "Open to Work",
      location: "On-site | Remote",
      role: "SDE / SWE / Full Stack Developer",
      period: "",
      dotColor: "#2a5"
    },
    {
      id: "edu",
      company: "MNNIT Allahabad",
      location: "B.Tech CS",
      role: "Computer Science & Engineering",
      period: "2023 → 2027(expected)",
      dotColor: "#2a5"
    }
  ],
  contact: {
    heading: "Open to SDE roles globally",
    subheading: "Visa sponsorship welcome · Remote or on-site · Available Q3 2026"
  }
};
