const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type){
       if (type === false) {
          this.direction = false;
       } else {
          this.direction = true;
       }   
       this.alpfabet = ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }
  encrypt(message, key) {
      if (!key || !message) {
        throw new Error('Incorrect arguments!');
      }
      
      let count = 0;
      let keyString = message.toUpperCase().split('').map( item => {
          if (this.alpfabet.includes(item)) {
            return key[count++ % key.length].toUpperCase();
          } else {
            return item;
          }
      })

      let result = [];
      message.toUpperCase().split('').forEach((item, number) => {
        if (this.alpfabet.includes(item)) {
          let tmp = (this.alpfabet.indexOf(item) + this.alpfabet.indexOf(keyString[number])) % 26;
          result.push(this.alpfabet[tmp]);
        } else {
          result.push(item);
        }
      })
      
      if (this.direction) {
          return result.join('');
      } else {
        return result.reverse().join('');
      }

  }
  decrypt(message, key) {

    if (!key || !message) {
      throw new Error('Incorrect arguments!');
    }
    
    let count = 0;
    let keyString = message.toUpperCase().split('').map( item => {
        if (this.alpfabet.includes(item)) {
          return key[count++ % key.length].toUpperCase();
        } else {
          return item;
        }
    })

    let result = [];
    message.toUpperCase().split('').forEach((item, number) => {
        if (this.alpfabet.includes(item)) {
          let tmp = this.alpfabet.indexOf(item) - (this.alpfabet.indexOf(keyString[number]) % 26);
          if (tmp < 0) {
              tmp += 26;
          }
          result.push(this.alpfabet[tmp])
        } else {
          result.push(item)
        }
    });
    if (this.direction) {
        return result.join('');
    } else {
        return result.reverse().join('');
    }

  }
}

module.exports = {
  VigenereCipheringMachine
};
