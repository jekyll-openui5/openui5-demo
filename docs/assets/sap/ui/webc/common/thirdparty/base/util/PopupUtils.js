sap.ui.define(["exports","../getSharedResource","../FeaturesRegistry","./getActiveElement"],function(e,t,n,o){"use strict";const r=t("PopupUtilsData",{});r.currentZIndex=r.currentZIndex||100;const s=()=>{const e=o();return e&&typeof e.focus==="function"?e:null};const c=e=>{const t=s();if(t){return u(e,t)}return false};const u=(e,t)=>{let n=e;if(n.shadowRoot){n=Array.from(n.shadowRoot.children).find(e=>e.localName!=="style")}if(n===t){return true}const o=n.localName==="slot"?n.assignedNodes():n.children;if(o){return Array.from(o).some(e=>u(e,t))}};const i=(e,t,n)=>e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom;const l=(e,t)=>{let n;let o;if(e.touches){const t=e.touches[0];n=t.clientX;o=t.clientY}else{n=e.clientX;o=e.clientY}return i(n,o,t)};const d=e=>{const t=e.parentElement||e.getRootNode&&e.getRootNode().host;if(t&&(t.showAt&&t.isUI5Element||t.open&&t.isUI5Element||t===document.documentElement)){return t}return d(t)};const a=()=>{const e=n.getFeature("OpenUI5Support");if(e&&e.isLoaded()){return e.getNextZIndex()}r.currentZIndex+=2;return r.currentZIndex};const f=()=>r.currentZIndex;e.getClosedPopupParent=d;e.getCurrentZIndex=f;e.getFocusedElement=s;e.getNextZIndex=a;e.isClickInRect=l;e.isFocusedElementWithinNode=c;Object.defineProperty(e,"__esModule",{value:true})});