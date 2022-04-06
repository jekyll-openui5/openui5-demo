sap.ui.define(["sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/Keys","sap/ui/webc/common/thirdparty/base/FeaturesRegistry","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/isLegacyBrowser","sap/ui/webc/common/thirdparty/base/Device","./types/ButtonDesign","./generated/templates/ButtonTemplate.lit","./Icon","./generated/i18n/i18n-defaults","./generated/themes/Button.css","./generated/themes/Button.ie11.css"],function(t,e,n,i,s,o,a,r,u,c,d,p,l){"use strict";function h(t){return t&&typeof t==="object"&&"default"in t?t["default"]:t}var f=h(t);var b=h(e);var y=h(o);let g=false;let m=null;const _={tag:"ui5-button",languageAware:true,properties:{design:{type:r,defaultValue:r.Default},disabled:{type:Boolean},icon:{type:String},iconEnd:{type:Boolean},submits:{type:Boolean},title:{type:String},active:{type:Boolean},iconOnly:{type:Boolean},focused:{type:Boolean},hasIcon:{type:Boolean},accessibleName:{type:String,defaultValue:undefined},ariaExpanded:{type:String},nonInteractive:{type:Boolean},_iconSettings:{type:Object},_buttonAccInfo:{type:Object},_tabIndex:{type:String,defaultValue:"0",noAttribute:true},_isTouch:{type:Boolean}},managedSlots:true,slots:{default:{type:Node}},events:{click:{}}};class I extends f{static get metadata(){return _}static get styles(){return[p,y()&&l]}static get render(){return b}static get template(){return u}static get dependencies(){return[c]}constructor(){super();this._deactivate=()=>{if(m){m.active=false}};if(!g){document.addEventListener("mouseup",this._deactivate);g=true}this.i18nBundle=s.getI18nBundle("@ui5/webcomponents")}onEnterDOM(){this._isTouch=a.isPhone()||a.isTablet()}onBeforeRendering(){const t=i.getFeature("FormSupport");if(this.submits&&!t){console.warn(`In order for the "submits" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`)}this.iconOnly=this.isIconOnly;this.hasIcon=!!this.icon}_onclick(t){if(this.nonInteractive){return}t.isMarked="button";const e=i.getFeature("FormSupport");if(e){e.triggerFormSubmit(this)}}_onmousedown(t){if(this.nonInteractive||this._isTouch){return}t.isMarked="button";this.active=true;m=this}_ontouchstart(t){t.isMarked="button";if(this.nonInteractive){return}this.active=true}_ontouchend(t){this.active=false;if(m){m.active=false}}_onmouseup(t){t.isMarked="button"}_onkeydown(t){t.isMarked="button";if(n.isSpace(t)||n.isEnter(t)){this.active=true}}_onkeyup(t){if(n.isSpace(t)||n.isEnter(t)){this.active=false}}_onfocusout(t){if(this.nonInteractive){return}this.active=false;this.focused=false}_onfocusin(t){if(this.nonInteractive){return}t.isMarked="button";this.focused=true}get hasButtonType(){return this.design!==r.Default&&this.design!==r.Transparent}get isIconOnly(){return!Array.from(this.childNodes).filter(t=>t.nodeType!==Node.COMMENT_NODE&&(t.nodeType!==Node.TEXT_NODE||t.nodeValue.trim().length!==0)).length}get accInfo(){return{ariaExpanded:this.ariaExpanded||this._buttonAccInfo&&this._buttonAccInfo.ariaExpanded,ariaControls:this._buttonAccInfo&&this._buttonAccInfo.ariaControls,ariaHaspopup:this._buttonAccInfo&&this._buttonAccInfo.ariaHaspopup,title:this.title||this._buttonAccInfo&&this._buttonAccInfo.title}}static typeTextMappings(){return{Positive:d.BUTTON_ARIA_TYPE_ACCEPT,Negative:d.BUTTON_ARIA_TYPE_REJECT,Emphasized:d.BUTTON_ARIA_TYPE_EMPHASIZED}}get buttonTypeText(){return this.i18nBundle.getText(I.typeTextMappings()[this.design])}get tabIndexValue(){const t=this.getAttribute("tabindex");if(t){return t}return this.nonInteractive?"-1":this._tabIndex}get showIconTooltip(){return this.iconOnly&&!this.title}static async onDefine(){await s.fetchI18nBundle("@ui5/webcomponents")}}I.define();return I});