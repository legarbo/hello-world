module.exports = Strings_1_1 = (function () {
  return {
    isUnique: function (str) {
      var charset = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false);
      for (var i = 0; i < str.length; i++) {
        if(charset[i] == str[i]){
          return false;
        }
        charset[i] = str[i];
      }
      return true;  
    }
  }
}())
