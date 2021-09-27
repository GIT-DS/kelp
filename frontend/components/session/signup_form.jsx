import { Link } from "react-router-dom";
import React from 'react'

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


    render (){ 
        
        return (
            <div className='session-container'>
                <h1>Sign Up for Kelp</h1>
                <h3>Connect with great local businesses</h3>
                <p>By logging in, you agree to Kelp's 
                    <Link to='#'>Terms of Service</Link> 
                    and acknowledge Kelp's  
                    <Link to='#'>Privacy Policy</Link>
                </p>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    
                    <input type='text' placeholder='Username' value={this.state.username} onChange={this.update('username')}/>

                    <input type='email' placeholder='Email' value={this.state.email} onChange={this.update('email')}/>
                    <div className='name-container'>
                        <input type='text' placeholder='First Name' value={this.state.firstName} onChange={this.update('first_name')}/>
                        <input type='text' placeholder='Last Name' value={this.state.lastName} onChange={this.update('last_name')}/>
                    </div>
                
                    <input type='number' placeholder='ZIP Code' value={this.state.zipcode} onChange={this.update('zip_code')} min='5' max='5'/>
                    
                    <input type type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')} />
                    
                    <button className='green-button'>Sign Up</button>
                    <p>Already on Kelp? <Link to='/login'>Log in</Link></p>
                </form>
                {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
            </div>
        )
    }
}

export default SignupForm