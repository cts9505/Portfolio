import { GraduationCapIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EDUCATIONS: Experience[] = [
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "3",
        title: "Pune Institute of Computer Technology (PICT)",
        employmentPeriod: {
          start: "09.2023",
          end: "05.2027",
        },
        icon: <GraduationCapIcon />,
        description: `- Bachelor of Engineering in Computer Engineering.
- CGPA: 9.5/10 (till Semester 3).
- Active participant in hackathons including 2x shortlisting for Smart India Hackathon (SIH).
- Skills: Team Leadership, Web Development, Full Stack, AI/ML, DSA.`,
        skills: [
          "C++",
          "Python",
          "Java",
          "DSA",
          "Databases",
          "Systems Design",
          "Software Engineering",
          "AI/ML",
          "Web Development",
          "Teamwork",
        ],
      },
      {
        id: "2",
        title: "Shri Fattechand Jain Jr. College",
        employmentPeriod: {
          start: "05.2021",
          end: "09.2023",
        },
        icon: <GraduationCapIcon />,
        description: `- Higher Secondary Education (HSC — 12th).
- Percentage: 88.00% (Distinction).
- Achievements: JEE Mains 94.51%ile, MHT CET 99.27%ile.`,
        skills: ["Mathematics", "Physics", "Chemistry", "Project Management"],
      },
      {
        id: "1",
        title: "CMS English Medium Higher Secondary School",
        employmentPeriod: {
          start: "05.2008",
          end: "05.2021",
        },
        icon: <GraduationCapIcon />,
        description: `- Secondary Education (SSC — 10th).
- Percentage: 85.20% (Distinction).`,
        skills: ["Mathematics", "Science", "English"],
      },
    ],
  },
]
