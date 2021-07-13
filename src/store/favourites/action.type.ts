import { FavouritesAction } from './actions.enum';

export type FavouritesActionType = FavouritesAction.TOGGLE;

export interface ToggleFavourite {
    type: FavouritesActionType;
    id: number;
}
