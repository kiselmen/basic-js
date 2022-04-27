const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  chain_data : [],

  getLength() {
      return this.chain_data.length;
  },
  
  addLink(value) {
      this.chain_data.push(value);
      return this;
  },
  
  removeLink(position) {
      if (typeof position !== 'number'||position > this.chain_data.length||position <= 0) {
          this.chain_data.length = 0;
          throw new Error("You can't remove incorrect link!");  
      } 
      this.chain_data.splice(position - 1, 1);
      return this;
  },
  
  reverseChain() {
      this.chain_data.reverse();
      return this;
  },
  
  finishChain() {
      let result = "";
      this.chain_data.forEach( (elem, key, array) => {
          result += '( ' + elem + ' )';
          if (key !== array.length - 1) result += '~~';
      }) 
      this.chain_data.length = 0;  
      return result;
  },
};

module.exports = {
  chainMaker
};
