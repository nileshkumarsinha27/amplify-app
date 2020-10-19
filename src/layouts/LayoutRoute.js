import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from './Layout';

/**
 * @description
 * Function to render the layout route component
 * @param {node} component the component to be rendered
 * @param {object} rest the additional props passed
 * @returns {node} the layout route component
 */
const LayoutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    )}
  />
);

LayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LayoutRoute;
