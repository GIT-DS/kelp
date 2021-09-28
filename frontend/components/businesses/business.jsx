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
        let content;
        if (this.props.business){
            const {title, timeOpen, timeClose} = this.props.business
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
            </div>
        )} else {
            return <div></div>
        }

    }
}

export default Business