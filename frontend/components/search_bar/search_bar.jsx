import React from 'react'
import { Link } from 'react-router-dom'
class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            find: '',
            near: '',
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    clickHandler(e){
        let find = this.state.find
        let near = this.state.near
        this.props.history.push(`/businesses?find=${find === '' ? 0 : find}&near=${near === '' ? 0 : near}`)
    }


    render(){
        return(
            <form className='search-bar'>
                <h2>Find</h2>
                <input type='text' placeholder='seafood, seafood, seafood...' value={this.state.find} onChange={this.update('find')}/>
                <h2>Near</h2>
                <input type='text' placeholder='Los Angeles, CA'value={this.state.near} onChange={this.update('near')}/>
                <i className="fa fa-search" onClick={this.clickHandler}/>
            </form>
        )
    }
}

export default SearchBar