import {Switch, Route} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import StepOne from './component/StepOne/StepOne'
import StepTwo from './component/StepTwo/StepTwo'
import StepThree from './component/StepThree/StepThree'
import React from 'react';

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/wizard/step1' component={StepOne} />
    <Route path='/wizard/step2' component={StepTwo} />
    <Route path='/wizard/step3' component={StepThree} />
  </Switch>
)