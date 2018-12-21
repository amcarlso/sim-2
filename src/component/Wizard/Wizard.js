import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routes from '../../routes'
import axios from 'axios';


export default class Wizard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }

    this.handleAddHouse = this.handleAddHouse.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this)
  }


  handleAddHouse = () => {
    const {name, address, city, state, zip} = this.state;
    axios.post('/api/house', {name, address, city, state, zip})
    .then( res => {
      this.setState({
        houses: res.data
      })
    })
    
  }
  render() {
    return (
      <div>
        Add New Listing
        <Link to='/' component={routes}><button>Cancel</button></Link>
        
        <Link to='/' component={routes}><button onClick={() => this.handleAddHouse()}>Complete</button></Link>
        
      </div>
    )
  }
}