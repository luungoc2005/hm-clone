export interface IStory {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
}

export interface IComment {
    by: string;
    id: number;
    kids: number[];
    parent: number;
    text: string;
    time: number;
    type: string;
}

export interface IAsk {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    text: string;
    time: number;
    title: string;
    type: string;
    url: string;
}

export interface IJob {
    by: string;
    id: number;
    score: number;
    text: string;
    time: number;
    title: string;
    type: string;
    url: string;
}

export interface IPoll {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    parts: number[];
    score: number;
    text: string;
    time: number;
    title: string;
    type: string;
}

export interface IPollItem {
    by: string;
    id: number;
    poll: number;
    score: number;
    text: string;
    time: number;
    type: string;
}

export type HNItem = IStory | IAsk | IComment | IJob | IPoll | IPollItem;