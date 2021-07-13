import { ToggleFavourite } from './action.type';
import { FavouritesAction } from './actions.enum';

export const toggleFavourite = (id: number):ToggleFavourite => ({
    type: FavouritesAction.TOGGLE,
    id,
});
