import Loadable from 'react-loadable';
import React from 'react'
import Loading from '../../common/loading'
const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: Loading
});

const LoadableC = () => <LoadableComponent />

export default LoadableC
