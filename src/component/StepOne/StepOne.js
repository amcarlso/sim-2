import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import routes from '../../routes';
import {updateName} from '../../ducks/reducer'
import {updateAddress} from '../../ducks/reducer'
import {updateCity} from '../../ducks/reducer'
import {updateState} from '../../ducks/reducer'
import {updateZip} from '../../ducks/reducer'
import './StepOne.css'

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
      <div id='stepone-background'>
        <div className='display-area'>
          <div id='stepone-header'>
            <h3 className='add-listing'>Add New Listing</h3>
            <Link to='/' component={routes}><button className='cancel-button'>Cancel</button></Link>
          </div>
          <div className='entry-style'>
            <div>
              <p>Property Name <br/></p>
              <input id='property-input' onChange={(e) => this.props.updateName(e.target.value)}/>
            </div>

            <div>
              <p>Address <br/></p>
              <input id='address-input' onChange={(e) => this.props.updateAddress(e.target.value)}/> 
            </div>

            <div id='flex-inputs'>
              <div>
                <p>City</p>
                <input onChange={(e) => this.props.updateCity(e.target.value)}/>

              </div>
              <div>
                <p>State</p>
                <input onChange={(e) => this.props.updateState(e.target.value)}/>

              </div>
              <div>
                <p>Zip</p>
                <input onChange={(e) => this.props.updateZip(e.target.value)}/>

              </div>
            </div>
          </div>

          
          <div id='one-next-spacing'>
          <Link to='/wizard/step2' component={routes}><button className='next-button'>Next Step</button></Link>
          </div>

        </div>
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