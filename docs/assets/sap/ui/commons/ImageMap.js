/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control','sap/ui/core/delegate/ItemNavigation',"./ImageMapRenderer"],function(q,l,C,I,a){"use strict";var b=C.extend("sap.ui.commons.ImageMap",{metadata:{library:"sap.ui.commons",properties:{name:{type:"string",group:"Misc",defaultValue:null}},aggregations:{areas:{type:"sap.ui.commons.Area",multiple:true,singularName:"area"}},events:{press:{parameters:{areaId:{type:"string"}}}}}});b.prototype.createArea=function(){var A=new sap.ui.commons.Area();for(var i=0;i<arguments.length;i++){var c=arguments[i];var A;if(c instanceof sap.ui.commons.Area){A=c;}else{A=new sap.ui.commons.Area(c);}this.addArea(A);}return this;};b.prototype.onAfterRendering=function(){this.oDomRef=this.getDomRef();if(!this.oItemNavigation){this.oItemNavigation=new I();}if(!!sap.ui.Device.browser.internet_explorer){var t=this;var c=[];this.oItemNavigation.setTabIndex0();var $=q("img[usemap='#"+this.getName()+"']");$.each(function(i,e){var f=e.getAttribute("id");var g=sap.ui.getCore().byId(f);g.addDelegate(t.oItemNavigation);t.oItemNavigation.setRootDomRef(e);c.push(g);});this.aImageControls=c;}else{this.addDelegate(this.oItemNavigation);this.oItemNavigation.setRootDomRef(this.oDomRef);}var d=[];var A=this.getAreas();for(var i=0;i<A.length;i++){var D=A[i].getFocusDomRef();if(D){d.push(D);}}this.oItemNavigation.setItemDomRefs(d);this.oItemNavigation.setCycling(true);this.oItemNavigation.setSelectedIndex(-1);this.oItemNavigation.setFocusedIndex(-1);};b.prototype.exit=function(){if(this.oItemNavigation){if(!!sap.ui.Device.browser.internet_explorer){for(var i=0;i<this.aImageControls.length;i++){this.aImageControls[i].removeDelegate(this.oItemNavigation);}}else{this.removeDelegate(this.oItemNavigation);}this.oItemNavigation.destroy();delete this.oItemNavigation;}};return b;},true);
