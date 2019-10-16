import {createSelector} from 'reselect'

const selectCategorie = state =>state.cat;

export const selectCategories = createSelector(
    [selectCategorie],
    cat => cat.categories
)