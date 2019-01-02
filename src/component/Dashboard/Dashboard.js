import React, {Component} from 'react';
import House from '../House/House'
import {Link} from 'react-router-dom';
import routes from '../../routes'
import axios from 'axios';
import './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      houses: []
    }

    this.getHouses = this.getHouses.bind(this)
    this.deleteHouse = this.deleteHouse.bind(this)
  }

  componentDidMount(){
    this.getHouses()
  }

  getHouses(){
    axios.get('/api/houses').then(res => {
      this.setState({
        houses: res.data
      })
    })
  }

  deleteHouse(id){
    axios.delete(`/api/house/${id}`).then(res => {
      this.getHouses()
    })
  }

  render() {
    let mapHousesList = this.state.houses.map(house => {
      return (
        <House 
          key={house.id}
          id={house.id}
          property_name={house.property_name}
          address={house.address}
          city={house.city}
          state={house.state}
          zip={house.zip}
          deleteHouseFn={this.deleteHouse}
      />
      )
    })
    return (
      <div className='dashboard-background'>
        <div className='display-area'>
          <div className='dashboard-header'>
            <h2 id='title-style'>Dashboard</h2>
            <Link to='/wizard/step1' component={routes}><button id='add-prop-button'>Add New Property</button></Link>
          </div>
          <hr />
          <h4>Home Listings</h4>
          <div>
            {mapHousesList}
          </div>
      </div>
        </div>
        
    )
  }
}