import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import { ReportConfig } from '../../types';
import './Sidebar.css';

type SidebarProps = {
    reports: ReportConfig[];
    selectedIndex: number;
    handleNewReport: Function;
    handleReportSelection: Function;
}

export const Sidebar: FunctionComponent<SidebarProps> = (props: SidebarProps) => {
    const blankReport: ReportConfig = { title: '', content: '' };
    const [newReport, setReport] = useState({...blankReport});
    const searchEl = useRef<HTMLInputElement>(null);

    useEffect(()=> {
        if (searchEl && searchEl.current) {
            searchEl.current.focus();
        }
    })

    const updateNewReport = (e: any) => {
        const report: ReportConfig = { ...newReport };
        report.title = e.target.value;
        setReport(report);
    }

    const handleAddReport = () => {
        props.handleNewReport(newReport);
        setReport({...blankReport});
    }

    return (
        <div className="sidebar">
            <h5>Reports</h5>
            <div>
                <input ref={searchEl} placeholder="Enter Report Title" type="text" value={newReport.title} onChange={(e) => updateNewReport(e)}></input>
                <button onClick={() => handleAddReport()}>Add Report</button>
            </div>
            {props.reports.map((report: ReportConfig, index: number) => {
                return <div className={`report-item selected-${index === props.selectedIndex}`} key={index} onClick={()=>props.handleReportSelection(report, index)}>{report.title}</div>
            })}
        </div>
    );
}