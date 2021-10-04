import React from 'react'
import StaticRating from '../rating/static_rating'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router'

class BusinessBox extends React.Component{

    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    
    clickHandler(e, cat){

        e.preventDefault()
        this.props.history.push(`/businesses?find=${cat}&near=0`)
        
    }

    render(){
        const {id,  averageRating, sampleComment, title, categories} = this.props.business
        return (
        <div className='business-box'>
            <div className='business-box-content'>
                <h2>{this.props.index + 1}. {title}</h2>
                <StaticRating rating={averageRating}/>
                <div id='business-box-categories'>
                    {categories.map((cat,i) => <button onClick={e => this.clickHandler(e, cat)} key={i}>{cat}</button>
                    )}
                </div>
                <div id='sample-comment'>
                    <i className="far fa-comment-alt"></i>
                    <p id='comment'>{sampleComment}</p>
                </div>
            </div>
        </div>
        )
    }
}

export default BusinessBox