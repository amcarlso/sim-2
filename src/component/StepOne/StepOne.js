import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import routes from '../../routes';
import {updateStepOne} from '../../ducks/reducer'



class StepOne extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }

    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this)
    
  }

  handleNameChange(input) {
    console.log(input)
    this.setState({
      name: input
    })
  }
  handleAddressChange(input) {
    console.log(input)
    this.setState({
      address: input
    })
  }
  handleCityChange(input) {
    console.log(input)
    this.setState({
      city: input
    })
  }
  handleStateChange(input) {
    console.log(input)
    this.setState({
      state: input
    })
  }
  handleZipcodeChange(input) {
    console.log(input)
    this.setState({
      zip: input
    })
  }


  render(){
    console.log(this.props)
    return(
      <div>
        <h3>Add New Listing</h3>
        <Link to='/' component={routes}><button>Cancel</button></Link>
        <input placeholder='name' onChange={(e) => this.handleNameChange(e.target.value)}/>
        <input placeholder='address' onChange={(e) => this.handleAddressChange(e.target.value)}/>
        <input placeholder='city' onChange={(e) => this.handleCityChange(e.target.value)}/>
        <input placeholder='state' onChange={(e) => this.handleStateChange(e.target.value)}/>
        <input placeholder='zipcode' onChange={(e) => this.handleZipcodeChange(e.target.value)}/>
        <Link to='/wizard/step2' component={routes}><button onClick={() => updateStepOne() }>Next Step</button></Link>
      </div>
      
    )
  }
}

function mapStateToProps( ReduxState ){
  const {name, address, city, state, zip} = ReduxState;
  return { name, address, city, state, zip }
}

export default connect(mapStateToProps, {updateStepOne})(StepOne);