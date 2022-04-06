/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/library"],function(L,c){"use strict";var F={apiVersion:2};var T=c.TextDirection;var a=c.TextAlign;F.render=function(r,C){var w=C.getWidth(),h=C.getHeight(),t=C.getTextDirection(),s=C.getTextAlign(),b=C.getAggregation("controls"),d=C._getDisplayHtml(),R=[],n='',S=0;r.openStart("div",C);r.class("sapMFT");if(w){r.class("sapMFTOverflowWidth");}if(h){r.class("sapMFTOverflowHeight");}if(t!==T.Inherit){r.attr("dir",t.toLowerCase());}if(s&&s!=a.Initial){r.style("text-align",s.toLowerCase());}if(C.getTooltip_AsString()){r.attr("title",C.getTooltip_AsString());}r.style("width",w||null);r.style("height",h||null);r.openEnd();while(d!==''&&d!==n){n=d.replace(/(?:\%\%(\d+))/,_);}if(d!==''){try{r.unsafeHtml(d);}catch(e){r.text(d);}}r.close("div");function _(m,i,p){var M=m.length;try{r.unsafeHtml(d.substr(0,p));}catch(e){r.text(d.substr(0,p));}S+=p;if(b&&b[i]!==undefined){if(R[i]===undefined){r.renderControl(b[i]);R[i]=S;}else{L.error("Control with index '"+i+"' ("+m+", htmlText@"+S+") is already rendered (htmlText@"+R[i]+")!",'sap.m.FormattedText:',C.getId());}}else{r.text(m);L.error("Missing control for placeholder '"+m+"' (htmlText@"+S+")!",'sap.m.FormattedText:',C.getId());}d=d.substr(p+M);S+=M;}};return F;},true);
