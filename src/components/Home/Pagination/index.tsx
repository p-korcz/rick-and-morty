import React from 'react';

import ReactPaginate from 'react-paginate';

export default function CharacterPagination({
    pages,
    setCurrentPage,
}: {
    pages: number;
    setCurrentPage: (page: number) => void;
}): JSX.Element | null {
    return pages ? (
        <ReactPaginate
            onPageChange={(selectedItem: { selected: number }): void =>
                setCurrentPage(selectedItem.selected + 1)
            }
            marginPagesDisplayed={2}
            pageCount={pages}
            pageRangeDisplayed={4}
            containerClassName='characters__pagination'
            previousLabel={<>&laquo;</>}
            nextLabel={<>&raquo;</>}
            activeClassName='characters__pagination--active'
        />
    ) : null;
}
