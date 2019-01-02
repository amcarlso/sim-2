import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import routes from '../../routes'
import {updateMortgage} from '../../ducks/reducer'
import {updateRent} from '../../ducks/reducer'

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
      <div>
        <input placeholder='mortgage amount' onChange={(e) => this.props.updateMortgage(e.target.value)}/>
        <input placeholder='rent amount' onChange={(e) => this.props.updateRent(e.target.value)}/>
        <Link to='/' component={routes}><button>Cancel</button></Link>
        <Link to='/wizard/step2' component={routes}><button>Previous Step</button></Link>
        <button onClick={() => this.handleAddHouse()}>Complete</button>
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