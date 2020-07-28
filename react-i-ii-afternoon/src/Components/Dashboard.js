import React, { Component } from 'react'
import data from './react-i-ii-afternoon/data'
import DisplayEmployee from './DisplayEmployee'

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state={
            data: data,
            index: 0
        }
    }

    next(){
        if(this.state.index < this.state.data.length - 1){
        this.setState({ index: this.state.index + 1})}
    }
    previous(){
        if(this.state.index > 0){
        this.setState({ index: this.state.index - 1})}
    }

    render(){
        return(
            <div>
                {/* {this.state.data[this.state.index].city} */}
                <button onClick={() => this.next()}>next</button>
                <button onClick={() => this.previous()}>previous</button>
                <DisplayEmployee data={this.state.data[this.state.index]}/>
            </div>
        )
    }
}

export default Dashboard