/* eslint-disable jest/require-hook */
import getFullResponseFromAPI from './1-promise';
/* eslint-enable jest/require-hook */

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
