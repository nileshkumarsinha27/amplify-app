import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import SideNav from '../components/sideNav/SideNav';

/**
 * @description
 * Function to return the Layout component
 * @param {node} children the child components that are passed
 * @returns {node} the layout component
 */
const Layout = ({ children }) => (
  <main className="layout">
    <Header />
    <SideNav />
    <div className="layout-section">{children}</div>
  </main>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]),
};

Layout.defaultProps = {
  children: <div />,
};

export default Layout;
