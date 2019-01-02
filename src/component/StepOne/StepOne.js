import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import routes from '../../routes';
import {updateName} from '../../ducks/reducer'
import {updateAddress} from '../../ducks/reducer'
import {updateCity} from '../../ducks/reducer'
import {updateState} from '../../ducks/reducer'
import {updateZip} from '../../ducks/reducer'




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
    
  }


  render(){
    console.log(this.props)
    return(
      <div>
        <h3>Add New Listing</h3>
        <Link to='/' component={routes}><button>Cancel</button></Link>
        <input placeholder='name' onChange={(e) => this.props.updateName(e.target.value)}/>
        <input placeholder='address' onChange={(e) => this.props.updateAddress(e.target.value)}/>
        <input placeholder='city' onChange={(e) => this.props.updateCity(e.target.value)}/>
        <input placeholder='state' onChange={(e) => this.props.updateState(e.target.value)}/>
        <input placeholder='zipcode' onChange={(e) => this.props.updateZip(e.target.value)}/>
        <Link to='/wizard/step2' component={routes}><button>Next Step</button></Link>
      </div>
      
    )
  }
}
const outputActions = {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZip
}

function mapStateToProps( reduxState ){
  const {name, address, city, state, zip} = reduxState;
  return { name, address, city, state, zip }
}

export default connect(mapStateToProps, outputActions)(StepOne);