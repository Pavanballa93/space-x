import React from 'react';
import  { Launch } from '../Launch/Launch';

import './styles.css';
import axios from 'axios';
import { Link } from "react-router-dom";
export class LaunchList extends React.Component {
  
    state = {
        launches: []
    }

    componentDidMount = () => {
        this.getLaunches()
    }
    getLaunches = () => {
        axios.get('https://api.spacexdata.com/v3/launches').then((response) => {
        this.setState(
            {launches: response.data}
         )
        }).catch((error) =>{
            console.log(error)
        }) 
    }
    LaunchList = () => {
        const LaunchListComponents =  this.state.launches.map( (launch,index) => {
            const image = launch.links.flickr_images.length === 0 ?
            'https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg':launch.links.flickr_images[0]; 
         return (
           <Link
            key={"launch_"+index} 
            to ={"/Launch/" + launch.flight_number}
            > 
            <Launch 
             banner={image} 
             title ={launch.mission_name}
              LaunchDate={launch.launch_date_local} 
              description={launch.details} />
           </Link>
         )
        })
       return LaunchListComponents;
    }


    render() {
     return (
      <div className="Launch-list">
          {this.LaunchList()}
      </div>
    )
  }
}
