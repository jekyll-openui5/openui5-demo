/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/dom/includeStylesheet","sap/base/util/uid"],function(i,u){"use strict";var S="SUCCESS";var a="FAIL";var b="PENDING";var s={};function l(F){var C={id:u(),status:b,counter:1};var p=new Promise(function(r,R){i(F,C.id,r,R);}).then(function(){var C=s[F];if(C.counter===0){d(F);}else{f(F,S);}}).catch(function(){f(F,a);return Promise.reject("File not found or some other network issue happened.");});C.promise=p;s=Object.assign({},s);s[F]=C;return C.promise;}function d(F){var m=Object.assign({},s);var C=m[F];var E=document.getElementById(C.id);if(E&&E.parentNode){E.parentNode.removeChild(E);}delete m[F];s=m;}function c(F){var D={};D[F]=Object.assign({},s[F]);D[F].counter++;s=Object.assign({},s,D);return s[F];}function e(F){var D={};D[F]=Object.assign({},s[F]);D[F].counter--;s=Object.assign({},s,D);return s[F];}function f(F,h){var D={};D[F]=Object.assign({},s[F]);D[F].status=h;s=Object.assign({},s,D);return s[F];}function g(m){return sap.ui.require.toUrl(m)+".css";}return{add:function(m){var F=g(m);var h=s[F];if(h){c(F);return h.promise;}return l(F);},remove:function(m){var F=g(m);var C=s[F];if(C){var U=e(F);if(U.counter===0&&U.status===S){d(F);}}}};});
