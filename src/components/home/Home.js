import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../button/Button';
import homeLogo from '../../assets/images/homeLogo.png';
import ROUTE_CONSTANTS from '../../appRoutes';
import HOME_CONSTANTS from './home.constants';
import { isDataExists } from '../../utils/utils';
import './home.scss';

/**
 * @description
 * Function to render the home component
 * @returns {node} the home component
 */
const Home = () => {
  const history = useHistory();
  /**
   * @description
   * Function to get the actions config
   * @returns {array} the actions config list
   */
  const getActionsConfigList = () => [
    {
      value: HOME_CONSTANTS.BUTTON_VALUES.TO_DO,
      onClick: () => history.push(ROUTE_CONSTANTS.TO_DO),
    },
  ];
  /**
   * @description
   * Function to render the actions section
   * @returns {node} the actions section
   */
  const renderActionsList = () =>
    getActionsConfigList().map((btnConfig, index) => <Button {...btnConfig} key={index} />);
  return (
    <section className="home-section">
      <div className="description-section">
        <img src={homeLogo} alt="home" onClick={() => history.push(ROUTE_CONSTANTS.HOME)} />
        <p className="app-description">{HOME_CONSTANTS.APP_DESCRIPTION}</p>
        <div className="actions-section">
          {isDataExists(getActionsConfigList()) && renderActionsList()}
        </div>
      </div>
    </section>
  );
};

export default Home;
