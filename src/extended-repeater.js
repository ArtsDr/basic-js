import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (!options.repeatTimes) options.repeatTimes = 1
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1
  if (!options.separator) options.separator = '+'
  if (!options.additionSeparator) options.additionSeparator = '|'
  if (options.addition === undefined) options.addition = ''

  let addArray = []
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addArray.push(String(options.addition))
  }

  let myStr = []
  for (let i = 0; i < options.repeatTimes; i++) {
    myStr[i] = str + addArray.join(options.additionSeparator)
  }
  
  return myStr.join(options.separator)

    
  
    
}
