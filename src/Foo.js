import React, { PropTypes } from 'react';
import Api from './api'

// import { useFeatures } from './hooks/featureHook'
import { useFeatures } from './hooks/simpleFeatureHook'

const propTypes = {};

const defaultProps = {};

const Foo = () => {
  const flags = useFeatures();
  return <div>
    <h1>Component 1</h1>
    <pre>{JSON.stringify(flags, null, 4)}</pre>
  </div>
}

export default Foo;