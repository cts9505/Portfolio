import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Chaitanya",
  lastName: "Shinde",
  displayName: "Chaitanya Shinde",
  username: "cts9505",
  gender: "male",
  pronouns: "he/him",
  bio: "Building Full-Stack Solutions with Modern Technologies",
  flipSentences: [
    "Building Full-Stack Solutions with Modern Technologies",
    "Full Stack Developer",
    "MERN Stack Specialist",
    "AI Integration Enthusiast",
  ],
  address: "Pune, India 411044",
  phoneNumber: "KzkxOTM3Mzk1NDE2OQ==", // E.164 format, base64 encoded (+919373954169)
  email: "OWNoYWl0YW55YXNoaW5kZUBnbWFpbC5jb20=", // base64 encoded (9chaitanyashinde@gmail.com)
  website: "https://chaitanyashinde.dev",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Software Engineer Intern",
      company: "MindstriX",
      website: "https://mindstrix.in",
      experienceId: "mindstrix",
    },
    {
      title: "B.E. Computer Engineering",
      company: "PICT",
      website: "https://pict.edu",
      experienceId: "education",
    },
  ],
  about: `
- Dedicated Computer Engineering student at **PUNE INSTITUTE OF COMPUTER TECHNOLOGY**, Pune, with a CGPA of **9.5/10**.
- Specializing in full-stack MERN development, AI/ML integration, IoT, and building scalable web applications.
- Currently interning as a **Software Engineer at MindstriX** and previously freelanced as a Web Developer for Saksham Institute.
- Currently I am learning **Java and Spring Boot**, and I am actively building robust full-stack projects using this ecosystem!
- 2x shortlisted for **Smart India Hackathon (SIH)** and an active participant in inter-college hackathons.
`,
  avatar: "avatar.png",
  avatarVariants: {
    lightOff: "avatar.png",
    lightOn: "avatar.png",
    darkOff: "avatar.png",
    darkOn: "avatar.png",
  },
  ogImage: "https://chaitanyashinde.dev/og-image.png",
  timeZone: "Asia/Kolkata",
  keywords: [
    "cts9505",
    "chaitanya shinde",
    "chaitanyashinde",
    "chaitanya",
    "shinde",
    "full stack developer",
    "mern stack",
    "pict pune",
    "computer engineering",
  ],
  dateCreated: "2026-05-09", // YYYY-MM-DD
}
