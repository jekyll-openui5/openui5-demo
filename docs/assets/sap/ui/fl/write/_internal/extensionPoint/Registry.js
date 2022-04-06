/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObjectObserver","sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/fl/Utils"],function(M,J,F){"use strict";var E={};var o={};var e={};var m={};function a(f){var p=f.object.getId();e[p].forEach(function(g){m[g.view.getId()][g.name].bParentIsDestroyed=true;});}function b(f){var p=f.object.getId();e[p].forEach(function(g){var A=g.aggregationName;if(A===f.name){var C=F.getAggregation(f.object,A);var h=[].concat(C||[]).map(function(i){return i.getId();});if(f.mutation==="insert"){if(h.indexOf(f.child.getId())<g.index){g.index++;}}else if(g.aggregation.indexOf(f.child.getId())<g.index){g.index--;}g.aggregation=h;}});}function c(f){if(f.type==="destroy"){a(f);}else{b(f);}}function s(p,A){var P=p.getId();if(!o[P]){var O=new M(c.bind(this));O.observe(p,{aggregations:[A],destroy:true});o[P]={observer:O,aggregations:[A]};}else{var i=o[P].observer.isObserved(p,{aggregations:[A]});if(!i){o[P].aggregations.push(A);o[P].observer.observe(p,{aggregations:o[P].aggregations,destroy:true});}}}function d(p,A,f){var v=f.view.getId();var g=F.getAggregation(p,A);var C=[].concat(g||[]).map(function(h){return h.getId();});var P=p.getId();if(!e[P]){e[P]=[];}if(!m[v]){m[v]={};}f.aggregation=C;e[P].push(f);m[v][f.name]=f;}E.registerExtensionPoint=function(f){var p=f.targetControl;var A=f.aggregationName;s(p,A);d(p,A,f);};E.getExtensionPointInfo=function(f,v){return m[v.getId()]&&m[v.getId()][f];};E.getExtensionPointInfoByViewId=function(v){return m[v]||{};};E.getExtensionPointInfoByParentId=function(p){return e[p]||[];};E.clear=function(){Object.keys(o).forEach(function(p){o[p].observer.disconnect();o[p].observer.destroy();});o={};e={};m={};};return E;});
