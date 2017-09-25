import { Action } from '@ngrx/store';
import { 
        SHOW_MENU, 
        SHOW_CATEGORIES,

        CATEGORY_HELP,
        CATEGORY_SEARCHPPL,
        CATEGORY_DONATIONS,
        CATEGORY_GATHERING,
        CATEGORY_PETS
} from '../actions/slideMenu';

export function slideMenuReducer (state: string = 'showMenu', action: Action) {
    switch (action.type) {
        case SHOW_MENU:
            if (state === 'showCategories') {
                return 'showMenu'
            }
            else if (state === 'categoryDetail') {
                return 'showCategories'
            }
        case SHOW_CATEGORIES:
            return 'showCategories'
        
        case CATEGORY_HELP:
            return 'categoryDetail'
        default:
            return state;
    }
}