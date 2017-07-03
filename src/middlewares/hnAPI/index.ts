import request from '../../utils/request';
import * as constants from './constants';

export function getItem(itemID: number): object {
    const requestURL = constants.API_GET_ITEM.replace(constants.ITEM_ID_PLACEHOLDER, itemID.toString());
    return request(requestURL, undefined);
}