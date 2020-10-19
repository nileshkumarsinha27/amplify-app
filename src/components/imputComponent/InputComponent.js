import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import INPUT_CONSTANTS from './inputComponent.constants';

/**
 * @description
 * Function to render the inout component
 * @param {string} customClassLabel the label custom class name
 * @param {string} customClassInput the input custom class name
 * @param {string} inputName the field name
 * @param {string} placeholder the input placeholder
 * @param {function} handleInputChange the input change callback
 * @returns {node} the input component
 */
const InputComponent = ({
  customClassLabel,
  customClassInput,
  inputName,
  placeholder,
  handleInputChange,
  keyUpHandler,
}) => {
  const [inputVal, updateVal] = useState('');
  /**
   * @description
   * Function to get the label tag classnames
   * @returns {string} the label tag class list
   */
  const getLabelClassNames = () => cx(['input-label', customClassLabel]);

  /**
   * @description
   * Function to get the input tag classnames
   * @returns {string} the input tag class list
   */
  const getInputClassNames = () => cx(['input-bar', customClassInput]);

  useEffect(() => {
    handleInputChange(inputVal, inputName);
  }, [inputVal, inputName, handleInputChange]);

  /**
   * @description
   * Function to handle the key up event
   * @param {object} event the keyup event object
   */
  const handleKeyUp = (event) => {
    if (event.key === INPUT_CONSTANTS.KEY.ENTER) {
      keyUpHandler(inputVal, inputName);
      updateVal('');
    }
  };

  return (
    <>
      <label htmlFor={inputName} className={getLabelClassNames()}>
        {inputName}
      </label>
      <input
        id={inputName}
        name={inputName}
        onChange={({ target: { value } }) => updateVal(value)}
        placeholder={placeholder}
        className={getInputClassNames()}
        value={inputVal}
        onKeyUp={handleKeyUp}
      />
    </>
  );
};

InputComponent.propTypes = {
  customClassLabel: PropTypes.string,
  customClassInput: PropTypes.string,
  inputName: PropTypes.string,
  placeholder: PropTypes.string,
  handleInputChange: PropTypes.func,
  keyUpHandler: PropTypes.func,
};

InputComponent.defaultProps = {
  customClassLabel: '',
  customClassInput: '',
  inputName: '',
  placeholder: '',
  handleInputChange: () => {},
  keyUpHandler: () => {},
};

export default InputComponent;
