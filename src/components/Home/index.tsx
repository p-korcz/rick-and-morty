import React, { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';

import { Character } from '../../data-model/character.interface';
import CharacterPagination from './Pagination';
import SearchBar from './SearchBar';
import useGetCharacters from './use-get-characters';
const CharacterItem = React.lazy(() => import('./CharacterItem'));

export default function Home({
    favourites,
}: {
    favourites?: number[];
}): JSX.Element {
    const { setCurrentPage, dispatch, characters } =
        useGetCharacters(favourites);
    return (
        <>
            {!favourites && (
                <SearchBar
                    setCurrentPage={setCurrentPage}
                    dispatch={dispatch}
                />
            )}
            <CharacterPagination
                pages={characters?.info?.pages}
                setCurrentPage={setCurrentPage}
            />
            <div className='characters characters__container'>
                <Suspense fallback={<div>Loading...</div>}>
                    {(characters?.results || characters)?.map(
                        (character: Character) => (
                            <CharacterItem
                                key={character.id}
                                character={character}
                            />
                        ),
                    )}
                </Suspense>
                <ToastContainer position='bottom-right' />
            </div>
        </>
    );
}
