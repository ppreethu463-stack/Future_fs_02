import React, { useState } from "react";
import "./Followups.css";

function Followups(){

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
source:"Website",
message:""
});

const [submitted,setSubmitted] = useState(false);

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const handleSubmit = (e)=>{
e.preventDefault();
setSubmitted(true);
};

const submitAnother = ()=>{
setForm({
name:"",
email:"",
phone:"",
source:"Website",
message:""
});
setSubmitted(false);
};

return(

<div className="contact-container">

<div className="contact-card">

<h1 className="title">ClientConnect</h1>
<h2>Get In Touch</h2>

<p className="subtitle">
Fill in the form below and we'll get back to you shortly.
</p>


{submitted ? (

<div className="success-box">

<h3>Message Sent Successfully 🎉</h3>

<button
className="submit-another"
onClick={submitAnother}
>
Submit Another Response
</button>

</div>

) : (

<form onSubmit={handleSubmit}>

<div className="row">

<div className="field">
<label>Full Name *</label>
<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
required
/>
</div>

<div className="field">
<label>Email Address *</label>
<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
required
/>
</div>

</div>


<div className="row">

<div className="field">
<label>Phone Number</label>
<input
type="text"
name="phone"
value={form.phone}
onChange={handleChange}
/>
</div>

<div className="field">
<label>How did you find us?</label>

<select
name="source"
value={form.source}
onChange={handleChange}
>

<option>Website</option>
<option>Facebook</option>
<option>LinkedIn</option>
<option>Instagram</option>
<option>GitHub</option>
<option>Other</option>

</select>

</div>

</div>


<div className="field">

<label>Message</label>

<textarea
name="message"
value={form.message}
onChange={handleChange}
rows="5"
/>

</div>


<button className="send-btn">
Send Message →
</button>

</form>

)}

</div>

</div>

);

}

export default Followups;