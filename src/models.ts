export const Genres = ['All', 'Comedy', 'Horror', 'Drama', 'Music', 'Biography', 'Oscar winning movie', 'Action & Adventure']
export type TGenre = typeof Genres[number]

export const selectOptions = [
    {
        name: 'Title',
        value: 'title'
    },
    {
        name: 'Release Date',
        value: 'releaseDate'
    }
]

export interface IMovie {
    title: string;
    genres: TGenre[];
    imageUrl: string;
    releaseData: string;
    id: number;
}

export interface IFooter {
    children: [];
}