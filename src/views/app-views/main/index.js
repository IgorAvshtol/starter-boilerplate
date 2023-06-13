import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Clients from './clients/list';

const ClientsComponents = ({ match }) => {
  return (
      <div>
        <Switch>
          <Route path={`${match.url}/clients`} component={Clients}/>
        </Switch>
      </div>
  )
};

export default ClientsComponents;
