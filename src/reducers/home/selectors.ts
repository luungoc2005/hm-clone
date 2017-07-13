import { createSelector } from 'reselect';

import { RootState } from '../types';
import { HomeState } from '../home/types';
import { HNItem } from '../../middlewares/hnAPI/types';

const selectHome: HomeState = (state: RootState) => state.home;
const selectId: number = (state: RootState) => state.home.selectedId;

export function getStoreItem(): HNItem | undefined {
    return createSelector(
        selectId,
        selectHome,
        (itemId: number, homeState: HomeState) => homeState.items.find(item => item !== null && item.id === itemId),
    );
}