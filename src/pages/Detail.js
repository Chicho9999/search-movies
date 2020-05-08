import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { BackHomeBtn } from '../pages/BackHomeBtn'

const API_KEY = '328e5db3';

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path:PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {}}

    _fetchMovie({id}) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            this.setState({movie})
        })

    }

    componentDidMount(){
        const {id} = this.props.match.params
        this._fetchMovie({id})
    }

    render(){
        const {Title, Poster} = this.state.movie
        return(
            <div>
                <BackHomeBtn />

                <h1>{Title}</h1>
                <img src={Poster} alt=""/>
            </div>
        )
    }
}