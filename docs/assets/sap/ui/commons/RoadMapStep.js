/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Element'],function(q,l,E){"use strict";var R=E.extend("sap.ui.commons.RoadMapStep",{metadata:{library:"sap.ui.commons",properties:{label:{type:"string",group:"Misc",defaultValue:null},enabled:{type:"boolean",group:"Misc",defaultValue:true},expanded:{type:"boolean",group:"Misc",defaultValue:false,deprecated:true},visible:{type:"boolean",group:"Misc",defaultValue:true}},defaultAggregation:"subSteps",aggregations:{subSteps:{type:"sap.ui.commons.RoadMapStep",multiple:true,singularName:"subStep",deprecated:true}}}});(function(){R.prototype.setLabel=function(L){s(this,"label",L,function(){sap.ui.commons.RoadMapRenderer.setStepLabel(this,L);this.setProperty("label",L,true);sap.ui.commons.RoadMapRenderer.addEllipses(this);return true;});return this;};R.prototype.setEnabled=function(e){var o=this.getEnabled();if((e&&o)||(!e&&!o)){return this;}s(this,"enabled",e,function(){var r=g(this);var w=sap.ui.commons.RoadMapRenderer.setStepEnabled(r,this,e);if(w){r.setProperty("selectedStep","",true);}if(!e){this.setExpanded(false);}return false;});return this;};R.prototype.setExpanded=function(e){var o=this.getExpanded();if((e&&o)||(!e&&!o)){return this;}s(this,"expanded",e,function(){if(i(this)||this.getSubSteps().length==0||!this.getEnabled()||!e){this.setProperty("expanded",false,true);if(!i(this)&&this.getSubSteps().length>0&&this.getEnabled()){sap.ui.commons.RoadMapRenderer.selectStep(g(this),this,false,true,null,true);}}else{this.setProperty("expanded",true,true);sap.ui.commons.RoadMapRenderer.selectStep(g(this),this,false,true,null,true);}return true;});return this;};R.prototype.setVisible=function(v){var o=this.getVisible();if((v&&o)||(!v&&!o)){return this;}s(this,"visible",v,function(){var r=g(this);var w=sap.ui.commons.RoadMapRenderer.setStepVisible(r,this,i(this),v);if(w){r.setProperty("selectedStep","",true);}this.setProperty("visible",v,true);sap.ui.commons.RoadMapRenderer.updateStepArea(r);sap.ui.commons.RoadMapRenderer.updateStepAria(this);return true;});return this;};R.prototype.getFocusDomRef=function(){return q.sap.byId(this.getFocusInfo().id).get(0)||null;};R.prototype.getFocusInfo=function(){return{id:this.getId()+"-box"};};R.prototype.onclick=function(e){this.handleSelect(e);};R.prototype.onsapselect=function(e){this.handleSelect(e);};R.prototype.handleSelect=function(e,I){e.stopPropagation();e.preventDefault();if(!I&&!q.sap.containsOrEquals(this.getDomRef(),e.target)){return;}if(this.getEnabled()){var r=g(this);var t=this;sap.ui.commons.RoadMapRenderer.selectStep(r,this,i(this),false,function(T){var w=r.getSelectedStep()==t.getId();r.setProperty("selectedStep",t.getId(),true);t.focus();if(T!="selected"){t.setProperty("expanded",T=="expanded",true);r.fireStepExpanded({stepId:t.getId()});}if(!w){r.fireStepSelected({stepId:t.getId()});}});}else{this.focus();}};var g=function(t){var r=t.getParent();if(i(t)){r=r.getParent();}return r;};var i=function(t){return!(t.getParent()instanceof sap.ui.commons.RoadMap);};var s=function(t,n,v,d){if(!t.getDomRef()){t.setProperty(n,v);return;}var S=d.apply(t,[]);if(!S){t.setProperty(n,v,true);}};}());return R;},true);
