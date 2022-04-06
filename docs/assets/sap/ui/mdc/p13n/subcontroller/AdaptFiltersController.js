/*
 * ! OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseController","sap/ui/mdc/p13n/P13nBuilder","sap/base/util/merge"],function(B,P,m){"use strict";var A=B.extend("sap.ui.mdc.p13n.subcontroller.AdaptFiltersController");A.prototype.getUISettings=function(){return{verticalScrolling:false,title:sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc").getText("filterbar.ADAPT_TITLE"),afterClose:function(e){var d=e.getSource();if(d){d.getContent()[0].executeRemoves();d.removeAllContent();d.destroy();}}};};A.prototype.getBeforeApply=function(){var a=this.getAdaptationControl().getInbuiltFilter();var p=a?a.createConditionChanges():Promise.resolve([]);return p;};A.prototype.getFilterControl=function(){return this.getAdaptationControl();};A.prototype.getChangeOperations=function(){return{add:"addFilter",remove:"removeFilter",move:"moveFilter"};};A.prototype.getAdaptationUI=function(p){return this.getAdaptationControl().retrieveInbuiltFilter().then(function(a){var o=this._getP13nModel(p);a.setP13nModel(o);a.setLiveMode(false);return a.createFilterFields().then(function(){return a;});}.bind(this));};A.prototype.getResetEnabled=function(){return true;};A.prototype.update=function(){B.prototype.update.apply(this,arguments);this.getAdaptationControl().getInbuiltFilter().createFilterFields();};A.prototype.mixInfoAndState=function(p){var e=this.getAdaptationControl().getCurrentState().filter||{};var i=this.getCurrentState();var E=P.arrayToMap(i);var o=P.prepareAdaptationData(p,function(I,a){var b=E[a.name];var c=e[a.name];I.visible=b?true:false;I.visibleInDialog=true;I.selected=I.visible;I.position=b?b.position:-1;I.isFiltered=c&&c.length>0?true:false;I.required=a.required;return!(a.hiddenFilter===true||a.name=="$search");},true);P.sortP13nData({visible:"visible",position:"position"},o.items);return o;};return A;});