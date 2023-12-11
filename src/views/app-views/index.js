import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export function AppViews() {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import('./home'))} />
        <Route path={`${APP_PREFIX_PATH}/user-list`} component={lazy(() => import('./user-list'))} />
        <Route path={`${APP_PREFIX_PATH}/user-settings`} component={lazy(() => import('./setting'))} />
        <Route path={`${APP_PREFIX_PATH}/plan-maker`} component={lazy(() => import('./plan-maker'))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  );
}

export default React.memo(AppViews);
