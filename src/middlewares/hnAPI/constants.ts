export const API_ROOT: string = 'https://hacker-news.firebaseio.com/v0/';

export const ITEM_ID_PLACEHOLDER: string = '{itemId}';

export const API_GET_ITEM: string = `${API_ROOT}item/${ITEM_ID_PLACEHOLDER}.json`;
export const API_GET_USER: string = `${API_ROOT}user/${ITEM_ID_PLACEHOLDER}.json`;
export const API_MAX_ITEM: string = `${API_ROOT}maxitem`;
export const API_TOP_STORIES: string = `${API_ROOT}topstories`;
export const API_NEW_STORIES: string = `${API_ROOT}newstories`;
export const API_BEST_STORIES: string = `${API_ROOT}beststories`;