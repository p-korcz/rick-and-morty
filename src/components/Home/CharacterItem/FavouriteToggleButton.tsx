import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function FavouriteToggleButton({
    isFavourite,
    onClick,
}: {
    isFavourite: boolean;
    onClick: () => void;
}): JSX.Element {
    return (
        <FontAwesomeIcon
            className='characters__status__favourite'
            icon={faHeart}
            cursor='pointer'
            color={isFavourite ? 'red' : 'gray'}
            title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            onClick={onClick}
        />
    );
}
