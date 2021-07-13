import React from 'react';

import {
    DispatchPage,
    DispatchSearch,
} from '../../../data-model/dispatch.type';
import useGetSearchList from './use-get-search-list';

export default function SearchBar({
    dispatch,
    setCurrentPage,
}: {
    dispatch: DispatchSearch;
    setCurrentPage: DispatchPage;
}): JSX.Element {
    const availableFilters = useGetSearchList(dispatch, setCurrentPage);

    return (
        <div
            style={{ background: "url('background-morty.png')" }}
            className='characters__search d-flex justify-content-center pb-3 pt-2'
        >
            {availableFilters}
        </div>
    );
}
