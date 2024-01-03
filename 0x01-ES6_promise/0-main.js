/* eslint-disable jest/require-hook */
import getResponseFromAPI from "./0-promise.js";
/* eslint-enable jest/require-hook */

const response = getResponseFromAPI();
console.log(response instanceof Promise);
