import React from "react";
import "./PipelineBoard.css";

function PipelineBoard({ leads, setLeads }) {

const statuses = ["New Lead","Contacted","Converted"];

const moveLead = (index,newStatus)=>{

const updated = [...leads];

updated[index].status = newStatus;

setLeads(updated);

};

return (

<div className="pipeline">

{statuses.map(status => (

<div className="pipeline-column" key={status}>

<h3>{status}</h3>

{leads
.filter(l => l.status === status)
.map((lead,i)=> (

<div className="pipeline-card" key={i}>

<h4>{lead.name}</h4>
<p>{lead.company}</p>

<div className="pipeline-buttons">

{statuses.map(s => (
<button
key={s}
onClick={()=>moveLead(i,s)}
>
{s}
</button>
))}

</div>

</div>

))}

</div>

))}

</div>

);

}

export default PipelineBoard;