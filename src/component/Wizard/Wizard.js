import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import routes from '../../routes'
import axios from 'axios';
import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepOne from '../StepOne/StepOne'


export default class Wizard extends Component {

  render() {
    return (
      <div>
        
        
        
        <Link to='/' component={routes}><button onClick={() => this.handleAddHouse()}>Complete</button></Link>
        
      </div>
    )
  }
}