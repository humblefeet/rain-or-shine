import React, { Component } from 'react';
import '../App/App.css';
import SignInForm from '../../components/SignInForm/SignInForm'


class SignInPage extends Component {


    render() {
        return(
            <div>
                <SignInForm {...this.props}/>
            </div>
        )
    }
}

export default SignInPage;
