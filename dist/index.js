"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=a(function(A,s){s.exports=[0,1,-1,2,-3,5,-8,13,-21,34,-55,89,-144,233,-377,610,-987,1597,-2584,4181,-6765,10946,-17711,28657,-46368,75025,-121393,196418,-317811,514229,-832040,1346269,-2178309,3524578,-5702887,9227465,-14930352]});var t=a(function(C,u){
var f=require('@stdlib/math-base-assert-is-nanf/dist'),n=require('@stdlib/math-base-assert-is-integerf/dist'),v=require('@stdlib/math-base-special-absf/dist'),N=require('@stdlib/constants-float32-max-safe-nth-fibonacci/dist'),q=i();function c(e){var r;return f(e)||n(e)===!1||e>0?NaN:(r=v(e),r>N?NaN:q[r])}u.exports=c
});var I=t();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
