import React from 'react';

import { Gender, Status } from '../../../data-model/character.interface';

export default function CharacterStatus({
    status,
    gender,
}: {
    status: Status;
    gender: Gender;
}): JSX.Element {
    return (
        <span className='characters__status' title='Status'>
            <span
                className={`characters__status__icon characters__status__icon--${status}`}
            ></span>
            {`${status} - ${gender}`}
        </span>
    );
}
