
import React from "react";
import "./Topbar.css";

function Topbar({ search, setSearch }) {

return (

<div className="topbar">

<input
className="search"
type="text"
placeholder="Search leads, activities, or members..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="topbar-right">

<div className="notification">
🔔
</div>

<div className="profile">

<div className="profile-avatar">
A
</div>

<div className="profile-info">
<p className="email">admin@clientcrm.com</p>
<p className="role">Administrator</p>
</div>

</div>

</div>

</div>

);

}

export default Topbar;
