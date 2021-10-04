import { Link } from "react-router-dom";
import React from 'react'
import OtherNavBar from "../nav_bar/other_nav_bar";


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

    errorId(){
        if (this.props.errors.length > 0 ) return 'error-field'
        return null
    }


    render (){ 
        return(
            <div className="form-page">
                <OtherNavBar/>
                <div className='form-content'>
                    <div className='session-container'>
                        <h1>Log in to Kelp</h1>
                        <h3>New to Kelp? <Link to='/signup'>Sign Up</Link></h3>
                        <p>By logging in, you agree to Kelp's 
                            <Link to='#'>Terms of Service</Link>  and  
                            <Link to='#'>Privacy Policy</Link>
                        </p>
                        <form className="session-form">

                            <input required type='text' id={this.errorId()} value={this.state.username} onChange={this.update('username')} placeholder='Username'/>

                            <input required type='password' id={this.errorId()} value={this.state.password} onChange={this.update('password')} placeholder='Password'/>
                            {this.props.errors.map((error, i) => <p key={i}>{error}</p>)}
                            <Link to='#' className='align-right'>Forgot password?</Link>
                            <button className='green-button' onClick={this.handleSubmit}>Log In</button>
                            <p id='line'>or</p>
                            <button className='green-button' onClick={this.demoSubmit}>Demo Log In</button>
                        <p className='align-right'>New to Kelp? <Link to='/signup'>Sign Up</Link></p>
                        </form>

                    </div>
                    <img id='form-image'src={window.formimage} width='300' height='300'/>
                </div>
            </div>
        )
    }
}

export default LoginForm