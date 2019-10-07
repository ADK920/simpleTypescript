import React, { useState, FunctionComponent } from 'react';
import './App.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Report } from '../report/Report';
import { ReportConfig } from '../../types';

const App: FunctionComponent = () => {

  const [reports, setReports] = useState<ReportConfig[]>([]);
  const [report, setReport] = useState();

  const addReport = (newReport: ReportConfig) => {
    const newReports: ReportConfig[] = [...reports];
    newReports.push(newReport);
    setReports(newReports);
  };

  return (
    <div className="reporting">
      <Sidebar
        reports={reports}
        handleNewReport={(report: ReportConfig) => addReport(report)}
        handleReportSelection={(selectedReport: ReportConfig) => setReport(selectedReport)}>
      </Sidebar>
      <Report report={report} reports={reports}></Report>
    </div>
  );
}

export default App;
