import React from 'react'
import PropTypes from 'prop-types'

import './movie-card.scss'

export default function MovieCard (props: any) {

    return (
        <div className="card">
            <div className="image"></div>
            <div className="context-menu"></div>
            <div className="footer">
                <div className="title-group">
                    <span className="title">{props.movie.title}</span>
                    <div className="release-date">{props.movie.releaseData}</div>
                </div>
                <p className="genres">{props.movie.genres}</p>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
}