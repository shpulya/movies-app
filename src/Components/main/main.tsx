import React from "react"
import "./main.scss"

import Nav from "./nav/nav"
import ErrorBoundary from "../error-boundary";
import MoviesList from "./movies/movies-list";

export default function Main () {
    const onGenreClick = () => {
        console.log('on Genre click');
    }

    return (
        <main>
            <Nav genreClick={onGenreClick} />
            <ErrorBoundary>
                <MoviesList />
            </ErrorBoundary>
        </main>
    )
}
