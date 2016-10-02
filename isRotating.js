module.exports = Strings_1_8 = (function() {
  var isSubstring = function(str1, str2) { // check if str2 is a substring of str1
    return str1.indexOf(str2) != -1;
  };

  var sameLengthAndNotBlank = function(str1, str2) { // check if both strings have same length
   // and str1 is not empty
    var len = str1.length;
    return len === str2.length && len > 0;
  };

  return {
    isRotation: function(str1, str2) {
      if(!sameLengthAndNotBlank(str1, str2)) {
        return false;
      }
      if(isSubstring(str1+str1, str2)) {
        return true;
      }
    }
  };
}());
