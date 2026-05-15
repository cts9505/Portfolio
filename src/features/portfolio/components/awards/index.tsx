import { compareDesc } from "date-fns"

import { CollapsibleList } from "@/components/collapsible-list"

import { AWARDS } from "../../data/awards"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { AwardItem } from "./award-item"

const SORTED_AWARDS = [...AWARDS].sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date))
})

export function Awards() {
  return (
    <Panel id="awards">
      <PanelHeader>
        <PanelTitle>
          Hackathons/Awards
          <PanelTitleSup>({AWARDS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        max={6}
      >
        {AWARDS.map((award) => (
          <AwardItem key={award.id} award={award} />
        ))}
      </CollapsibleList>
    </Panel>
  )
}
