sap.ui.define(["sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/types/CSSColor","./generated/templates/ColorPaletteItemTemplate.lit","./generated/i18n/i18n-defaults","./generated/themes/ColorPaletteItem.css"],function(e,t,n,r,a,i,s){"use strict";function o(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var u=o(e);var l=o(t);var d=o(r);const c={tag:"ui5-color-palette-item",managedSlots:true,properties:{value:{type:d},_tabIndex:{type:String,defaultValue:"-1",noAttribute:true},index:{type:String},_disabled:{type:Boolean}},slots:{},events:{}};class p extends u{static get metadata(){return c}static get render(){return l}static get styles(){return s}static get template(){return a}static async onDefine(){await n.fetchI18nBundle("@ui5/webcomponents")}constructor(){super();this.i18nBundle=n.getI18nBundle("@ui5/webcomponents")}onBeforeRendering(){this._disabled=!this.value}get colorLabel(){return this.i18nBundle.getText(i.COLORPALETTE_COLOR_LABEL)}}p.define();return p});