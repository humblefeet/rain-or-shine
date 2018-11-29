import React from 'react'
import './Welcome.css'
import NavBar from '../Nav/Nav'
import {
    } from 'react-router-dom';


class Welcome extends React.Component{
    render(){
        return(
                <div>
                    <NavBar/>
                </div>
        )
    }
}
export default Welcome