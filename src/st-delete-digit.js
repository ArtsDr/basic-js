import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  
  let strDigit = n.toString()
  let arrayOfDigits = []

  for (let i = 0; i < strDigit.length; i++) {
    arrayOfDigits.push(parseInt(strDigit.substr(0, i) + strDigit.substr(i + 1, strDigit.length - 1)))
  }
  
  return arrayOfDigits.sort((a, b) => b - a)[0]
}
