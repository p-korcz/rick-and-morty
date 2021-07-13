import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from 'react-bootstrap';

import { Character } from '../../../data-model/character.interface';
import { toggleFavourite } from '../../../store/favourites/actions';
import CharacterStatus from './CharacterStatus';
import FavouriteToggleButton from './FavouriteToggleButton';
import TextSection from './TextSection';
import { useGetEpisodeName } from './use-get-episode-name';

export default function CharacterItem({
    character,
}: {
    character: Character;
}): JSX.Element {
    const [isFavourite, setIsFavourite] = useState(false);

    const dispatch = useDispatch();
    const favourites = useSelector(
        (state: { favourites: number[] }) => state.favourites,
    );

    const episodeName = useGetEpisodeName(character);

    useEffect(() => {
        const inFavourites = favourites.includes(character.id);
        setIsFavourite(inFavourites);
    }, [favourites, character]);

    const favouritesToggle = (): void => {
        dispatch(toggleFavourite(character.id));
    };

    return (
        <Card className='characters__card'>
            <Card.Header className='characters__card__header'>
                <div> {character.name}</div>
                <div>
                    <FavouriteToggleButton
                        isFavourite={isFavourite}
                        onClick={favouritesToggle}
                    />
                </div>
            </Card.Header>
            <Card.Img src={character.image} alt={character.name} />
            <Card.Body>
                <CharacterStatus {...character} />
                <TextSection
                    headerText='Last known location:'
                    text={character.location.name}
                />
                <TextSection headerText='First seen in:' text={episodeName} />
            </Card.Body>
        </Card>
    );
}
