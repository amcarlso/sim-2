import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class StepOne extends Component {
  constructor(props) {
    super(props)

    this.state = {
      img: ''
    }

    this.handleAddHouse = this.handleAddHouse.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this)

  }

  handleimgChange(input) {
    console.log(input)
    this.setState({
      name: input
    })
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

  render(){
    return(
      <div>
        <input placeholder='name' onChange={(e) => this.handleNameChange(e.target.value)}/>
        
      </div>
      
    )
  }
}