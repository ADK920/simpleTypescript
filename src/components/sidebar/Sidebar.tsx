import React, { FunctionComponent, useState } from 'react';
import { ReportConfig } from '../types';
import './Sidebar.css';

type SidebarProps = {
    reports: ReportConfig[];
    handleNewReport: Function;
    handleReportSelection: Function;
}

export const Sidebar: FunctionComponent<SidebarProps> = (props: SidebarProps) => {
    const blankReport: ReportConfig = { title: '', content: '' };
    const [newReport, setReport] = useState(blankReport);

    const updateNewReport = (e: any) => {
        const report: ReportConfig = { ...newReport };
        report.title = e.target.value;
        setReport(report);
    }

    return (
        <div className="sidebar">
            <h5>Reports</h5>
            <div>
                <input type="text" value={newReport.title} onChange={(e) => updateNewReport(e)}></input>
                <button onClick={() => props.handleNewReport(newReport)}>Add Report</button>
            </div>
            {props.reports.map((report: ReportConfig, index: number) => {
                return <div className='report-item' key={index} onClick={()=>props.handleReportSelection(report)}>{report.title}</div>
            })}
        </div>
    );
}