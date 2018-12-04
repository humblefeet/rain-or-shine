import React from 'react'
import './Favorite.css'
import Axios from 'axios'

class Favorite extends React.Component {

    handleClick(e){
        Axios.post('/favorites',{
            id: e,
            venueId: req.body.venueId,
            venueName: req.body.venueName,
            address: req.body.address,
            icon: req.body.icon
        }).then(
            function(response){
                console.log(response)
            }
        ).then(function(error){
            console.log(log)
        })
    }

    render(){
        return(
            <div onClick={()=>this.handleClick(this.props.user)}>
                <h1>Here is a button to press</h1>
            </div>
        )
    }
}

export default Favorite