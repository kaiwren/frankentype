(function(){
  var Frankentype = window.Frankentype || {};
  Frankentype.Extensions = {};
  
  Frankentype.Extensions.Object = {
    merge: function(target, source){
      for (var attrname in source) { target[attrname] = source[attrname]; }
    }
  };
  
  Frankentype.Extensions.Array = {
    each: function(fn, target){
      var target = array || this;
      var i = 0;
      for(i=0; i < target.length; ++i){
        fn(this[i]);
      }
    }
  };
  
  window.Frankentype = Frankentype;
})();