/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library"],function(l){"use strict";var A=l.ActionBarSocialActions;var a={apiVersion:2};a.render=function(r,c){r.openStart("div",c);r.class("sapUiUx3ActionBar");if(sap.ui.getCore().getConfiguration().getAccessibility()){r.attr('role','toolbar');}r.openEnd();r.openStart("ul",c.getId()+"-socialActions");r.class("sapUiUx3ActionBarSocialActions");r.style("min-width",c._getSocialActionListMinWidth()+"px");r.openEnd();this.renderSocialActions(r,c);r.close("ul");r.openStart("ul",c.getId()+'-businessActions');r.class("sapUiUx3ActionBarBusinessActions");r.openEnd();this.renderBusinessActionButtons(r,c);r.close("ul");r.close("div");};a.renderBusinessActionButtons=function(r,c){var b=c._getBusinessActionButtons();var m=c._getMoreMenuButton();if(b&&b.length>0){for(var i=0;i<b.length;i++){var B=b[i];r.openStart("li");r.class("sapUiUx3ActionBarItemRight");r.openEnd();r.renderControl(B);r.close("li");}this._renderMoreMenuButton(r,m);}else if(m){this._renderMoreMenuButton(r,m);}};a._renderMoreMenuButton=function(r,m){if(m){r.openStart("li");r.class("sapUiUx3ActionBarItemRight");r.class("sapUiUx3ActionBarMoreButton");r.openEnd();r.renderControl(m);r.close("li");}};a.renderSocialActions=function(r,c){var m=c.mActionMap;var k=c.mActionKeys;if(m[k.Update]){this._renderSocialActionListItem(r,c,m[k.Update]);}if(m[k.Follow]){this._renderSocialActionListItem(r,c,m[k.Follow]);}if(m[k.Flag]){this._renderSocialActionListItem(r,c,m[k.Flag]);}if(m[k.Favorite]){this._renderSocialActionListItem(r,c,m[k.Favorite]);}if(m[k.Open]){this._renderSocialActionListItem(r,c,m[k.Open]);}for(var K in m){if(!(K in A)){this._renderSocialActionListItem(r,c,m[K]);}}};a._renderSocialActionListItem=function(r,c,b){if(b&&!b.hide){r.openStart("li");r.class("sapUiUx3ActionBarItem");r.openEnd();this._renderSocialAction(r,c,b);r.close("li");}};a._renderSocialAction=function(r,c,b){r.openStart("a",b);r.attr("role","button");r.attr("aria-disabled","false");r.attr("aria-haspopup",b.isMenu&&b.isMenu(c)?"true":"false");if(b.name===c.mActionKeys.Flag||b.name===c.mActionKeys.Favorite){r.attr("aria-pressed",b.fnCalculateState(c)==="Selected"?"true":"false");}r.attr("tabindex","0");r.class(b.cssClass);if(b.fnCalculateState){r.class(b.fnCalculateState(c));}r.class("sapUiUx3ActionBarAction");if(b.getTooltip()){r.attr("title",b.getTooltip());}if(b.text){r.attr("text",c.getLocalizedText(b.getText()));}r.openEnd();r.close("a");};return a;});
