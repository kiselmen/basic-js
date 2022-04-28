const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};  
  domains.forEach( item => {
        let parts = item.split('.');
        parts.forEach( (elem, key, arr) => {
            let curDomain = '.' + arr.slice(key).reverse().join('.');
            console.log(curDomain);
            if (result.hasOwnProperty(curDomain) === true ){
              result[curDomain] = result[curDomain] + 1;
            } else {
              result[curDomain] = 1;
            }
        })
  })
  console.log(result);
  return result;
}

// const domains = [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
// ]
 
// getDNSStats(domains);

module.exports = {
  getDNSStats
};
