/**
 * @description
 * Function to check if array or string has data
 * @param {array||string} list the list to check
 * @param {number} length the length to check
 * @returns {boolean} whether the list length is greater than the required length
 */
const isDataExists = (list, length = 0) => list && list.length > length;

/**
 * @description
 * Function to return the URL with the query parameters
 * @param {string} urlValue the backend URL to hit
 * @param {object} queryParams the query parameters related to the the URL
 * @returns {string} the url constructed with all the query params
 */
const getUrlStringWithParams = (urlValue, queryParams = {}) => {
  const queryParamKeys = Object.keys(queryParams);
  let paramString = '';
  if (isDataExists(queryParamKeys)) {
    paramString = queryParamKeys
      .map((key) => (queryParams[key] !== null ? `${key}=${queryParams[key]}` : ''))
      .join('&');
  }
  return paramString !== '' ? `${urlValue}?${paramString}` : `${urlValue}`;
};

export { isDataExists, getUrlStringWithParams };
