if(Frankentype.Extensions){
  Array.prototype = Array.prototype || {};
  Frankentype.Extensions.Object.merge(Array.prototype, Frankentype.Extensions.Array);
}