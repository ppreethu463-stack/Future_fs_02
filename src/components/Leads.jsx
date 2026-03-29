import React, { useState } from "react";
import "./Leads.css";

function Leads({ leads, setLeads }) {

const [showForm,setShowForm] = useState(false);
const [filter,setFilter] = useState("All");

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
company:"",
source:"Website",
status:"New Lead",
followup:""
});

const handleChange=(e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const addLead=()=>{

if(!form.name || !form.email){
alert("Enter name and email");
return;
}

setLeads([...leads,form]);

setForm({
name:"",
email:"",
phone:"",
company:"",
source:"Website",
status:"New Lead",
followup:""
});

setShowForm(false);
};

const deleteLead=(index)=>{
const updated = leads.filter((_,i)=>i!==index);
setLeads(updated);
};

const filteredLeads =
filter==="All"
? leads
: leads.filter(l=>l.status===filter);


/* Export CSV */

const exportCSV=()=>{

const headers = ["Name","Email","Phone","Company","Source","Status","Followup"];

const rows = leads.map(l=>[
l.name,
l.email,
l.phone,
l.company,
l.source,
l.status,
l.followup
]);

let csv = headers.join(",") + "\n";

rows.forEach(r=>{
csv += r.join(",") + "\n";
});

const blob = new Blob([csv],{type:"text/csv"});
const url = URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download = "leads.csv";
a.click();

};

return(

<div className="leads-container">

<div className="lead-content">

{/* HEADER */}

<div className="lead-header">

<div>

<h1>ClientConnect Lead Hub</h1>
<p>Manage and track your customer leads efficiently</p>

</div>

<div className="lead-header-actions">

<select
value={filter}
onChange={(e)=>setFilter(e.target.value)}
>
<option>All</option>
<option>New Lead</option>
<option>Contacted</option>
<option>Converted</option>
</select>

<button
className="export-btn"
onClick={exportCSV}
>
Export CSV
</button>

<button
className="add-btn"
onClick={()=>setShowForm(true)}
>
+ Add Lead
</button>

</div>

</div>


{/* ADD LEAD FORM */}

{showForm && (

<div className="lead-form">

<h2>Add New Lead</h2>

<input
name="name"
placeholder="Client Name"
value={form.name}
onChange={handleChange}
/>

<input
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
/>

<input
name="phone"
placeholder="Phone"
value={form.phone}
onChange={handleChange}
/>

<input
name="company"
placeholder="Company"
value={form.company}
onChange={handleChange}
/>

<select
name="source"
value={form.source}
onChange={handleChange}
>
<option>Website</option>
<option>Instagram</option>
<option>Referral</option>
<option>Direct</option>
</select>

<select
name="status"
value={form.status}
onChange={handleChange}
>
<option>New Lead</option>
<option>Contacted</option>
<option>Converted</option>
</select>

<input
type="date"
name="followup"
value={form.followup}
onChange={handleChange}
/>

<div className="form-buttons">

<button
className="save-btn"
onClick={addLead}
>
Save
</button>

<button
className="cancel-btn"
onClick={()=>setShowForm(false)}
>
Cancel
</button>

</div>

</div>

)}


{/* TABLE */}

<table className="lead-table">

<thead>

<tr>

<th>Contact</th>
<th>Email</th>
<th>Source</th>
<th>Status</th>
<th>Follow-up</th>
<th>Actions</th>

</tr>

</thead>

<tbody>

{filteredLeads.length===0 ?(

<tr>
<td colSpan="6">No Leads Found</td>
</tr>

):( 

filteredLeads.map((lead,i)=>(

<tr key={i}>

<td className="contact-cell">

<div className="avatar">
{lead.name.charAt(0).toUpperCase()}
</div>

{lead.name}

</td>

<td>{lead.email}</td>

<td>{lead.source}</td>

<td>

<span className={`status ${lead.status.replace(" ","").toLowerCase()}`}>
{lead.status}
</span>

</td>

<td>{lead.followup}</td>

<td>

<button
className="delete-btn"
onClick={()=>deleteLead(i)}
>
Delete
</button>

</td>

</tr>

))

)}

</tbody>

</table>

</div>

</div>

);

}

export default Leads;