import { CollapsibleList } from "@/components/collapsible-list"

import { CERTIFICATIONS } from "../../data/certifications"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { CertificationItem } from "./certification-item"

export function Certifications() {
  return (
    <Panel id="certs">
      <PanelHeader>
        <PanelTitle>
          Certifications
          <PanelTitleSup>({CERTIFICATIONS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        max={6}
      >
        {CERTIFICATIONS.map((certification) => (
          <CertificationItem
            key={`${certification.title}-${certification.issueDate}`}
            certification={certification}
          />
        ))}
      </CollapsibleList>
    </Panel>
  )
}
