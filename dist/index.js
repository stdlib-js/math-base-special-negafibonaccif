"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var i=a(function(C,f){f.exports=[0,1,-1,2,-3,5,-8,13,-21,34,-55,89,-144,233,-377,610,-987,1597,-2584,4181,-6765,10946,-17711,28657,-46368,75025,-121393,196418,-317811,514229,-832040,1346269,-2178309,3524578,-5702887,9227465,-14930352]});var t=a(function(F,u){
var n=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-assert-is-integerf/dist'),N=require('@stdlib/math-base-special-absf/dist'),q=require('@stdlib/constants-float32-max-safe-nth-fibonacci/dist'),c=i();function I(e){var r;return n(e)||v(e)===!1||e>0?NaN:(r=N(e),r>q?NaN:c[r])}u.exports=I
});var o=t();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
