import { Link } from "react-router-dom";
import React from 'react'

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
          };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoSubmit = this.demoSubmit.bind(this)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        // .then(()=>this.props.history.push('/'))
    }
    
    demoSubmit(){
        this.props.processForm({username:'alpha', password:'alpha'})
    }

    render (){ 
        return(
            <div className='session-container'>
                <h1>Log in to Kelp</h1>
                <h3>New to Kelp? <Link to='/signup'>Sign Up</Link></h3>
                <p>By logging in, you agree to Kelp's 
                    <Link to='#'>Terms of Service</Link>  and  
                    <Link to='#'>Privacy Policy</Link>
                </p>
                <form className="session-form">

                    <input type='text' value={this.state.username} onChange={this.update('username')} placeholder='Username'/>

                    <input type type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password'/>
                    <Link to='#'>Forgot password?</Link>
                    <button className='green-button' onClick={this.handleSubmit}>Log In</button>
                    <p>or</p>
                    <button className='green-button' onClick={this.demoSubmit}>Demo Log In</button>
                <p>New to Kelp? <Link to='/signup'>Sign Up</Link></p>
                </form>

                {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
            </div>
        )
    }
}

export default LoginForm