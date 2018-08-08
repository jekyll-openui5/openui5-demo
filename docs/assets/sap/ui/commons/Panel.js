/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control',"./PanelRenderer"],function(q,l,C,P){"use strict";var a=C.extend("sap.ui.commons.Panel",{metadata:{library:"sap.ui.commons",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},enabled:{type:"boolean",group:"Behavior",defaultValue:true},scrollLeft:{type:"int",group:"Behavior",defaultValue:0},scrollTop:{type:"int",group:"Behavior",defaultValue:0},applyContentPadding:{type:"boolean",group:"Appearance",defaultValue:true},collapsed:{type:"boolean",group:"Behavior",defaultValue:false},areaDesign:{type:"sap.ui.commons.enums.AreaDesign",group:"Appearance",defaultValue:sap.ui.commons.enums.AreaDesign.Fill},borderDesign:{type:"sap.ui.commons.enums.BorderDesign",group:"Appearance",defaultValue:sap.ui.commons.enums.BorderDesign.Box},showCollapseIcon:{type:"boolean",group:"Behavior",defaultValue:true},text:{type:"string",group:"Misc",defaultValue:null}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"},title:{type:"sap.ui.core.Title",multiple:false},buttons:{type:"sap.ui.commons.Button",multiple:true,singularName:"button"}}}});a.prototype.init=function(){this._oScrollDomRef=null;this._iMaxTbBtnWidth=-1;this._iTbMarginsAndBorders=0;this._iMinTitleWidth=30;this._iOptTitleWidth=30;this._iTitleMargin=0;this._bFocusCollapseIcon=false;this._resizeDelayTimer=null;this._rb=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");this.data("sap-ui-fastnavgroup","true",true);};a.prototype.exit=function(){this._rb=undefined;};a.prototype.onThemeChanged=function(){if(this.getDomRef()&&this._oTitleDomRef){this.getDomRef().style.minWidth="auto";if(this._oToolbarDomRef){this._oToolbarDomRef.style.width="auto";}this._oTitleDomRef.style.width="auto";this._initializeSizes();if(!q.support.flexBoxLayout||(a._isSizeSet(this.getHeight())&&(this._hasIcon()||(this.getButtons().length>0)))){this._handleResizeNow();}}};a.prototype.onBeforeRendering=function(){if(this.sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);this.sResizeListenerId=null;}};a.prototype.onAfterRendering=function(){var i=this.getId();this._oScrollDomRef=q.sap.domById(i+"-cont");if(!this._oScrollDomRef){return;}this._oHeaderDomRef=q.sap.domById(i+"-hdr");this._oTitleDomRef=q.sap.domById(i+"-title");this._oToolbarDomRef=q.sap.domById(i+"-tb");if(this._bFocusCollapseIcon){this._bFocusCollapseIcon=false;var $=q.sap.byId(i+"-collArrow");if($.is(":visible")&&($.css("visibility")=="visible"||$.css("visibility")=="inherit")){$.focus();}else{var b=q.sap.byId(i+"-collIco");if(b.is(":visible")&&(b.css("visibility")=="visible"||b.css("visibility")=="inherit")){b.focus();}}}this._initializeSizes();if(!q.support.flexBoxLayout||(a._isSizeSet(this.getHeight())&&(this._hasIcon()||(this.getButtons().length>0)))){this._handleResizeNow();this.sResizeListenerId=sap.ui.core.ResizeHandler.register(this.getDomRef(),q.proxy(this._handleResizeSoon,this));}};a.prototype.getFocusInfo=function(){var c=null;var i=this.getId();if(this._bFocusCollapseIcon){var $=q.sap.byId(i+"-collArrow");if($.is(":visible")&&($.css("visibility")=="visible"||$.css("visibility")=="inherit")){c=$[0].id;}else{var b=q.sap.byId(i+"-collIco");if(b.is(":visible")&&(b.css("visibility")=="visible"||b.css("visibility")=="inherit")){c=b[0].id;}}}return{id:(c?c:i)};};a.prototype.applyFocusInfo=function(f){var d;if(f&&f.id&&(d=q.sap.byId(f.id))&&(d.length>0)){d.focus();}else{this.focus();}return this;};a.prototype._initializeSizes=function(){var r=sap.ui.getCore().getConfiguration().getRTL();var b=this.getButtons();if(b&&b.length>0){var m=0;q(this._oToolbarDomRef).children().each(function(){var w=this.offsetWidth;if(w>m){m=w;}});this._iMaxTbBtnWidth=m;if(this._oToolbarDomRef){this._oToolbarDomRef.style.minWidth=m+"px";var $=q(this._oToolbarDomRef);this._iTbMarginsAndBorders=$.outerWidth(true)-$.width();}}var c=this._oTitleDomRef.offsetLeft;var t=this.getDomRef().offsetWidth;if(r){c=t-(c+this._oTitleDomRef.offsetWidth);}var d=q(this._oTitleDomRef);this._iOptTitleWidth=d.width()+1;this._iTitleMargin=d.outerWidth(true)-d.outerWidth();var e=10000;q(this._oHeaderDomRef).children(".sapUiPanelHdrRightItem").each(function(){var h=this.offsetLeft;if(r){h=t-(h+this.offsetWidth);}if((h<e)&&(h>0)){e=h;}});var f=c;f+=this._iMinTitleWidth;f+=this._iMaxTbBtnWidth+1;f+=(e==10000)?10:(t-e);this.getDomRef().style.minWidth=f+10+"px";if(this._oScrollDomRef){var s=this.getProperty("scrollTop");if(s>0){this._oScrollDomRef.scrollTop=s;}var g=this.getProperty("scrollLeft");if(g>0){this._oScrollDomRef.scrollLeft=g;}}};a.prototype._fixContentHeight=function(){if(a._isSizeSet(this.getHeight())&&(this._hasIcon()||(this.getButtons().length>0))){this._iContTop=this._oHeaderDomRef.offsetHeight;if(this._oScrollDomRef){this._oScrollDomRef.style.top=this._iContTop+"px";}}};a.prototype._handleResizeSoon=function(){if(this._resizeDelayTimer){q.sap.clearDelayedCall(this._resizeDelayTimer);}this._resizeDelayTimer=q.sap.delayedCall(200,this,function(){this._handleResizeNow();this._resizeDelayTimer=null;});};a.prototype._handleResizeNow=function(){if(!q.support.flexBoxLayout&&this.getDomRef()){var r=sap.ui.getCore().getConfiguration().getRTL();var b=this._oTitleDomRef.offsetLeft;var t=this.getDomRef().offsetWidth;if(r){b=t-(b+this._oTitleDomRef.offsetWidth);}var c=10000;q(this._oHeaderDomRef).children(".sapUiPanelHdrRightItem").each(function(){var e=this.offsetLeft;if(r){e=t-(e+this.offsetWidth);}if((e<c)&&(e>0)){c=e;}});var d=(c==10000)?this.$().width()-b-20:c-b-10;var B=this.getButtons();if(B&&B.length>0){if((d-this._iOptTitleWidth-this._iTitleMargin)>(this._iMaxTbBtnWidth-this._iTbMarginsAndBorders)){this._oToolbarDomRef.style.width=(d-this._iOptTitleWidth-this._iTitleMargin-this._iTbMarginsAndBorders)+"px";this._oTitleDomRef.style.width=this._iOptTitleWidth+"px";}else{this._oToolbarDomRef.style.width=this._iMaxTbBtnWidth+"px";this._oTitleDomRef.style.width=Math.max((d-this._iMaxTbBtnWidth-this._iTbMarginsAndBorders),this._iMinTitleWidth)+"px";}}else{this._oTitleDomRef.style.width=Math.max(d,this._iMinTitleWidth)+"px";}}this._fixContentHeight();};a.prototype._hasIcon=function(){return(this.getTitle()&&this.getTitle().getIcon());};a.prototype.setEnabled=function(e){this.setProperty("enabled",e,true);q(this.getDomRef()).toggleClass("sapUiPanelDis",!e);return this;};a.prototype.setApplyContentPadding=function(p){this.setProperty("applyContentPadding",p,true);q(this.getDomRef()).toggleClass("sapUiPanelWithPadding",p);return this;};a.prototype.setCollapsed=function(c){this.setProperty("collapsed",c,true);this._setCollapsedState(c);return this;};a.prototype._setCollapsedState=function(c){var d=this.getDomRef();if(d){var b=sap.ui.getCore().getConfiguration().getAccessibility();if(c){if(!this.getWidth()){d.style.width=this.getDomRef().offsetWidth+"px";}q(d).addClass("sapUiPanelColl");if(b){d.setAttribute("aria-expanded","false");}if(this.getHeight()){d.style.height="auto";}var e=this._rb.getText("PANEL_EXPAND");this.$("collArrow").attr("title",e);this.$("collIco").attr("title",e);}else{if(!this.getDomRef("cont")){this._bFocusCollapseIcon=true;this.rerender();}else{q(d).removeClass("sapUiPanelColl");if(b){d.setAttribute("aria-expanded","true");}if(!this.getWidth()){d.style.width="auto";}if(this.getHeight()){d.style.height=this.getHeight();}var s=this._rb.getText("PANEL_COLLAPSE");this.$("collArrow").attr("title",s);this.$("collIco").attr("title",s);}}}};a._isSizeSet=function(c){return(c&&!(c=="auto")&&!(c=="inherit"));};a.prototype.setTitle=function(t){var o=this.getTitle();this.setAggregation("title",t);if(o&&o!==t&&o.getId()===this.getId()+"-tit"){o.destroy();}return this;};a.prototype.setText=function(t){if(!this.getTitle()){this.setTitle(new sap.ui.core.Title(this.getId()+"-tit",{text:t}));}else{this.getTitle().setText(t);}return this;};a.prototype.getText=function(){if(!this.getTitle()){return"";}else{return this.getTitle().getText();}};a.prototype.getScrollLeft=function(){var s=0;if(this._oScrollDomRef){if(sap.ui.getCore().getConfiguration().getRTL()){s=q(this._oScrollDomRef).scrollLeftRTL();}else{s=q(this._oScrollDomRef).scrollLeft();}this.setProperty("scrollLeft",s,true);}return s;};a.prototype.setScrollLeft=function(p){this.setProperty("scrollLeft",p,true);if(this._oScrollDomRef){if(sap.ui.getCore().getConfiguration().getRTL()){q(this._oScrollDomRef).scrollLeftRTL(p);}else{q(this._oScrollDomRef).scrollLeft(p);}}return this;};a.prototype.getScrollTop=function(){var s=0;if(this._oScrollDomRef){s=Math.ceil(this._oScrollDomRef.scrollTop);this.setProperty("scrollTop",s,true);}return s;};a.prototype.setScrollTop=function(p){this.setProperty("scrollTop",p,true);if(this._oScrollDomRef){this._oScrollDomRef.scrollTop=p;}return this;};a.prototype.setDimensions=function(w,h){this.setWidth(w);this.setHeight(h);return this;};a.prototype.setWidth=function(w){this.setProperty("width",w,true);var d=this.getDomRef();if(d){d.style.width=w;}return this;};a.prototype.setHeight=function(h){this.setProperty("height",h,true);var d=this.getDomRef();if(d){d.style.height=h;}return this;};a.prototype.onclick=function(e){this._handleTrigger(e);};a.prototype.onsapspace=function(e){this._handleTrigger(e);};a.prototype._handleTrigger=function(e){var i=this.getId();if((e.target.id===i+"-collArrow")||(e.target.id===i+"-collIco")||(e.target.id===i&&e.type==="sapspace"&&this.getShowCollapseIcon())){this.setCollapsed(!this.getProperty("collapsed"));e.preventDefault();e.stopPropagation();this.fireEvent("collapsedToggled");}};return a;},true);
