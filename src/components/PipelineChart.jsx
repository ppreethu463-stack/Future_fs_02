import React from "react";

export default function PipelineChart() {
  return (
    <div className="chart-card">
      <h3>Pipeline Status</h3>

      <ul>
        <li>Converted : 64</li>
        <li>Contacted : 77</li>
        <li>New : 64</li>
        <li>Lost : 10</li>
      </ul>
    </div>
  );
}