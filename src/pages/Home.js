import React, {Component} from 'react';

import { Title } from '../Components/Title'
import { SearchForm } from '../Components/SearchForm'
import { MovieList } from '../Components/MovieList';

export class Home extends Component {
    state = { usedSearch: false, results:[] }
  
    _handleResults = (results) => {
      this.setState({results, usedSearch: true})
    }

    _renderResults(){
        return !this.state.results.length 
        ? <p>Sorry!</p>
        : <MovieList movies={this.state.results}/>
    }

    render () {
        return (
            <div>
                <Title>Cosas 1</Title>
                <div className="SearchForm-wrapper"> 
                    <SearchForm onResults={this._handleResults} />
                </div>
                <div>
                    {this.state.usedSearch
                    ? this._renderResults()
                    : <small>Use the form to search</small>
                    }
                </div>
            </div>
            )

        }

}
