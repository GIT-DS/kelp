import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            find: '',
            near: '',
        }
    }
    render(){
        return(
            <div className='search-bar'>
                <h2>Find</h2>
                <input type='text' placeholder='seafood, seafood, seafood...'/>
                <h2>| Near</h2>
                <input type='text' placeholder='Los Angeles, CA'/>
                <i className="fa fa-search"></i>
            </div>
        )
    }
}

export default SearchBar