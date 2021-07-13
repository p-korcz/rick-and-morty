import React, { useState, useCallback, useEffect } from 'react';
import {
    DispatchPage,
    DispatchSearch,
} from '../../../data-model/dispatch.type';

import { SearchKey } from '../../../data-model/search-key.enum';
import { SearchAction } from '../../../data-model/search.type';
import SearchInput from './SearchInput';

export default function useGetSearchList(
    dispatch: DispatchSearch,
    setCurrentPage: DispatchPage,
): JSX.Element[] | undefined {
    const [availableFilters, setAvailableFilters] = useState<JSX.Element[]>();

    const dispatchAndClearPage = useCallback(
        (arg: SearchAction) => {
            dispatch(arg);
            setCurrentPage(1);
        },
        [dispatch, setCurrentPage],
    );

    useEffect(() => {
        const searchInputs = Object.values(SearchKey).map((searchKey) => (
            <SearchInput
                key={searchKey}
                searchKey={searchKey}
                dispatch={dispatchAndClearPage}
            />
        ));
        setAvailableFilters(searchInputs);
    }, [dispatch, dispatchAndClearPage]);

    return availableFilters;
}
