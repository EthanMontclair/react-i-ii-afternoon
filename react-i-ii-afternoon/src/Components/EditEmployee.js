import React from 'react'

const Employee = (props) => {
    const {name, city, country, employer, title, favoriteMovies} = props.employee
    return(
        <div>
            <h1>{name}</h1>
            <h1>{city}</h1>
            <h1>{country}</h1>
            <h1>{employer}</h1>
            <h1>{title}</h1>
            <h1>{favoriteMovies}</h1>
        </div>

    )
}

export default Employee