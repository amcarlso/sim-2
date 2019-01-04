import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import routes from '../../routes'
import {updateMortgage} from '../../ducks/reducer'
import {updateRent} from '../../ducks/reducer'
import './StepThree.css'

class StepThree extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mortgage: '',
      rent: ''
    }
  }  

  handleAddHouse = () => {
    const {name, address, city, state, zip, img, mortgage, rent} = this.props
    console.log(this.props)
    axios.post('/api/house', {name, address, city, state, zip, img, mortgage, rent})
    .then( res => {
      this.props.history.push('/') //<---- use istae
    })
  }

  render(){
    console.log(this.props)
    return(
      <div id='stepthree-background'>
        <div className='display-area'>
          <div id='stepthree-header'>
            <h3 className='add-listing'>Add New Listing</h3>
            <Link to='/' component={routes}><button className='cancel-button'>Cancel</button></Link>
          </div>
          <div>
            <div>
              <div className='input-title'>
                <p>Monthly Mortgage Amount</p>
              </div>
              <div className='input-spacing'>
                <input className='input-box-sizing' onChange={(e) => this.props.updateMortgage(e.target.value)}/>
              </div>
            </div>
            <div>
              <div className='input-title'>
                <p>Desired Monthly Rent</p>
              </div>
              <div className='input-spacing'>
                <input className='input-box-sizing' onChange={(e) => this.props.updateRent(e.target.value)}/>
              </div>
            </div>
          </div>
          <div className='bottom-buttons-spacing'>
            <Link to='/wizard/step2' component={routes}><button className='previous-button'>Previous Step</button></Link>
            <button className='complete-button' onClick={() => this.handleAddHouse()}>Complete</button>
          </div>
          
        </div>
        
      </div>
      
    )
  }
}

const outputActions = {
  updateMortgage,
  updateRent
}

function mapStateToProps( ReduxState ){
  const {name, address, city, state, zip, img, mortgage, rent} = ReduxState;
  return { name, address, city, state, zip, img, mortgage, rent }
}

export default connect(mapStateToProps, outputActions)(StepThree);