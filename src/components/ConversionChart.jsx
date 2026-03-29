import React from 'react';
import ConversionChart from './components/ConversionChart';
import PipelineChart from './components/PipelineChart';
import Leads from './components/Leads';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>CRM Dashboard</h1>
        <ConversionChart />
        <PipelineChart />
        <Leads />
      </div>
    </div>
  );
}

export default App;