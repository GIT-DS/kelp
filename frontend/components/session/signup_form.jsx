import { Link } from "react-router-dom";
import React from 'react'
import OtherNavBar from "../nav_bar/other_nav_bar";

class SignupForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            first_name: "",
            last_name: "",
            zip_code: "",
            password: ""
          };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        // .then(()=>this.props.history.push('/'))
    }
    
    componentWillUnmount(){
        this.props.removeErrors()
    }

    errorMessage(field, type){
        let errors = this.props.errors.map(error => error.split(' ')[0])
        if ( type === 'id' && errors.filter( error => error === field).length > 0) return 'error-field'
        if (type === 'message') return <p id='error-message'>{this.props.errors.filter(error => error.split(' ')[0] === field)}</p>
         
        return null;    
    }


    render (){ 
        let errors = this.props.errors.map(error => error.split(' ')[0])
        return (
            <div className="form-page">
                <OtherNavBar/>
                <div className="form-content">
                    <div className='session-container'>
                        <h1>Sign Up for Kelp</h1>
                        <h3>Connect with great local businesses</h3>
                        <p>By logging in, you agree to Kelp's 
                            <Link to='#'>Terms of Service</Link> 
                            and acknowledge Kelp's  
                            <Link to='#'>Privacy Policy</Link>
                        </p>
                        <form className="session-form" onSubmit={this.handleSubmit}>
                            
                            <input type='text' id={this.errorMessage('Username', 'id')} placeholder='Username' value={this.state.username} onChange={this.update('username')}/>
                            {this.errorMessage('Username', 'message')}

                            <input type='email' id={this.errorMessage('Email', 'id')} placeholder='Email' value={this.state.email} onChange={this.update('email')}/>
                            {this.errorMessage('Email', 'message')}

                            <div className='name-container'>
                                <div id='first-name-container'>
                                    <input type='text' id={this.errorMessage('First', 'id')} placeholder='First Name' value={this.state.firstName} onChange={this.update('first_name')}/>
                                    {this.errorMessage('First', 'message')}
                                </div>

                                <div id='last-name-container'>
                                    <input type='text' id={this.errorMessage('Last', 'id')} placeholder='Last Name' value={this.state.lastName} onChange={this.update('last_name')}/>
                                    {this.errorMessage('Last', 'message')}
                                    
                                </div>

                            </div>
                        
                            <input type='number' id={this.errorMessage('Zip', 'id')} placeholder='ZIP Code' value={this.state.zipcode} onChange={this.update('zip_code')} min='00501'max='99999'/>
                            {this.errorMessage('Zip', 'message')}

                            <input type type='password' id={this.errorMessage('Password', 'id')} placeholder='Password' value={this.state.password} onChange={this.update('password')} />
                            {this.errorMessage('Password', 'message')}

                            <button className='green-button'>Sign Up</button>
                            <p className='align-right'>Already on Kelp? <Link to='/login'>Log in</Link></p>
                        </form>
                    </div>
                    <img id='form-image'src={window.formimage} width='300' height='300'/>
                </div>
            </div>
        )
    }
}

export default SignupForm