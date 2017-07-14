import { createSelector } from 'reselect';

import { RootState } from '../types';
import { HomeState } from '../home/types';
// import { HNItem } from '../../middlewares/hnAPI/types';

const selectHome = (state: RootState) => state.home;
const makeSelectId = () => createSelector(
    selectHome,
    (homeState: HomeState) => homeState.selectedId
);

const makeSelectStoreItem = () => createSelector(
        makeSelectId(),
        selectHome,
        (itemId, homeState) => 
            homeState
            .items
            .find(item => item !== null && item.id === itemId)
    );

export {
    selectHome,
    makeSelectId,
    makeSelectStoreItem
};