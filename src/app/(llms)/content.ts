import { SITE_INFO } from "@/config/site"
import { AWARDS } from "@/features/portfolio/data/awards"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

function joinLines(lines: string[]) {
  return `${lines.join("\n")}\n`
}

export function getAboutMarkdown() {
  return joinLines([
    `# About ${USER.displayName}`,
    "",
    `- Name: ${USER.displayName}`,
    `- Role: ${USER.jobTitle}`,
    `- Location: ${USER.address}`,
    `- Website: ${USER.website}`,
    `- Username: ${USER.username}`,
    "",
    "## Bio",
    "",
    USER.bio,
    "",
    "## About",
    "",
    USER.about.trim(),
    "",
    "## Skills Summary",
    "",
    ...USER.flipSentences.map((item) => `- ${item}`),
    "",
    "## Profiles",
    "",
    ...SOCIAL_LINKS.map((item) => `- ${item.title}: ${item.href}`),
  ])
}

export function getExperienceMarkdown() {
  const lines = ["# Experience", ""]

  for (const experience of EXPERIENCES) {
    lines.push(`## ${experience.companyName}`)
    if (experience.companyWebsite) {
      lines.push(`- Website: ${experience.companyWebsite}`)
    }

    for (const position of experience.positions) {
      lines.push(`- Title: ${position.title}`)
      lines.push(
        `- Period: ${position.employmentPeriod.start}${position.employmentPeriod.end ? ` to ${position.employmentPeriod.end}` : " to Present"}`
      )

      if (position.employmentType) {
        lines.push(`- Type: ${position.employmentType}`)
      }

      if (position.description) {
        lines.push(`- Description: ${position.description}`)
      }

      if (position.skills?.length) {
        lines.push(`- Skills: ${position.skills.join(", ")}`)
      }

      lines.push("")
    }
  }

  return joinLines(lines)
}

export function getProjectsMarkdown() {
  const lines = ["# Projects", ""]

  for (const project of PROJECTS) {
    lines.push(`## ${project.title}`)
    lines.push(
      `- Period: ${project.period.start}${project.period.end ? ` to ${project.period.end}` : ""}`
    )

    if (project.previewUrl) {
      lines.push(`- Live: ${project.previewUrl}`)
    }

    if (project.githubUrl) {
      lines.push(`- GitHub: ${project.githubUrl}`)
    }

    if (project.description) {
      lines.push(`- Description: ${project.description}`)
    }

    if (project.skills.length) {
      lines.push(`- Skills: ${project.skills.join(", ")}`)
    }

    lines.push("")
  }

  return joinLines(lines)
}

export function getAwardsMarkdown() {
  const lines = ["# Awards", ""]

  for (const award of AWARDS) {
    lines.push(`## ${award.title}`)
    lines.push(`- Prize: ${award.prize}`)
    lines.push(`- Date: ${award.date}`)
    lines.push(`- Category: ${award.grade}`)

    if (award.description) {
      lines.push(`- Description: ${award.description}`)
    }

    lines.push("")
  }

  return joinLines(lines)
}

export function getCertificationsMarkdown() {
  const lines = ["# Certifications", ""]

  for (const certification of CERTIFICATIONS) {
    lines.push(`## ${certification.title}`)
    lines.push(`- Issuer: ${certification.issuer}`)
    lines.push(`- Issued: ${certification.issueDate}`)

    if (certification.credentialID) {
      lines.push(`- Credential ID: ${certification.credentialID}`)
    }

    if (certification.credentialURL) {
      lines.push(`- URL: ${certification.credentialURL}`)
    }

    lines.push("")
  }

  return joinLines(lines)
}

export function getLlmsTxtMarkdown() {
  return joinLines([
    `# ${SITE_INFO.name}`,
    "",
    `> ${SITE_INFO.description}`,
    "",
    `- [About](${SITE_INFO.url}/about.md): Background, bio, and contact context.`,
    `- [Experience](${SITE_INFO.url}/experience.md): Work and internship history.`,
    `- [Projects](${SITE_INFO.url}/projects.md): Selected engineering projects.`,
    `- [Awards](${SITE_INFO.url}/awards.md): Hackathons and awards.`,
    `- [Certifications](${SITE_INFO.url}/certifications.md): Certifications and credentials.`,
    `- [Full Profile](${SITE_INFO.url}/llms-full.txt): Combined machine-readable portfolio context.`,
  ])
}

export function getLlmsFullMarkdown() {
  return joinLines([
    getLlmsTxtMarkdown().trimEnd(),
    "",
    getAboutMarkdown().trimEnd(),
    "",
    getExperienceMarkdown().trimEnd(),
    "",
    getProjectsMarkdown().trimEnd(),
    "",
    getAwardsMarkdown().trimEnd(),
    "",
    getCertificationsMarkdown().trimEnd(),
  ])
}
