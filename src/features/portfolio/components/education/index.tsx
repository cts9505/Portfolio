import React from "react"

import { EDUCATIONS } from "../../data/education"
import { Panel, PanelHeader, PanelTitle } from "../panel"
import { ExperienceItem } from "../experiences/experience-item"

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EDUCATIONS.map((education) => (
          <ExperienceItem key={education.id} experience={education} />
        ))}
      </div>
    </Panel>
  )
}
