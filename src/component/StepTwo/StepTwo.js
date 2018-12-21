import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import routes from '../../routes'


export default class StepOne extends Component {
  constructor(props) {
    super(props)

    this.state = {
      img: ''
    }

    this.handleImgChange = this.handleImgChange.bind(this)
    

  }

  handleImgChange(input) {
    console.log(input)
    this.setState({
      img: input
    })
  }
  

  

  render(){
    return(
      <div>
        <input placeholder='add URL here' onChange={(e) => this.handleImgChange(e.target.value)}/>
        <Link to='/' component={routes}><button>Cancel</button></Link>
        <Link to='/wizard/step1' component={routes}><button>Previous Step</button></Link>
        <Link to='/wizard/step3' component={routes}><button>Next Step</button></Link>
      </div>
      
    )
  }
}