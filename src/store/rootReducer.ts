import { CombinedState, combineReducers, Reducer } from 'redux';

import { ToggleFavourite } from './favourites/action.type';
import favourites from './favourites/reducer';

export const rootReducer = (): Reducer<
    CombinedState<{ favourites: number[] }>,
    ToggleFavourite
> =>
    combineReducers({
        favourites,
    });
