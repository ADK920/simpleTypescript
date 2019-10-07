import React, { FunctionComponent } from 'react';
import { ReportConfig } from '../../types';

type ReportProps = {
    reports: ReportConfig[];
    report: ReportConfig;
}

export const Report: FunctionComponent<ReportProps> = (props: ReportProps) => {
    const header = <div className='report-header'>
        <div>
            <h5>{props.report ? `Selected: ${props.report.title}` : 'No Report Selected'}</h5>
        </div>
    </div>;
    const content = <div>
        {props.report ? props.report.content : ''}
    </div>
    return (
        <div className='report'>
            {header}
            {content}
        </div>
    )
}