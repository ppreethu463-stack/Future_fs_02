import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsCard from "../components/StatsCard";
import ConversionChart from "../components/ConversionChart";
import PipelineChart from "../components/PipelineChart";
import Leads from "../components/Leads";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main">

        <Topbar />

        <h1>Command Center</h1>

        <div className="stats-grid">
          <StatsCard title="Total Leads" value="205" />
          <StatsCard title="Converted" value="64" />
          <StatsCard title="Conversion Rate" value="31%" />
          <StatsCard title="Active Leads" value="141" />
        </div>

        <div className="charts">
          <ConversionChart />
          <PipelineChart />
        </div>

        {/* Lead Dashboard */}
        <Leads />

      </div>

    </div>
  );
}