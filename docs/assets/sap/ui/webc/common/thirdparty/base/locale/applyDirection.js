sap.ui.define(["../Render","./directionChange"],function(e,n){"use strict";const r=async()=>{const r=n.fireDirectionChange();await Promise.all(r);await e.reRenderAllUI5Elements({rtlAware:true})};return r});