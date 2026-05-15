import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "waterflow",
    title: "WaterFlow",
    period: {
      start: "04.2026",
    },
    githubUrl: "https://github.com/cts9505/WaterFlow",
    previewUrl: "https://waterflowbook.vercel.app",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Kafka",
      "SSE",
    ],
    description: `A full-stack water tanker booking platform with role-based flows for customers, captains, and admins.
- Real-time delivery tracking using Server-Sent Events (SSE).
- Optional Kafka ingestion for high-throughput location updates.
- Office creation, nearby captains discovery, and comprehensive admin dashboard.`,
    images: ["/WaterFlow.png","/wfm.png","/wfl.png","/wfd.png","/wfa.png","/waterflowsd.png"],
    isExpanded: true,
  },
  {
    id: "sharelive",
    title: "ShareLive",
    period: {
      start: "02.2026",
    },
    githubUrl: "https://github.com/cts9505/sharelive",
    previewUrl: "https://www.sharelive.site",
    skills: [
      "Next.js",
      "Fastify",
      "WebSocket",
      "Prisma",
      "PostgreSQL",
      "SDK/CLI",
    ],
    description: `A tunnel-first platform for exposing localhost to the internet, routing deployed apps through branded subdomains.
- Built a Fastify API, WebSocket tunnel server, and public proxy.
- Developed a Next.js marketing site and dashboard.
- Created an npm CLI package published as \`sharelive\`.
- Deployed backend to EC2 + PM2 + Nginx and frontend to Vercel.`,
    images: ["/sharelive.png","/slnd.png","/sldocs.png"],
    isExpanded: true,
  },
  {
    id: "baymax",
    title: "BayMax AI Healthcare Platform",
    period: {
      start: "11.2025",
    },
    githubUrl: "https://github.com/cts9505/baymax",
    skills: [
      "FastAPI",
      "Next.js",
      "LangGraph",
      "Razorpay",
      "WhatsApp Web",
      "PostgreSQL",
    ],
    description: `Production-ready, multilingual AI healthcare platform.
- Agentic medical chat and triage using LangGraph.
- Medicine ordering with Razorpay payment flow.
- WhatsApp/SMS notification and reminder workflows.
- Prescription OCR processing and Langfuse observability tracing.`,
  images: ["/bmwo.png"],
    isExpanded: true,
  },
  {
    id: "rag-model",
    title: "Medical Chatbot Backend (RAG)",
    period: {
      start: "10.2025",
    },
    githubUrl: "https://github.com/cts9505/Rag-Model",
    skills: [
      "FastAPI",
      "Pinecone",
      "Ollama",
      "LangChain",
      "HuggingFace",
    ],
    description: `A RAG (Retrieval Augmented Generation) powered medical chatbot API.
- Medical knowledge base powered by Pinecone vector database.
- Real-time streaming responses with context-aware context using RAG.
- FastAPI backend deployed on Render.`,
  },
  {
    id: "eterna-srushti",
    title: "Eterna Srushti — MHT CET Mentorship Platform",
    period: {
      start: "01.2026",
    },
    githubUrl: "https://github.com/cts9505/Eterna-srushti-mentorship",
    previewUrl: "https://www.eternasrushti.in",
    skills: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Radix UI",
      "better-auth",
      "Prisma",
      "PostgreSQL",
      "Nodemailer",
    ],
    description: `Next.js App Router application for MHT CET mentorship, counselling, and prediction workflows.
- CET predictor tools (marks/percentile/rank + college matching) and college search with multi-year cutoff trend exploration.
- Data engine with CSV-driven cutoff parsing, trend analysis, and prediction scoring.
- Authentication & user onboarding using better-auth (email/password + Google).
- Lead capture, contact flows, email notifications, and an admin dashboard with tracking logs.`,
  images: ["/eterna.png","/eternacs.png","/eternap.png","/eternapr.png","/eternalogin.png"],
    isExpanded: true,
  },
  {
    id: "kesari-events",
    title: "Kesari Events",
    period: {
      start: "11.2025",
    },
    githubUrl: "https://github.com/cts9505/kesari-event-company-project",
    previewUrl: "https://www.kesarievents.in",
    skills: [
      "Next.js 15",
      "Tailwind CSS v4",
      "Framer Motion",
      "SEO",
    ],
    description: `A modern, SEO-optimized "Coming Soon" landing page for an event planning company.
- Fully responsive design with Framer Motion animations.
- Comprehensive metadata, structured data, and PWA capabilities.`,
images: ["/Kesarievents.png"],
  },
  {
    id: "your-temp-mail",
    title: "Your Temp Mail",
    period: {
      start: "10.2025",
    },
    githubUrl: "https://github.com/cts9505/Your-Temp-Mail",
    previewUrl: "https://your-temp-mail.vercel.app",
    skills: [
      "Next.js",
      "AWS",
      "SMTP",
      "PostgreSQL",
    ],
    description: `A temporary email service platform.
- Integrated with AWS SMTP for email processing.
- Full database schema management and API documentation.`,
    images: ["/yourtempmail.png"],
  },
  {
    id: "finvista",
    title: "Finvista - Finance Management App",
    period: {
      start: "01.2025",
      end: "05.2025",
    },
    githubUrl: "https://github.com/cts9505/FinVista-Finance_Management_App",
    previewUrl: "https://finvista.chaitanyashinde.online",
    skills: [
      "Full Stack",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "LangChain",
      "Gemini AI",
      "Ollama",
      "Razorpay",
      "JWT",
      "SMTP",
      "Vercel",
    ],
    description: `Full-stack personal finance management platform with live deployment for budgets, income, expenses, and bills.
- AI-powered chat assistant using Ollama + Gemini for personalized financial insights and recommendations.
- Razorpay integration for real-time payments and secure financial operations.
- Responsive, intuitive UI/UX ensuring seamless user experience across devices.
- Secure authentication with JWT and email notifications via custom SMTP.
`,
    images: ["/finvista.png","/fvai.png","/fvd.png","/fvbil.png","/fve.png","/fvbud.png"],
    isExpanded: true,
  },
  {
    id: "samudra-watch",
    title: "Samudra Watch",
    period: {
      start: "01.2025",
    },
    githubUrl: "https://github.com/cts9505",
    skills: [
      "Next.js",
      "TypeScript",
      "React Native",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Cloudinary",
      "Firebase",
      "Leaflet.js",
      "NLP",
    ],
    description: `Ocean Hazard Reporting & Social Media Analytics Platform (In Progress).
- Mobile-first hazard reporting app with geotagged media, offline-first sync, and auto-sync when online.
- Government admin portal with real-time dashboards, live maps, heatmaps, and trend overlays using React Native Maps + Leaflet.js.
- NLP + social scraping pipelines for hazard post classification, sentiment analysis, and RBAC-enabled insights.
- Working on: Offline hazard reporting via Bluetooth for decentralized user-to-user transmission.
`,
images: ["/swm.png","/swr.png","/swlr.png","/swa.png","/swar.png"],
isExpanded: true,
  },
  {
    id: "saksham-institute",
    title: "Saksham Institute Website",
    period: {
      start: "01.2026",
      end: "03.2026",
    },
    githubUrl: "https://github.com/cts9505/Saksham-Institute",
    previewUrl: "https://sakshaminstitute.in",
    skills: [
      "Next.js",
      "Serverless Functions",
      "Google Sheets API",
      "SMTP",
      "Vercel",
      "DNS Configuration",
      "SEO",
    ],
    description: `Production-grade website for Saksham Institute with serverless architecture.
- Form submissions securely stored via Google Sheets API integration.
- Real-time email notifications using custom SMTP (contact@sakshaminstitute.in).
- Configured domain, DNS, implemented SEO optimization, and structured metadata.
`,
images: ["/si.png","/sic.png"],
  },
  {
    id: "students-corner",
    title: "Students Corner E-commerce",
    period: {
      start: "01.2024",
      end: "05.2024",
    },
    previewUrl: "https://studentscorner.great-site.net",
    skills: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
    ],
    description: `Complete e-commerce platform for students featuring accommodation listings, stationery marketplace, lost & found section, clubs/events info, and student exchange portal with an admin panel for management (RBAC).`,
    images: ["/studentscorner.png"],
  },
  {
    id: "bookmyshow-clone",
    title: "BookMyShow Platform",
    period: {
      start: "2023",
      end: "2023",
    },
    githubUrl: "https://github.com/cts9505",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    description: `(Frontend-only project) Modern web application for booking movie theatre management with clean UI and responsive design.`,
    images: ["/bookmyshow.png"],
  },
  {
    id: "profile-info-book",
    title: "Profile Info Book",
    period: {
      start: "2023",
      end: "2023",
    },
    githubUrl: "https://github.com/cts9505",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "LocalStorage",
    ],
    description: `(Frontend-only project) A basic web app developed to store and manage hostel student information. Data is saved locally using LocalStorage with simple admin authentication. My first web development project — helped me understand form handling, DOM manipulation, and local data storage.`,
    images: ["/profileinfobook.png"],
  },
]
