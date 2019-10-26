import React from 'react'
import Sortable from "react-sortablejs";

import { Col } from "../../components/common/CustomBootstrap";
import RadialProgressCard from "../../components/cards/RadialProgressCard";


const SortableStaticticsRow = ({messages}) => {
  return (
    <Sortable options={{handle: ".handle"}} className="row">
    <Col xl="3" lg="6" className="mb-4">
      <RadialProgressCard
        title={messages["dashboards.payment-status"]}
        percent={64}
        isSortable={true}
      />
    </Col>
    <Col xl="3" lg="6" className="mb-4">
      <RadialProgressCard
        title={messages["dashboards.work-progress"]}
        percent={75}
        isSortable={true}
      />
    </Col>
    <Col xl="3" lg="6" className="mb-4">
      <RadialProgressCard
        title={messages["dashboards.tasks-completed"]}
        percent={32}
        isSortable={true}
      />
    </Col>
    <Col xl="3" lg="6" className="mb-4">
      <RadialProgressCard
        title={messages["dashboards.payments-done"]}
        percent={45}
        isSortable={true}
      />
    </Col>
  </Sortable>
  )
}
export default SortableStaticticsRow
