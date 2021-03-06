/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/events/ControlEvents','sap/base/events/PseudoEvents','sap/base/events/checkMouseEnterOrLeave','sap/base/events/isSpecialKey','sap/base/events/isMouseEventDelayed','sap/ui/events/_triggerEventHook','sap/ui/events/F6Navigation','sap/ui/events/jqueryEvent','sap/ui/events/EventSimulation'],function(q,C,P,c,i,I,_,F,Q,E){"use strict";q.sap.PseudoEvents=P.events;q.sap.ControlEvents=C.events;q.sap.disableTouchToMouseHandling=E.disableTouchToMouseHandling;q.sap.touchEventMode=E.touchEventMode;q.sap.bindAnyEvent=C.bindAnyEvent;q.sap.unbindAnyEvent=C.unbindAnyEvent;q.sap.checkMouseEnterOrLeave=c;q.sap.isSpecialKey=i;q.sap.handleF6GroupNavigation=F.handleF6GroupNavigation;q.sap._FASTNAVIGATIONKEY=F.fastNavigationKey;q.sap._refreshMouseEventDelayedFlag=function(n){q.sap.isMouseEventDelayed=I.apply(this,arguments);};q.sap._refreshMouseEventDelayedFlag(navigator);q.sap._suppressTriggerEvent=_.suppress;q.sap._releaseTriggerEvent=_.release;return q;});
