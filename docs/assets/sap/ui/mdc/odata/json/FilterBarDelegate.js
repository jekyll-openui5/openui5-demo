/*
 * ! OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/FilterBarDelegate",'sap/base/util/merge','sap/ui/mdc/util/IdentifierUtil'],function(F,m,I){"use strict";var J=Object.assign({},F);J._createFilterField=function(p,f,P){var M=P.modifier;var n=p.path||p.name;var s={};if(f.getId){s.id=f.getId();}else{s.id=f.id;}var S=M.getControlIdBySelector(s,P.appComponent);var i=S+"--filter--"+I.replace(n);var o;return M.createControl("sap.ui.mdc.FilterField",P.appComponent,P.view,i,{dataType:p.typeConfig.className,conditions:"{$filters>/conditions/"+n+'}',required:p.required,label:p.label,maxConditions:p.maxConditions,delegate:{name:"sap/ui/mdc/field/FieldBaseDelegate",payload:{}}},true).then(function(c){o=c;if(p.fieldHelp){var a=p.fieldHelp;if(P.view.getId){a=P.view.getId()+"--"+p.fieldHelp;}else{a=P.viewId+"--"+p.fieldHelp;}M.setAssociation(o,"fieldHelp",a);}if(p.filterOperators){if(f.getId){return M.setProperty(o,"operators",p.filterOperators);}else{return M.setProperty(o,"operators",p.filterOperators.join(','));}}}).then(function(){if(p.tooltip){M.setProperty(o,"tooltip",p.tooltip);}if(p.constraints){M.setProperty(o,"dataTypeConstraints",p.constraints);}if(p.formatOptions){M.setProperty(o,"dataTypeFormatOptions",p.formatOptions);}if(p.display){M.setProperty(o,"display",p.display);}return o;});};J.addItem=function(p,f,P){return J.fetchProperties().then(function(a){var o=null;a.some(function(b){if(p===I.getPropertyKey(b)){o=b;}return o!==null;});if(o){return J._createFilterField(o,f,P);}});};J.removeItem=function(f,o,p){return Promise.resolve(true);};J.fetchProperties=function(f){return new Promise(function(r,a){r([]);});};return J;});