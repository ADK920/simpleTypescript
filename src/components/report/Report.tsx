import React, { FunctionComponent, useState } from 'react';
import { ReportConfig } from '../../types';

type ReportProps = {
    reports: ReportConfig[];
    report: ReportConfig;
}

export const Report: FunctionComponent<ReportProps> = (props: ReportProps) => {
    const modes: { [key: string]: string } = {
        'edit': 'save',
        'save': 'edit'
    };
    const [mode, setMode] = useState<string>('save');
    const editor = props.report ? (<button onClick={() => setMode(modes[mode])}>{modes[mode]}</button>) : '';
    const header = <div className='report-header'>
        <div>
            <h5>{props.report ? `Selected: ${props.report.title}` : 'No Report Selected'}</h5>
            {editor}
        </div>
    </div>;
    const editContent = (<div>
        <textarea name="reportContent" placeholder="Edit the report content here" cols={30} rows={10}></textarea>
    </div>);
    const displayContent = (<div>
        {props.report ? props.report.content : ''}
    </div>);

    return (
        <div className='report'>
            {header}
            {mode === 'edit' ? editContent : displayContent}
        </div>
    )
}