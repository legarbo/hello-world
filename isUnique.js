module.exports = thisString = (function () {
  return {
    isUnique: function (str) {
      var char_set = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false);
      for (var i = 0; i < str.length; i++) {
        if(char_set[str[i].charCodeAt(0)]){
          return false;
        }
        char_set[str[i].charCodeAt(0)] = true 
      }
      return true;  
    }
  }
}())

console.log(thisString.isUnique('legarbo'))
console.log(thisString.isUnique('leopoldo'))
