import React from 'react'
import MovieCard from './movie-card/movie-card'
import {IMovie, TGenre} from '../../../models'

import './movies-list.scss'

let movies: Array<IMovie> = [
    {
        id: 1,
        title: 'Uncharted',
        genres: ['Action & Adventure'],
        imageUrl: '/public/images/uncharted.jpg',
        releaseData: '2019',
    },
    {
        id: 1,
        title: 'Uncharted',
        genres: ['Action & Adventure'],
        imageUrl: '/public/images/uncharted.jpg',
        releaseData: '2019',
    },
    {
        id: 1,
        title: 'Uncharted',
        genres: ['Action & Adventure'],
        imageUrl: '/public/images/uncharted.jpg',
        releaseData: '2019',
    },
    {
        id: 1,
        title: 'Uncharted',
        genres: ['Action & Adventure'],
        imageUrl: '/public/images/uncharted.jpg',
        releaseData: '2019',
    },
    {
        id: 1,
        title: 'Uncharted',
        genres: ['Action & Adventure'],
        imageUrl: '/public/images/uncharted.jpg',
        releaseData: '2019',
    },
    {
        id: 1,
        title: 'Uncharted',
        genres: ['Action & Adventure'],
        imageUrl: '/public/images/uncharted.jpg',
        releaseData: '2019',
    },
    {
        id: 1,
        title: 'Uncharted',
        genres: ['Action & Adventure'],
        imageUrl: '/public/images/uncharted.jpg',
        releaseData: '2019',
    }
]

export default function MoviesList () {
    return (
        <>
            <span className='counter'><b>{movies.length}</b> movies found</span>

            <div className="movies">
                {movies.map( movie =>
                    <MovieCard movie={movie} key={movie.id}/>
                )}
            </div>
        </>
    )
}