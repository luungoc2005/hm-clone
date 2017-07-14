export interface Story extends BaseItem {
    by?: string;
    descendants?: number;
    id: number;
    kids: number[];
    score?: number;
    time?: number;
    title?: string;
    type?: string;
    url?: string;
}

export interface Comment extends BaseItem {
    by?: string;
    id: number;
    kids: number[];
    parent?: number;
    text?: string;
    time?: number;
    type?: string;
}

export interface Ask extends BaseItem {
    by?: string;
    descendants?: number;
    id: number;
    kids: number[];
    score?: number;
    text?: string;
    time?: number;
    title?: string;
    type?: string;
    url?: string;
}

export interface Job extends BaseItem {
    by?: string;
    id: number;
    score?: number;
    text?: string;
    time?: number;
    title?: string;
    type?: string;
    url?: string;
}

export interface Poll extends BaseItem {
    by?: string;
    descendants?: number;
    id: number;
    kids: number[];
    parts?: number[];
    score?: number;
    text?: string;
    time?: number;
    title?: string;
    type?: string;
}

export interface PollItem extends BaseItem {
    by?: string;
    id: number;
    poll?: number;
    score?: number;
    text?: string;
    time?: number;
    type?: string;
}

export interface BaseItem {
    isFetching: boolean;
    error?: string;
    kids?: number[];
}

export type HNItem = Story | Ask | Comment | Job | Poll | PollItem;