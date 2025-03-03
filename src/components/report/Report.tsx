import React, { FunctionComponent, useState } from 'react';
import { ReportConfig } from '../../types';

type ReportProps = {
    reports: ReportConfig[];
    report: ReportConfig;
    selectedIndex: number;
    handleReportEdit: Function;
}

export const Report: FunctionComponent<ReportProps> = (props: ReportProps) => {
    const modes: { [key: string]: string } = {
        'edit': 'save',
        'save': 'edit'
    };
    const report = { ...props.report };
    const selectedIndex = props.selectedIndex;
    const [mode, setMode] = useState<string>('save');
    const [content, setContent] = useState<string>(report.content || '');

    const handleSetMode = () => {
        const newMode = modes[mode];
        if (newMode === 'edit') {
            setContent(report.content);
        } else {
            const editedReport: ReportConfig = { ...report };
            editedReport.content = content;
            props.handleReportEdit(editedReport);
        }
        setMode(modes[mode]);
    }
    const editor = props.report ? (<button onClick={handleSetMode}>{modes[mode]} Content</button>) : '';
    const header = <div className='report-header'>
        <div>
            <h5>{props.report ? `Selected: ${props.report.title}` : 'No Report Selected'}</h5>
            {editor}
        </div>
    </div>;
    const editContent = (
        <textarea
            className="report-text-editor"
            name="reportContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Edit the report content here"
            cols={30}
            rows={10}></textarea>
    );
    const blankContent = 'This report is blank. Click Edit Content to update.';
    const reportContent = props.report && props.report.content && props.report.content !== '' ? props.report.content : blankContent;
    const displayContent = selectedIndex === -1 ? 'Please select or add a report.' : reportContent;

    return (
        <div className='report'>
            {header}
            <div className='report-content'>
                {mode === 'edit' ? editContent : displayContent}
            </div>
        </div>
    )
}