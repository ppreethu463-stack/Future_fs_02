import React, { useState, useEffect } from "react";
import "./App.css";

import Leads from "./components/Leads";
import LoginPage from "./components/LoginPage";
import Topbar from "./components/Topbar";
import PipelineBoard from "./components/PipelineBoard";
import Followups from "./components/Followups";

import logo from "./assets/logo/logo.pngg.jpg";

import { FaChartLine, FaUserFriends, FaClock } from "react-icons/fa";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {

const [isLoggedIn,setIsLoggedIn] = useState(false);
const [page,setPage] = useState("dashboard");

const [loginForm,setLoginForm] = useState({
email:"",
password:""
});

const [leads,setLeads] = useState([]);

const [search,setSearch] = useState("");

/* Fetch leads from backend */

const fetchLeads = async ()=>{
try{
const res = await fetch("http://localhost:5000/api/leads/all");
const data = await res.json();
setLeads(data);
}catch(err){
console.log(err);
}
};

useEffect(()=>{
fetchLeads();
},[]);


/* Login */

const handleLogin=(e)=>{
e.preventDefault();

if(loginForm.email!=="" && loginForm.password!==""){
setIsLoggedIn(true);
}else{
alert("Enter email and password");
}
};


/* Search Filter */

const filteredLeads = leads.filter((lead)=>
lead.name.toLowerCase().includes(search.toLowerCase())
);


/* Dashboard Stats */

const total = leads.length;

const newLead = leads.filter(l=>l.status==="New Lead").length;

const contacted = leads.filter(l=>l.status==="Contacted").length;

const converted = leads.filter(l=>l.status==="Converted").length;

const conversionRate =
total===0 ? 0 : Math.round((converted/total)*100);


/* Chart Data */

const donutData = {
labels:["New Lead","Contacted","Converted"],
datasets:[
{
data:[newLead,contacted,converted],
backgroundColor:[
"#f59e0b",
"#3b82f6",
"#22c55e"
],
borderWidth:0
}
]
};

const chartOptions = {
plugins:{
legend:{
position:"bottom",
labels:{
color:"#cbd5e1",
padding:20,
boxWidth:20
}
}
},
cutout:"70%"
};


/* Login Page */

if(!isLoggedIn){
return(
<LoginPage
logo={logo}
loginForm={loginForm}
setLoginForm={setLoginForm}
handleLogin={handleLogin}
/>
);
}


return(
    

<div className="layout">


{/* SIDEBAR */}

<div className="sidebar">

<div className="logo-box">
<img src={logo} alt="logo"/>
<h3>ClientConnect</h3>
<p>Customer Relation</p>
</div>

<ul>
<li 
  className={page==="dashboard" ? "active" : ""}
  onClick={()=>setPage("dashboard")}
>
  <FaChartLine/> Dashboard
</li>
<li onClick={()=>setPage("dashboard")}>
<FaChartLine/> Dashboard
</li>

<li onClick={()=>setPage("leads")}>
<FaUserFriends/> Leads
</li>

<li onClick={()=>setPage("pipeline")}>
<FaChartLine/> Pipeline
</li>

<li onClick={()=>setPage("followups")}>
<FaClock/> Follow-ups
</li>

</ul>

</div>



{/* MAIN */}

<div className="main">


{/* TOPBAR */}

<Topbar
setPage={setPage}
search={search}
setSearch={setSearch}
/>



{/* DASHBOARD */}
{page==="dashboard" && (

<div className="dashboard">

  {/* HEADER */}
  <div className="header">
    <h1>Dashboard</h1>
  </div>

  {/* STATS */}
  <div className="stats">

    <div className="card">
      <h2>{total}</h2>
      <p>Total Leads</p>
    </div>

    <div className="card">
      <h2>{newLead}</h2>
      <p>New Leads</p>
    </div>

    <div className="card">
      <h2>{contacted}</h2>
      <p>Contacted</p>
    </div>

    <div className="card">
      <h2>{converted}</h2>
      <p>Converted</p>
    </div>

  </div>
  <div className="card">
  <h2>{conversionRate}%</h2>
  <p>Conversion Rate</p>
</div>

  {/* CHARTS */}
  <div className="charts">

    <div className="chart-card">
      <h3>Conversion Overview</h3>
      <Doughnut data={donutData} options={chartOptions} />
    </div>

    <div className="chart-card">
      <h3>Pipeline Summary</h3>
      <Doughnut data={donutData} options={chartOptions} />
    </div>

  </div>

</div>

)}




{/* LEADS PAGE */}

{page==="leads" && (

<Leads
leads={filteredLeads}
setLeads={setLeads}
/>

)}



{/* PIPELINE PAGE */}

{page==="pipeline" && (

<PipelineBoard
leads={leads}
setLeads={setLeads}
/>

)}



{/* FOLLOWUPS PAGE */}

{page==="followups" && (

<Followups
leads={leads}
/>

)}


</div>

</div>

);

}

export default App;