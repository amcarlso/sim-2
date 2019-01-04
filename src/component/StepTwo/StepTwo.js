import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import routes from '../../routes'
import {updateImg} from '../../ducks/reducer'
import './StepTwo.css'



class StepTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      img: ''
    }
  }
  

  render(){
    console.log(this.props)
    return(
      <div id='steptwo-background'>
        <div className='display-area'>
          <div id='steptwo-header'>
            <h3 className='add-listing'>Add New Listing</h3>
            <Link to='/' component={routes}><button className='cancel-button'>Cancel</button></Link>
          </div>
          <div id='image-url-title'>
            <p>Image URL</p>
          </div>
          <div id='image-url-input-spacing'>
            <input id='url-input' onChange={(e) => this.props.updateImg(e.target.value)}/>
          </div>
          <div className='bottom-buttons-spacing'>
            <Link to='/wizard/step1' component={routes}><button className='previous-button'>Previous Step</button></Link>
            <Link to='/wizard/step3' component={routes}><button className='next-button'>Next Step</button></Link>
          </div>
        </div>
      </div>
      
    )
  }
}

const outputActions = {
  updateImg
}

function mapStateToProps( reduxState ){
  const {img} = reduxState;
  return { img }
}

export default connect(mapStateToProps, outputActions)(StepTwo);