import React from 'react';

import { Form } from 'react-bootstrap';
import { debounce } from 'lodash';

import { DispatchSearch } from '../../../data-model/dispatch.type';
import { SearchKey } from '../../../data-model/search-key.enum';

export default function SearchInput({
    searchKey,
    dispatch,
}: {
    searchKey: SearchKey;
    dispatch: DispatchSearch;
}): JSX.Element {
    const setSearchParam = debounce(
        (evt: React.ChangeEvent<HTMLInputElement>): void => {
            dispatch({ type: searchKey, payload: evt.target.value });
        },
        300,
    );

    return (
        <div className='mx-1 text-center'>
            <Form.Label className='characters__search__label'>
                {searchKey}
            </Form.Label>
            <Form.Control
                onChange={setSearchParam}
                className='characters__search__input'
            />
        </div>
    );
}
