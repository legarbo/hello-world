
module.exports = thisStringIs = (function() {
  return{
    // Checks if a string is a permutation of a palindrome
    // Solution #4 from the book. Assumes ascii character set
    // @param {String} str - Word or phrase
    // @retuns {Boolean} - true if a permutation of palindrome exists, false if it does not
    palindromePermutation: function(str){
      var distinct = 0;
      var s_array = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0);
      str = str.toLowerCase();
      for(var i = 0; i < str.length; i++){
        if(str[i] == ' '){
          continue;
        }
        s_array[str[i].charCodeAt(0)]++;
        if(s_array[str[i].charCodeAt(0)] % 2){
          distinct++;
        }else{
          distinct--;
        }
      }
      return (distinct < 2);
    }
  };
}());
var str1 = 'Al lets Della call Ed Stella'
var str2 = 'A Santa At Nasa'
var result = thisStringIs.palindromePermutation(str1)
console.log(result)
result = thisStringIs.palindromePermutation(str2)
console.log(result)
