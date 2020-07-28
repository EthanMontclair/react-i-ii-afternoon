import React, { Component } from 'react'

class DisplayEmployee extends Component {
    constructor(props){
        super(props)

        this.state = {
            employeeInfo: []
        }
    }

    render(){
        return(
            <div>
                <h1>{this.props.data.id}/25</h1>
                <h1> {this.props.data.name.first} {this.props.data.name.last}</h1>
                <h2>From: {this.props.data.city}, {this.props.data.country}</h2>
                <h2>Job Title: {this.props.data.title}</h2>
                <h2>Employer: {this.props.data.employer}</h2>
                <h2>Favorite Movies:</h2>
                <h3>    1. {this.props.data.favoriteMovies[0]}</h3>
                <h3>    2. {this.props.data.favoriteMovies[1]}</h3>
                <h3>    3. {this.props.data.favoriteMovies[2]}</h3>
            </div>
        )
    }
}

export default DisplayEmployee