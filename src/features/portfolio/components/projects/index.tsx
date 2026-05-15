import { CollapsibleList } from "@/components/collapsible-list"

import { PROJECTS } from "../../data/projects"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { ProjectItem } from "./project-item"

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        max={4}
      >
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </CollapsibleList>
    </Panel>
  )
}
