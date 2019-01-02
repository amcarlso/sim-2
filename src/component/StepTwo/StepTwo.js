import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import routes from '../../routes'
import {updateImg} from '../../ducks/reducer'



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
      <div>
        <input placeholder='add URL here' onChange={(e) => this.props.updateImg(e.target.value)}/>
        <Link to='/' component={routes}><button>Cancel</button></Link>
        <Link to='/wizard/step1' component={routes}><button>Previous Step</button></Link>
        <Link to='/wizard/step3' component={routes}><button>Next Step</button></Link>
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