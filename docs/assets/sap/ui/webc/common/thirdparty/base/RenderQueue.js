sap.ui.define(function(){"use strict";const t=10;class s{constructor(){this.list=[];this.lookup=new Set}add(t){if(this.lookup.has(t)){return}this.list.push(t);this.lookup.add(t)}remove(t){if(!this.lookup.has(t)){return}this.list=this.list.filter(s=>s!==t);this.lookup.delete(t)}shift(){const t=this.list.shift();if(t){this.lookup.delete(t);return t}}isEmpty(){return this.list.length===0}isAdded(t){return this.lookup.has(t)}process(s){let i;const e=new Map;i=this.shift();while(i){const o=e.get(i)||0;if(o>t){throw new Error(`Web component processed too many times this task, max allowed is: ${t}`)}s(i);e.set(i,o+1);i=this.shift()}}}return s});