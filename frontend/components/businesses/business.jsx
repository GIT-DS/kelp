import React from 'react'
class Business extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBusiness();
        // console.log(this.props.business)
    }



    render (){
        if (this.props.business){
            const {title, timeOpen, timeClose, website = '', phoneNum, address, city, state, zipCode} = this.props.business
            let timeOpenDateTime = new Date(timeOpen).toLocaleTimeString()
            let timeCloseDateTime = new Date(timeClose).toLocaleTimeString()
            return (
            <div className='business-show'>
                <div className='show-head'>
                    <img></img>
                    <div>
                        <h1 id="title">{title}</h1>
                        <p> {timeOpenDateTime} - {timeCloseDateTime}</p>
                    </div>
                </div>
                <div className='business-content'>
                    <div classNamee='left-content'>
                        <div className='social-bar'>
                            <button className='green-button' id='review-button'>Write a Review</button>
                            <button className='clear-button'>Add Photo</button>
                            <button className='clear-button'>Share</button>
                            <button className='clear-button'>Save</button>
                        </div>
                    </div>
                    <div className='side-bar-info'>
                        <ul>
                            <li>{website}</li>
                            <li>{phoneNum}</li>
                            <li>
                                <p>Get Directions</p>
                                <p>{address}</p>
                                <p>{city}, {state} {zipCode}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )} else {
            return <div></div>
        }

    }
}

export default Business