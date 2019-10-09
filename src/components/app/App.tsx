import React, { useState, FunctionComponent } from 'react';
import './App.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Report } from '../report/Report';
import { ReportConfig } from '../../types';

const App: FunctionComponent = () => {

  const [reports, setReports] = useState<ReportConfig[]>([]);
  const [report, setReport] = useState();
  const [index, setIndex] = useState<number>(-1);

  const addReport = (newReport: ReportConfig) => {
    const newReports: ReportConfig[] = [...reports];
    newReports.push(newReport);
    setReports(newReports);
  };

  const handleReportSelection = (selectedReport: ReportConfig, selectedIndex: number) => {
    if (!report || selectedIndex !== index) {
      setReport(selectedReport);
      setIndex(selectedIndex);
    } else {
      setReport(null);
      setIndex(-1);
    }
  }

  const handleEdit = (editedReport: ReportConfig) => {
    const newReports = [...reports];
    newReports[index] = { ...editedReport };
    setReports(newReports);
    setReport({ ...editedReport })
  }

  return (
    <div className="reporting">
      <Sidebar
        reports={reports}
        handleNewReport={(report: ReportConfig) => addReport(report)}
        handleReportSelection={handleReportSelection}>
      </Sidebar>
      <Report
        handleReportEdit={handleEdit}
        report={report}
        reports={reports}>

      </Report>
    </div>
  );
}

export default App;
