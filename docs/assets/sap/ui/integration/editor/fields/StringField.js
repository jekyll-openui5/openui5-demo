/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/editor/fields/BaseField","sap/m/Input","sap/m/Text","sap/m/Title","sap/m/Select","sap/m/ComboBox","sap/m/Popover","sap/m/Button","sap/m/OverflowToolbar","sap/m/ToolbarSpacer","sap/ui/core/ListItem","sap/m/List","sap/m/CustomListItem","sap/m/VBox","./viz/IconSelect","sap/base/util/each","sap/base/util/restricted/_debounce","sap/ui/core/Core","sap/ui/model/json/JSONModel","sap/ui/integration/editor/EditorResourceBundles","sap/base/util/deepClone","sap/ui/model/Sorter","sap/ui/core/SeparatorItem","sap/base/util/includes","sap/base/util/merge","sap/ui/core/CustomData"],function(B,I,T,a,S,C,P,b,O,c,L,d,e,V,f,g,_,h,J,E,j,k,l,m,n,o){"use strict";var R=/parameters\.([^\}\}]+)/g;var s=["TODAY_ISO","NOW_ISO","LOCALE"];var q=B.extend("sap.ui.integration.editor.fields.StringField",{metadata:{library:"sap.ui.integration"},renderer:B.getMetadata().getRenderer()});q.prototype.initVisualization=function(p){var v=p.visualization;if(!v){var r=p.value?p.value.match(R):undefined;var t,u,w;if(r&&r.length>0){r=r.filter(function(i){var y=i.substring(11);return!m(s,y);});}if(r&&r.length>0){t=r.map(function(i){if(this.isOrigLangField){return"items>"+i.substring(11)+"/_language/value";}return"items>"+i.substring(11)+"/value";}.bind(this));t.unshift("currentSettings>value");u={parts:t,formatter:function(y){var A=Array.prototype.slice.call(arguments,1);for(var i=0;i<A.length;i++){if(A[i]){y=y.replaceAll("{{"+r[i]+"}}",A[i]);}}return y;}};w=function(i){var y=i.getSource().getValue();var z=this.getBindingContext("currentSettings").sPath;var A=this.getModel("currentSettings");A.setProperty(z+"/value",y);var D=A.getBindings();var F=z.substring(z.lastIndexOf("/")+1);g(D,function(G,H){if(H.sPath==="/form/items/"+F+"/value"){H.checkUpdate(true);}});}.bind(this);}if(this.getMode()==="translation"){if(p.editable){v={type:I,settings:{value:{path:'currentSettings>value'},tooltip:{path:'currentSettings>value'},editable:p.editable,visible:p.visible,placeholder:p.placeholder}};}else{v={type:T,settings:{text:{path:'currentSettings>value'},tooltip:{path:'currentSettings>value'},visible:p.visible,wrapping:false}};}}else if(p.enum){var x=new L({key:{path:"currentSettings>"},text:{path:"currentSettings>"}});v={type:S,settings:{selectedKey:{path:'currentSettings>value'},forceSelection:false,editable:p.editable,visible:p.visible,showSecondaryValues:false,width:"100%",items:{path:"currentSettings>enum",template:x}}};}else if(p.values){var x=this.formatListItem(p.values.item);if(!p.values.item.key){p.values.item.key=p.values.item.text;}v={type:C,settings:{busy:{path:'currentSettings>_loading'},selectedKey:{path:'currentSettings>value'},editable:p.editable,visible:p.visible,showSecondaryValues:true,width:"100%",items:{path:"",template:x}}};if(this.isFilterBackend()){v.settings.selectedKey={parts:['currentSettings>value','currentSettings>suggestValue'],formatter:function(i,y){if((!i||i==="")&&y){return y.replaceAll('\'\'',"'");}else{return i;}}};}}else{v={type:I,settings:{value:{path:'currentSettings>value'},tooltip:{path:'currentSettings>value'},editable:p.editable,visible:p.visible,placeholder:p.placeholder}};if(t){delete v.settings.tooltip;v.settings.value=u;v.settings.change=w;}}}this._visualization=v;this.attachAfterInit(this._afterInit);};q.prototype._afterInit=function(){var i=this.getAggregation("_field");if(i instanceof C){if(this.isFilterBackend()){this.onInput=_(this.onInput,500);i.oninput=this.onInput;i.attachSelectionChange(this.onSelectionChange);}}};q.prototype.onSelectionChange=function(i){var p=i.getParameter("selectedItem")||{};var K=p.getKey();var r=this.getBindingContext("currentSettings").sPath;var t=this.getModel("currentSettings");t.setProperty(r+"/value",K);};q.prototype.onInput=function(i){var t=i.target.value;var p=this.getBindingContext("currentSettings").sPath;var r=this.getModel("currentSettings");r.setProperty(p+"/suggestValue",t.replaceAll("'","\'\'"));r.setProperty(p+"/_loading",true);r.setProperty(p+"/value","");var u=r.getBindings();var v=p.substring(p.lastIndexOf("/")+1);g(u,function(x,y){if(y.sPath==="/form/items/"+v+"/value"){y.checkUpdate(true);}});var w=i.srcControl;w.open();w.setValue(t);w.setSelection(null);};q.prototype.getOriginTranslatedValues=function(i){var r=[];var t=E.getInstance(i._resourceBundleURL);for(var p in t){var u=t[p];var K;if(i._translatedDefaultPlaceholder.startsWith("{i18n>")&&i._translatedDefaultPlaceholder.endsWith("}")){K=i._translatedDefaultPlaceholder.substring(6,i._translatedDefaultPlaceholder.length-1);}else if(i._translatedDefaultPlaceholder.startsWith("{{")&&i._translatedDefaultPlaceholder.endsWith("}}")){K=i._translatedDefaultPlaceholder.substring(2,i._translatedDefaultPlaceholder.length-2);}var v="";var w="";if(K&&u){var x=u.resourceBundle.getText(K,[],true);if(x!==undefined){v=x;w=x;}}else{v=i._translatedDefaultPlaceholder;w=i._translatedDefaultPlaceholder;}var y={"key":p,"desription":u.language,"value":v,"originValue":w,"editable":true};r.push(y);}return r;};q.prototype.openTranslationListPopup=function(i){var t=this;var p=i.getSource();var F=p.getParent();var r=F.getConfiguration();if(!t._aOriginTranslatedValues){t._aOriginTranslatedValues=F.getOriginTranslatedValues(r);}var u=j(t._aOriginTranslatedValues,500);var v=h.getLibraryResourceBundle("sap.ui.integration");u.forEach(function(y){if(r.valueTranslations&&r.valueTranslations[y.key]){y.value=r.valueTranslations[y.key];if(!m(t._aUpdatedLanguages,y.key)){y.originValue=y.value;}}y.status=v.getText("EDITOR_FIELD_TRANSLATION_LIST_POPOVER_LISTITEM_GROUP_NOTUPDATED");if(y.key===v.sLocale){y.editable=false;}});var w={"currentLanguage":{},"isUpdated":false,"translatedLanguages":[]};var M;if(u){u.forEach(function(y){if(m(t._aUpdatedLanguages,y.key)){y.value=r.valueTranslations[y.key];y.status=v.getText("EDITOR_FIELD_TRANSLATION_LIST_POPOVER_LISTITEM_GROUP_UPDATED");}if(y.key===v.sLocale){y.value=p.getValue();w.currentLanguage=y;}else{w.translatedLanguages.push(y);}});}if(!t._oTranslationPopover){var x=new d({items:{path:"languages>/translatedLanguages",template:new e({content:[new V({items:[new T({text:"{languages>desription}"}),new I({value:"{languages>value}",editable:"{languages>editable}"})]})],customData:[new o({key:"{languages>key}",value:"{languages>desription}"})]}),sorter:[new k({path:'status',descending:true,group:true})],groupHeaderFactory:t.getGroupHeader}});t._oTranslationPopover=new P({placement:"Right",contentWidth:"300px",contentHeight:"345px",customHeader:new V({items:[new a({text:v.getText("EDITOR_FIELD_TRANSLATION_LIST_POPOVER_TITLE")}).addStyleClass("sapMPopoverTitle"),new a({text:v.getText("EDITOR_FIELD_TRANSLATION_LIST_POPOVER_CURRENTLANGUAGE")}).addStyleClass("sapMHeaderTitle"),new V({items:[new T({text:"{languages>/currentLanguage/desription}"}),new I({value:"{languages>/currentLanguage/value}",editable:false})]}).addStyleClass("sapMCurrentLanguageVBox"),new a({text:v.getText("EDITOR_FIELD_TRANSLATION_LIST_POPOVER_OTHERLANGUAGES")}).addStyleClass("sapMHeaderTitle")]}),content:x,footer:new O({content:[new c(),new b({type:"Emphasized",text:v.getText("EDITOR_FIELD_TRANSLATION_LIST_POPOVER_BUTTON_SAVE"),enabled:"{languages>/isUpdated}",press:function(){var y=t._oTranslationPopover.getModel("languages").getData();var z=j(r.valueTranslations,500);var A={};var U=[];y.translatedLanguages.forEach(function(D){if(D.value!==D.originValue){A[D.key]=D.value;U.push(D.key);}});if(y.currentLanguage.value!=y.currentLanguage.originValue){A[y.currentLanguage.key]=y.currentLanguage.value;U.push(y.currentLanguage.key);}if(A!=={}){r.valueTranslations=n(z,A);r._changed=true;}if(U.length>0){t._aUpdatedLanguages=U;}t._oTranslationPopover.close();}}),new b({text:v.getText("EDITOR_FIELD_TRANSLATION_LIST_POPOVER_BUTTON_CANCEL"),press:function(){t._oTranslationPopover.close();}})]})}).addStyleClass("sapUiIntegrationFieldTranslation");M=new J(w);M.attachPropertyChange(function(i){var D=M.getData();var U=v.getText("EDITOR_FIELD_TRANSLATION_LIST_POPOVER_LISTITEM_GROUP_UPDATED");var N=v.getText("EDITOR_FIELD_TRANSLATION_LIST_POPOVER_LISTITEM_GROUP_NOTUPDATED");var y=false;D.translatedLanguages.forEach(function(z){if(z.value!==z.originValue){z.status=U;y=true;}else{z.status=N;}});D.isUpdated=y;M.setData(D);M.checkUpdate(true);});t._oTranslationPopover.setModel(M,"languages");}else{M=t._oTranslationPopover.getModel("languages");M.setData(w);M.checkUpdate(true);}t._oTranslationPopover.openBy(p);};q.prototype.getGroupHeader=function(G){return new l({text:G.key});};return q;});
