import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/actions/Users';

export const AppViews = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
      <Suspense fallback={<Loading cover='content'/>}>
        <Switch>
          <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))}/>
          <Route path={`${APP_PREFIX_PATH}/main`} component={lazy(() => import(`./main`))}/>
          <Route path={`${APP_PREFIX_PATH}/client`} component={lazy(() => import(`./client`))}/>
          <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`}/>
        </Switch>
      </Suspense>
  );
};

export default React.memo(AppViews);
