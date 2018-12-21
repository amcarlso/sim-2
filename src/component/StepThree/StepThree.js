import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import routes from '../../routes'

export default class StepOne extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mortgage: '',
      rent: ''
    }

    
    this.handleMortgageChange = this.handleMortgageChange.bind(this)
    this.handleRentChange = this.handleRentChange.bind(this)

  }

  
  handleMortgageChange(input) {
    console.log(input)
    this.setState({
      state: input
    })
  }
  handleRentChange(input) {
    console.log(input)
    this.setState({
      zip: input
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
        <Link to='/' component={routes}><button>Cancel</button></Link>
        <input placeholder='mortgage amount' onChange={(e) => this.handleMortgageChange(e.target.value)}/>
        <input placeholder='rent amount' onChange={(e) => this.handleRentChange(e.target.value)}/>
        <Link to='/wizard/step2' component={routes}><button>Previous Step</button></Link>
        <Link to='/' component={routes}><button onClick={() => this.handleAddHouse()}>Complete</button></Link>
      </div>
      
    )
  }
}