import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  simpleChain : [],

  getLength() {
    return this.simpleChain.length
  },

  addLink(value) {
    this.simpleChain.push(`( ${value} )`)
    return  this
  },

  removeLink(position) {
    if (!(typeof(position) === "number") || position >= this.simpleChain.length || position < 1) {
      this.simpleChain = []
      throw new Error("You can't remove incorrect link!");
    } else {
      this.simpleChain.splice(position - 1, 1)
      return this
    }
  },
  
  reverseChain() {
    this.simpleChain.reverse()
    return this
  },

  finishChain() {
    let resultChain = this.simpleChain.join("~~")
    this.simpleChain = []
    return resultChain
  }
};
