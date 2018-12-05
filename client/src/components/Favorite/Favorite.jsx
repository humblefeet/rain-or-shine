import React from 'react'
import './Favorite.css'
import Axios from 'axios'

class Favorite extends React.Component {

    handleClick(e){
        Axios.post('/favorites',{
            id: e,
            venueId: e.venueId,
            venueName: e.venueName,
            address: e.address,
            icon: e.icon
        }).then(function(response){
                console.log(response)
            }
        ).then(function(error){
            console.log(error)
        })
    }

    render(){
        return(
            <div onClick={()=>this.handleClick(this.props.user)}>
            </div>

        )
    }
}

export default Favorite