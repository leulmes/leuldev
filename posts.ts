export interface IPost {
    id: number,
    title: string;
    date: string;
    slug: string;
}

export const posts: IPost[] = [
    {
        id: 0,
        title: "My first post",
        date: "2024-04-28",
        slug: "post1"
    },
];