import React, { Component } from 'react'
import Loader from '../../components/Loader'

class SingleSeries extends Component {
    state = {
        show: null,
        
    }

    componentDidMount(){

        const { id } = this.props.match.params

        fetch(`http://api.tvmaze.com/shows/${29}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show: json }))
    }

    render() {
        
        const { show } = this.state
        console.log(show);
        
        
        
        
        return (
            <div>
                { show === null && <Loader />}
                {
                    show !== null
                    &&
                    <p>Show has been loaded - {this.props.match.params.id}</p>
                }
            </div>
        )
    }
}

export default SingleSeries