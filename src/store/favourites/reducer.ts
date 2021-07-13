import { ToggleFavourite } from './action.type';
import { FavouritesAction } from './actions.enum';
const initialValue: number[] = [];

export default function (
    state = initialValue,
    action: ToggleFavourite,
): number[] {
    if (action.type === FavouritesAction.TOGGLE) {
        if (state.includes(action.id)) {
            return state.filter((id) => id !== action.id);
        }
        return [...state, action.id];
    } else {
        return state;
    }
}
