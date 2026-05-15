import {
  CodeXmlIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "mindstrix",
    companyName: "MindstriX",
    companyWebsite: "https://mindstrix.in",
    positions: [
      {
        id: "1",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description:
          "- Working on full-stack development projects.\n- Contributing to software engineering tasks in a remote environment.",
        skills: [
          "Full Stack Development",
          "React",
          "Node.js",
          "Remote Work",
          "Teamwork",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "saksham-institute",
    companyName: "Saksham Institute",
    companyWebsite: "https://sakshaminstitute.in",
    positions: [
      {
        id: "1",
        title: "Web Developer",
        employmentPeriod: {
          start: "01.2026",
          end: "03.2026",
        },
        employmentType: "Freelance",
        icon: <CodeXmlIcon />,
        description: `- Designed and deployed a production-grade website using Next.js with serverless architecture.
- Reduced manual inquiry handling through automated form submissions stored via Google Sheets API.
- Configured real-time email notifications using custom SMTP (contact@sakshaminstitute.in).
- Configured domain, DNS, implemented SEO optimization, and structured metadata for better discoverability.`,
        skills: [
          "Next.js",
          "Serverless Functions",
          "Google Sheets API",
          "SMTP",
          "Vercel",
          "DNS Management",
          "SEO",
          "Git",
          "GitHub",
          "Software Deployment",
        ],
      },
    ],
  },
]
