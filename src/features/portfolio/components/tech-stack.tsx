"use client"
import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { PROJECTS } from "../data/projects"
import { TECH_STACK } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function TechStack() {
  const groupedTech = TECH_STACK.reduce((acc, tech) => {
    const category = tech.categories[0] || "Other"
    if (!acc.has(category)) acc.set(category, [])
    acc.get(category)!.push(tech)
    return acc
  }, new Map<string, typeof TECH_STACK>())

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="flex flex-col gap-6">
          <TooltipProvider delayDuration={100}>
            {Array.from(groupedTech.entries()).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-4 items-center pl-4">
                  {items.map((tech) => {
                    const usedInProjects = PROJECTS.filter((p) =>
                      p.skills.some(
                        (skill) =>
                          skill.toLowerCase() === tech.title.toLowerCase() ||
                          skill.toLowerCase().includes(tech.title.toLowerCase()) ||
                          tech.title.toLowerCase().includes(skill.toLowerCase())
                      )
                    )

                    return (
                      <li key={tech.key} className="flex">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={tech.href}
                              target="_blank"
                              rel="noopener"
                              aria-label={tech.title}
                              className="transition-transform hover:scale-110 flex items-center justify-center [&_img]:size-10 [&_img]:sm:size-12 [&_img]:select-none"
                            >
                              {tech.iconUrl ? (
                                <Image
                                  src={tech.iconUrl}
                                  alt={`${tech.title} icon`}
                                  width={48}
                                  height={48}
                                  className={tech.theme ? "dark:invert" : ""}
                                  unoptimized
                                />
                              ) : tech.theme ? (
                                <>
                                  <Image
                                    className="hidden [html.light_&]:block"
                                    src={`https://assets.chaitanyashinde.dev/images/tech-stack-icons/${tech.key}-light.svg`}
                                    alt={`${tech.title} light icon`}
                                    width={48}
                                    height={48}
                                    unoptimized
                                  />
                                  <Image
                                    className="hidden [html.dark_&]:block"
                                    src={`https://assets.chaitanyashinde.dev/images/tech-stack-icons/${tech.key}-dark.svg`}
                                    alt={`${tech.title} dark icon`}
                                    width={48}
                                    height={48}
                                    unoptimized
                                  />
                                </>
                              ) : (
                                <Image
                                  src={`https://assets.chaitanyashinde.dev/images/tech-stack-icons/${tech.key}.svg`}
                                  alt={`${tech.title} icon`}
                                  width={48}
                                  height={48}
                                  unoptimized
                                />
                              )}
                            </a>
                          </TooltipTrigger>
                          <TooltipContent side="top" sideOffset={4} className="flex flex-col gap-1 text-center">
                            <p className="font-semibold text-sm">{tech.title}</p>
                            {usedInProjects.length > 0 && (
                              <div className="text-xs text-muted-foreground mt-1 max-w-[200px]">
                                <span className="font-medium text-foreground">Projects:</span>
                                <ul className="list-inside list-disc text-left mt-0.5">
                                  {usedInProjects.map((p) => (
                                    <li key={p.id} className="truncate">{p.title}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </TooltipProvider>
        </div>
      </PanelContent>
    </Panel>
  )
}
