import { HNItem } from '../../middlewares/hnAPI/types';
import { FilterTypes } from '../../actions/home/constants';

export interface HomeReducer {
    filter: FilterTypes,
    list: number[],
    items: HNItem[],
}