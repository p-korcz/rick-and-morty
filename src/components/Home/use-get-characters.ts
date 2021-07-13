import { useState, useReducer, useCallback, useEffect } from 'react';

import characterApi from '../../api/character.api';
import { DispatchPage, DispatchSearch } from '../../data-model/dispatch.type';
import { SearchState, SearchStateWithPage } from '../../data-model/search.type';
import { searchReducer } from './SearchBar/reducer/search.reducer';

type CharacterState = { [key in string]: any } | undefined;

const initialSearchReducerState: SearchState = {};

export default function useGetCharacters(favourites?: number[]): {
    setCurrentPage: DispatchPage;
    dispatch: DispatchSearch;
    characters: CharacterState;
} {
    const [characters, setCharacters] = useState<CharacterState>();
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [state, dispatch] = useReducer(
        searchReducer,
        initialSearchReducerState,
    );

    const keepResponseAsArray = (data: {}): {} | {}[] =>
        'id' in data ? [data] : data;

    const getCurrentPageCharacters = useCallback(
        async (searchParams?: SearchStateWithPage) => {
            if (!Array.isArray(favourites) || favourites.length) {
                const charactersOnPage = await characterApi.getCharacters({
                    id: favourites?.toString(),
                    params: { ...searchParams },
                });

                const data = keepResponseAsArray(charactersOnPage.data);
                setCharacters(data);
            }
        },
        [favourites],
    );

    useEffect(() => {
        getCurrentPageCharacters({ ...state, page: currentPage });
    }, [state, currentPage, getCurrentPageCharacters, favourites]);

    return { setCurrentPage, dispatch, characters };
}
