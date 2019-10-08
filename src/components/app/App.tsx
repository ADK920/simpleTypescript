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

  const handleReportSelection = (selectedReport: ReportConfig) => {
    if (!report || (report && report.title !== selectedReport.title)) {
      setReport(selectedReport);
    } else {
      setReport(null);
    }
  }

  return (
    <div className="reporting">
      <Sidebar
        reports={reports}
        handleNewReport={(report: ReportConfig) => addReport(report)}
        handleReportSelection={(selectedReport: ReportConfig) => handleReportSelection(selectedReport)}>
      </Sidebar>
      <Report report={report} reports={reports}></Report>
    </div>
  );
}

export default App;
