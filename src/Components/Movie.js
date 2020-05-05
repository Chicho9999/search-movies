import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Movie extends Component {
    static propTypes = {
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
        idKey: PropTypes.string
    }

    render () {
        const {title, year, poster, idKey} = this.props
        
        return (
            <Link to={`/detail/${idKey}`} className="card" >
                <div key={idKey} className="card columns">
                        <div className="card-image column is-two-fifths">
                            <figure className="image">
                                <img 
                                src={poster} 
                                alt={title}/>
                            </figure>
                        </div>
                    <div className="card-content column">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{title}</p>
                                <p className="subtitle is-6">{year}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        )
    }
}