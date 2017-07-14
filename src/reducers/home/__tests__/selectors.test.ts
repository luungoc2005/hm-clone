import {
    selectHome,
    makeSelectId,
    makeSelectStoreItem
} from '../selectors';

describe('selectHome', () => {
    it('should select the home state', () => {
        const homeState = {};
        const globalState = {
            'home': homeState,
        };
        expect(selectHome(globalState)).toEqual(homeState);
    });
});

describe('makeSelectId', () => {
    it('should select the selected Id', () => {
        const id = 3;
        const homeState = {
            selectedId: id,
        };
        const globalState = {
            'home': homeState,
        };
        const idSelector = makeSelectId();
        expect(idSelector(globalState)).toEqual(id);
    });
});

describe('makeSelectStoreItem', () => {
    it('should select the item with the selected Id', () => {
        const itemId = 3;
        const returnItem = {id: itemId};
        const homeState = {
            selectedId: itemId,
            items: [{id: 0}, returnItem, {id: 1}, {id: 2}]
        };
        const globalState = {
            'home': homeState,
        };

        const itemSelector = makeSelectStoreItem();
        expect(itemSelector(globalState)).toEqual(returnItem);
    });
});