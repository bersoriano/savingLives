import { Action } from '@ngrx/store';
import { SHOW_MENU, SHOW_CATEGORIES } from '../actions/slideMenu';

export function slideMenuReducer (state: string = 'showMenu', action: Action) {
    switch (action.type) {
        case SHOW_MENU:
            return 'showMenu'
        case SHOW_CATEGORIES:
            return 'showCategories'
        default:
            return state;
    }
}