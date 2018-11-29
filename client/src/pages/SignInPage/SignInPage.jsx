import React, { Component } from 'react';
import '../App/App.css';
import SignInForm from '../../components/SignInForm/SignInForm'
import Welcome from '../../components/welcome/Welcome'


class SignInPage extends Component {


    render() {
        return(
            <div>
                <Welcome/>
                <SignInForm {...this.props}/>
            </div>
        )
    }
}

export default SignInPage;
