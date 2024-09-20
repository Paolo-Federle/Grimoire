import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import BaseTable from './BaseTable';

export default function SimpleTable(props) {
    const [isSectionActive, setIsSectionActive] = useState(true);
    const tableHeaders = props.headers || Object.keys(props.table[0]).filter(header => header !== 'link');
    const navigate = useNavigate();

    const goRouteId = (row) => {
        navigate(`${row.link}`);
    };

    const handleToggleSection = () => {
        setIsSectionActive(!isSectionActive);
    };

    return (
        <>
            <div>
                {props.title && (
                    <h1 onClick={handleToggleSection} style={{ cursor: 'pointer' }}>
                        {props.title} {isSectionActive ? '∧' : '∨'}
                    </h1>
                )}
                {props.upperText && isSectionActive && (
                    <div style={{ paddingBottom: "20px", maxWidth: props.maxWidth }}>
                        {props.upperText.map((desc, index) => (
                            <p key={index}>
                                <span dangerouslySetInnerHTML={{ __html: desc }} />
                            </p>
                        ))}
                    </div>
                )}
                {isSectionActive && (
                    <div className='table-container'>
                        <BaseTable
                            headers={tableHeaders}
                            data={props.table}
                            onRowClick={props.activeRowLink ? goRouteId : null}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
