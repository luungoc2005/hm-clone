import { HNItem } from '../../middlewares/hnAPI/types';
import { FilterTypes } from '../../actions/home/constants';

export interface HomeState {
    filter: FilterTypes,
    selectedId: number,
    list: number[],
    items: HNItem[],
}