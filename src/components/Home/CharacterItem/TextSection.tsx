import React from 'react';

export default function TextSection({
    headerText,
    text,
}: {
    headerText: string;
    text: string;
}): JSX.Element {
    return (
        <div className='mt-2'>
            <h6>{headerText}</h6>
            <p>{text}</p>
        </div>
    );
}
