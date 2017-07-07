export interface IStory extends IBaseItem {
    by?: string;
    descendants?: number;
    id: number;
    kids?: number[];
    score?: number;
    time?: number;
    title?: string;
    type?: string;
    url?: string;
}

export interface IComment extends IBaseItem {
    by?: string;
    id: number;
    kids?: number[];
    parent?: number;
    text?: string;
    time?: number;
    type?: string;
}

export interface IAsk extends IBaseItem {
    by?: string;
    descendants?: number;
    id: number;
    kids?: number[];
    score?: number;
    text?: string;
    time?: number;
    title?: string;
    type?: string;
    url?: string;
}

export interface IJob extends IBaseItem {
    by?: string;
    id: number;
    score?: number;
    text?: string;
    time?: number;
    title?: string;
    type?: string;
    url?: string;
}

export interface IPoll extends IBaseItem {
    by?: string;
    descendants?: number;
    id: number;
    kids?: number[];
    parts?: number[];
    score?: number;
    text?: string;
    time?: number;
    title?: string;
    type?: string;
}

export interface IPollItem extends IBaseItem {
    by?: string;
    id: number;
    poll?: number;
    score?: number;
    text?: string;
    time?: number;
    type?: string;
}

export interface IBaseItem {
    isFetching: boolean,
    error?: string,
}

export type HNItem = IStory | IAsk | IComment | IJob | IPoll | IPollItem;