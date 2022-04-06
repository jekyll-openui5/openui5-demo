/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/BaseAddXml"],function(B){"use strict";var A={};function c(e){var i=e.index;if(e.referencedExtensionPoint){i+=c(e.referencedExtensionPoint);}return i;}A.applyChange=function(C,o,p){var v=p.view;var m=p.modifier;var s=C.getDefinition().selector;var e;return Promise.resolve().then(function(){var a=C.getExtensionPointInfo&&C.getExtensionPointInfo();if(!a){return m.getExtensionPointInfo(s.name,v);}return a;}).then(function(r){e=r;if(!e){throw new Error("AddXMLAtExtensionPoint-Error: Either no Extension-Point found by name '"+(s&&s.name)+"' or multiple Extension-Points available with the given name in the view (view.id='"+(v&&m.getId(v))+"'). Multiple Extension-points with the same name in one view are not supported!");}(e.defaultContent||[]).forEach(function(a){if(a){m.destroy(a);}});e.defaultContent=[];e.index=c(e);if(m.targets==="xmlTree"){e.skipAdjustIndex=true;}return B.applyChange(C,o,p,e);}).then(function(n){if(e.ready){e.ready(n);}return true;});};A.revertChange=B.revertChange;A.completeChangeContent=function(C,s){B.completeChangeContent(C,s);};return A;},true);
