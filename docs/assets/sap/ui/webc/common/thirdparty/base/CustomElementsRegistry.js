sap.ui.define(["exports","./util/setToArray"],function(e,t){"use strict";const n=new Set;const s=new Set;let o;const i=e=>{n.add(e)};const r=e=>n.has(e);const a=()=>t(n);const d=e=>{s.add(e);if(!o){o=setTimeout(()=>{c();o=undefined},1e3)}};const c=()=>{console.warn(`The following tags have already been defined by a different UI5 Web Components version: ${t(s).join(", ")}`);s.clear()};e.getAllRegisteredTags=a;e.isTagRegistered=r;e.recordTagRegistrationFailure=d;e.registerTag=i;Object.defineProperty(e,"__esModule",{value:true})});