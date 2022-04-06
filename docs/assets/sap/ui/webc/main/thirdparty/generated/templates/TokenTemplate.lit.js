sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e){"use strict";const i=(i,t,o)=>e.html`<div tabindex="${e.ifDefined(i._tabIndex)}" @click="${i._handleSelect}" @keydown="${i._keydown}" class="ui5-token--wrapper" dir="${e.ifDefined(i.effectiveDir)}" role="option" aria-selected="${e.ifDefined(i.selected)}"><span class="ui5-token--text">${e.ifDefined(i.text)}</span>${!i.readonly?n(i,t,o):undefined}</div>`;const n=(i,n,c)=>e.html`<div class="ui5-token--icon" @click="${i._delete}">${i.closeIcon.length?t():o(i,n,c)}</div>`;const t=(i,n,t)=>e.html`<slot name="closeIcon"></slot>`;const o=(i,n,t)=>e.html`<${e.scopeTag("ui5-icon",n,t)} name="${e.ifDefined(i.iconURI)}" accessible-name="${e.ifDefined(i.tokenDeletableText)}" show-tooltip></${e.scopeTag("ui5-icon",n,t)}>`;return i});