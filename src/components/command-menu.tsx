"use client"

import {
  BriefcaseBusinessIcon,
  FileTextIcon,
  FolderKanbanIcon,
  GraduationCapIcon,
  HomeIcon,
  LayersIcon,
  LinkIcon,
  MoonStarIcon,
  SearchIcon,
  SparklesIcon,
  SunMediumIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useMemo, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { trackEvent } from "@/lib/events"

type CommandLinkItem = {
  title: string
  href?: string
  icon: React.ReactNode
  keywords?: string[]
  shortcut?: string
  openInNewTab?: boolean
  onSelect?: () => void
}

const NAV_ITEMS: CommandLinkItem[] = [
  { title: "Home", href: "/", icon: <HomeIcon />, shortcut: "GH" },
  { title: "About", href: "/#about", icon: <FileTextIcon /> },
  { title: "Experience", href: "/#experience", icon: <BriefcaseBusinessIcon /> },
  { title: "Education", href: "/#education", icon: <GraduationCapIcon /> },
  { title: "Projects", href: "/#projects", icon: <FolderKanbanIcon /> },
  { title: "Skills", href: "/#stack", icon: <LayersIcon /> },
  { title: "Awards", href: "/#awards", icon: <SparklesIcon /> },
  { title: "Certifications", href: "/#certs", icon: <SparklesIcon /> },
]

const DOC_ITEMS: CommandLinkItem[] = [
  { title: "llms.txt", href: "/llms.txt", icon: <FileTextIcon /> },
  { title: "llms-full.txt", href: "/llms-full.txt", icon: <FileTextIcon /> },
  { title: "about.md", href: "/about.md", icon: <FileTextIcon /> },
  { title: "experience.md", href: "/experience.md", icon: <FileTextIcon /> },
  { title: "projects.md", href: "/projects.md", icon: <FileTextIcon /> },
  { title: "awards.md", href: "/awards.md", icon: <FileTextIcon /> },
  { title: "certifications.md", href: "/certifications.md", icon: <FileTextIcon /> },
  { title: "Resume", href: "/Chaitanya_Shinde_2027.pdf", icon: <LinkIcon /> },
]

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const { resolvedTheme, setTheme } = useTheme()

  useHotkeys(
    "mod+k",
    (event) => {
      event.preventDefault()
      setOpen((value) => !value)
    },
    { enableOnFormTags: true }
  )

  useEffect(() => {
    if (!open) {
      setSearch("")
      return
    }

    trackEvent({
      name: "open_command_menu",
      properties: { method: "keyboard_or_click" },
    })
  }, [open])

  useEffect(() => {
    if (!search) return

    trackEvent({
      name: "command_menu_search",
      properties: { query: search },
    })
  }, [search])

  const projectItems = useMemo<CommandLinkItem[]>(() => {
    return PROJECTS.slice(0, 8).map((project) => ({
      title: project.title,
      href: project.previewUrl || project.githubUrl || "/#projects",
      icon: <FolderKanbanIcon />,
      keywords: project.skills,
      openInNewTab: Boolean(project.previewUrl || project.githubUrl),
    }))
  }, [])

  const socialItems = useMemo<CommandLinkItem[]>(() => {
    return SOCIAL_LINKS.map((item) => ({
      title: item.title,
      href: item.href,
      icon: <LinkIcon />,
      keywords: item.subtitle ? [item.subtitle] : [],
      openInNewTab: true,
    }))
  }, [])

  const themeItems: CommandLinkItem[] = [
    {
      title: "Light Mode",
      icon: <SunMediumIcon />,
      onSelect: () => setTheme("light"),
    },
    {
      title: "Dark Mode",
      icon: <MoonStarIcon />,
      onSelect: () => setTheme("dark"),
    },
  ]

  const handleSelect = (item: CommandLinkItem) => {
    setOpen(false)

    trackEvent({
      name: "command_menu_action",
      properties: {
        action: item.onSelect ? "action" : "navigate",
        title: item.title,
        href: item.href ?? null,
      },
    })

    if (item.onSelect) {
      item.onSelect()
      return
    }

    if (!item.href) return

    if (item.openInNewTab) {
      window.open(item.href, "_blank", "noopener")
      return
    }

    window.location.href = item.href
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 max-sm:px-2.5"
        onClick={() => setOpen(true)}
        aria-label="Open search"
      >
        <SearchIcon className="size-4" />
        <span className="max-sm:hidden">Search</span>
        <KbdGroup className="max-sm:hidden">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search"
        description="Search pages, projects, links, and quick actions."
      >
        <CommandInput
          value={search}
          onValueChange={setSearch}
          placeholder="Search sections, projects, links..."
        />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigate">
            {NAV_ITEMS.map((item) => (
              <CommandItem
                key={item.title}
                value={[item.title, ...(item.keywords ?? [])].join(" ")}
                onSelect={() => handleSelect(item)}
              >
                {item.icon}
                <span>{item.title}</span>
                {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Projects">
            {projectItems.map((item) => (
              <CommandItem
                key={item.title}
                value={[item.title, ...(item.keywords ?? [])].join(" ")}
                onSelect={() => handleSelect(item)}
              >
                {item.icon}
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Docs & Files">
            {DOC_ITEMS.map((item) => (
              <CommandItem
                key={item.title}
                value={item.title}
                onSelect={() => handleSelect(item)}
              >
                {item.icon}
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Social">
            {socialItems.map((item) => (
              <CommandItem
                key={item.title}
                value={[item.title, ...(item.keywords ?? [])].join(" ")}
                onSelect={() => handleSelect(item)}
              >
                {item.icon}
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading={`Theme: ${resolvedTheme ?? "system"}`}>
            {themeItems.map((item) => (
              <CommandItem
                key={item.title}
                value={item.title}
                onSelect={() => handleSelect(item)}
              >
                {item.icon}
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
