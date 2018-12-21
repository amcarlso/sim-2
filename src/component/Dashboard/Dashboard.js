import React, {Component} from 'react';
import House from '../House/House'
import {Link} from 'react-router-dom';
import routes from '../../routes'
import axios from 'axios';

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
      <div>
        <div>
          <h2>Dashboard</h2>
          <Link to='/wizard/step1' component={routes}><button>Add New Property</button></Link>
        </div>
        <h4>Home Listings</h4>
        {mapHousesList}
      </div>
    )
  }
}