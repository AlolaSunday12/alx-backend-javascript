/* eslint-disable jest/require-hook */
import handleResponseFromAPI from "./2-then";
/* eslint-enable jest/require-hook */

const promise = Promise.resolve();
handleResponseFromAPI(promise);
