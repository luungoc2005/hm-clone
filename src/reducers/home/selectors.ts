import { createSelector } from 'reselect';

import { RootState } from '../types';
import { HomeState } from '../home/types';
import { HNItem } from '../../middlewares/hnAPI/types';

const selectHome: HomeState = (state: RootState) => state.home;

export function getStoreItem(itemId: number): HNItem | undefined {
    return createSelector(
        selectHome,
        (homeState: HomeState) => homeState.items.find(item => item !== null && item.id == itemId),
    )
}