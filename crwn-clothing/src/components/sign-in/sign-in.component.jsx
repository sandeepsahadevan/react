import React from 'react';

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
         email : '',
         password : ''   
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email : '', password: ''});
    }

    handleChange = event => {
        const { name,value } = event.target;
        this.setState({[name] : value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handlesubmit}>
                    <FormInput label='Email' type='text' value={this.state.email} name='email' handleChange={this.handleChange}/>                    
                    <FormInput label='Password' type='password' value={this.state.password} name='password' handleChange={this.handleChange}/>
                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        );
    }
}

export default SignIn;