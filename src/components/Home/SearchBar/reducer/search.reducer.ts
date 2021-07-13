import { SearchAction, SearchState } from '../../../../data-model/search.type';

export function searchReducer(
    state: SearchState,
    action: SearchAction,
): SearchState {
    return { ...state, [action.type]: action.payload };
}
