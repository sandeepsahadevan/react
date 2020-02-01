import React from 'react';

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

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
                    <CustomButton type='submit' value='Submit Form'>SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;