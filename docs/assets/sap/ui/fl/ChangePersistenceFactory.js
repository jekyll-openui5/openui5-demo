/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Component","sap/ui/fl/apply/_internal/flexState/FlexState","sap/ui/fl/ChangePersistence","sap/ui/fl/Utils","sap/ui/fl/apply/_internal/changes/descriptor/ApplyStrategyFactory","sap/ui/fl/apply/_internal/changes/descriptor/Applier"],function(C,F,a,U,A,b){"use strict";var c={};c._instanceCache={};c.getChangePersistenceForComponent=function(s){var o=c._instanceCache[s];if(!o){var d={name:s};o=new a(d);c._instanceCache[s]=o;}return o;};c.getChangePersistenceForControl=function(o){var s;s=U.getComponentClassName(o);return c.getChangePersistenceForComponent(s);};c.registerLoadComponentEventHandler=function(){C._fnLoadComponentCallback=this._onLoadComponent.bind(this);};c._onLoadComponent=function(o,m){if(!U.isApplication(m)||!o.id){return Promise.resolve();}F.initialize({componentData:o.componentData||(o.settings&&o.settings.componentData),asyncHints:o.asyncHints,manifest:m,componentId:o.id});return b.applyChangesIncludedInManifest(m,A.getRuntimeStrategy());};return c;},true);
