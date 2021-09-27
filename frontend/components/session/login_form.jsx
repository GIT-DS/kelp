import { Link } from "react-router-dom";
import React from 'react'
import formimage from '../../../app/assets/images/formimage.png'

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

    componentWillUnmount(){
        this.props.removeErrors()
    }


    render (){ 
        return(
            <div className="form-page">
                <Link to='/' className='nav-bar'>Kelp</Link>
                <div className='form-content'>
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
                            <Link to='#' className='align-right'>Forgot password?</Link>
                            <button className='green-button' onClick={this.handleSubmit}>Log In</button>
                            <p>or</p>
                            <button className='green-button' onClick={this.demoSubmit}>Demo Log In</button>
                        <p className='align-right'>New to Kelp? <Link to='/signup'>Sign Up</Link></p>
                        </form>

                        {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
                    </div>
                    <img id='form-image'src={window.formimage} width='300' height='300'/>
                </div>
            </div>
        )
    }
}

export default LoginForm