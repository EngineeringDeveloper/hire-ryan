export interface meta {
    title: string;
    date: string;
    tags: string[];
    category: string[];
    image?: string;
}

export type caseDetails = {
    meta: meta,
    path: string,
}