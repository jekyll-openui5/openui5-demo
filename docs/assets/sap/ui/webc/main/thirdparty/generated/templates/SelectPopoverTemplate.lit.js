sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e){"use strict";const t=(t,a,i)=>e.html`${t.options?s(t,a,i):undefined}${t.shouldOpenValueStateMessagePopover?$(t,a,i):undefined}`;const s=(t,s,i)=>e.html`<${e.scopeTag("ui5-responsive-popover",s,i)} hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" @ui5-after-open="${e.ifDefined(t._afterOpen)}" @ui5-before-open="${e.ifDefined(t._beforeOpen)}" @ui5-after-close="${e.ifDefined(t._afterClose)}" @keydown="${t._onkeydown}">${t._isPhone?a(t,s,i):undefined}${!t._isPhone?d(t):undefined}<${e.scopeTag("ui5-list",s,i)} mode="SingleSelectAuto" separators="None" @mousedown="${t._itemMousedown}" @ui5-item-press="${e.ifDefined(t._handleItemPress)}">${e.repeat(t._syncedOptions,(e,t)=>e._id||t,(e,a)=>f(e,a,t,s,i))}</${e.scopeTag("ui5-list",s,i)}></${e.scopeTag("ui5-responsive-popover",s,i)}>`;const a=(t,s,a)=>e.html`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${e.ifDefined(t._headerTitleText)}</span><${e.scopeTag("ui5-button",s,a)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${t._toggleRespPopover}"></${e.scopeTag("ui5-button",s,a)}></div>${t.hasValueStateText?i(t):undefined}</div>`;const i=(t,s,a)=>e.html`<div class="${e.classMap(t.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${t.shouldDisplayDefaultValueStateMessage?o(t):l(t)}</div>`;const o=(t,s,a)=>e.html`${e.ifDefined(t.valueStateText)}`;const l=(t,s,a)=>e.html`${e.repeat(t.valueStateMessageText,(e,t)=>e._id||t,(e,t)=>n(e))}`;const n=(t,s,a,i,o)=>e.html`${e.ifDefined(t)}`;const d=(t,s,a)=>e.html`${t.hasValueStateText?p(t):undefined}`;const p=(t,s,a)=>e.html`<div slot="header" class="ui5-select-value-state-popover-padding ${e.classMap(t.classes.popoverValueState)}" style=${e.styleMap(t.styles.responsivePopoverHeader)}>${t.shouldDisplayDefaultValueStateMessage?r(t):c(t)}</div>`;const r=(t,s,a)=>e.html`${e.ifDefined(t.valueStateText)}`;const c=(t,s,a)=>e.html`${e.repeat(t.valueStateMessageText,(e,t)=>e._id||t,(e,t)=>u(e))}`;const u=(t,s,a,i,o)=>e.html`${e.ifDefined(t)}`;const f=(t,s,a,i,o)=>e.html`<${e.scopeTag("ui5-li",i,o)} id="${e.ifDefined(t.id)}-li" icon="${e.ifDefined(t.icon)}" ?selected="${t.selected}" ?focused="${t._focused}" ?disabled="${t.disabled}" ?aria-selected="${t.selected}" data-ui5-stable="${e.ifDefined(t.stableDomRef)}">${e.ifDefined(t.textContent)}</${e.scopeTag("ui5-li",i,o)}>`;const $=(t,s,a)=>e.html`<${e.scopeTag("ui5-popover",s,a)} skip-registry-update _disable-initial-focus prevent-focus-restore no-padding hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${e.classMap(t.classes.popoverValueState)}" style="${e.styleMap(t.styles.popoverHeader)}">${t.shouldDisplayDefaultValueStateMessage?v(t):h(t)}</div></${e.scopeTag("ui5-popover",s,a)}>`;const v=(t,s,a)=>e.html`${e.ifDefined(t.valueStateText)}`;const h=(t,s,a)=>e.html`${e.repeat(t.valueStateMessageText,(e,t)=>e._id||t,(e,t)=>m(e))}`;const m=(t,s,a,i,o)=>e.html`${e.ifDefined(t)}`;return t});