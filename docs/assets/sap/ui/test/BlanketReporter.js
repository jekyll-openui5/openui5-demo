/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/mvc/Controller","sap/ui/core/mvc/XMLView","sap/ui/model/Filter","sap/ui/model/FilterType","sap/ui/model/json/JSONModel","sap/base/util/UriParameters","sap/base/security/encodeXML"],function(q,C,X,F,c,J,U,e){"use strict";var r=/^((?:[a-z0-9]+\.)+_?[A-Z]\w+)(\.[a-z]\w+)?$/,s='		.blanket-source {			overflow-x: scroll;			background-color: #FFFFFF;			border: 1px solid #CBCBCB;			color: #363636;			margin: 25px 20px;			width: 80%;		}		.blanket-source div {			white-space: pre;			tab-size: 4;			font-family: monospace;		}		.blanket-source > div > span:first-child {			background-color: #EAEAEA;			color: #949494;			display: inline-block;			padding: 0 10px;			text-align: center;			width: 30px;		}		.blanket-source .hits {			background-color: #EAEAEA;			color: green;			display: inline-block;			padding: 0 10px;			text-align: right;			width: 30px;		}		.blanket-source span.highlight {			color: black;			background-color: yellow		}		.blanket-source .hit {			background-color: lightgreen		}		.blanket-source .miss {			background-color: #e6c3c7		}		.blanket-source .skipped {			font-style: italic		}		.blanket-source .miss span.highlight {			background-color: #e6c3c7		}		.coverageSummary {			background-color: #0D3349;			border-radius: 0 0 5px 5px;			font-family: Calibri, Helvetica, Arial, sans-serif;			font-size: 1.5em;			font-weight: 400;			line-height: 1em;			padding: 0.5em 0 0.5em 1em;		}		.coverageSummary a {			color: #C6E746;		}		.coverageSummary a:hover,		.coverageSummary a:focus {			color: #FFFFFF;		}	';C.extend("sap.ui.test.BlanketReporterUI",{filterThreshold:function(b){var B,o=null,t=this.byId("Files"),T=this.getView().getModel().getProperty("/threshold");if(b){o=new F({filters:[new F("lines/coverage","LT",T),new F("branches/coverage","LT",T)],and:false});}B=t.getBinding("rows");B.filter(o,c.Application);},onBeforeRendering:function(){this.filterThreshold(this.getView().getModel().getProperty("/filterThreshold"));},onFilterThreshold:function(E){this.filterThreshold(E.getParameter("selected"));},onRowSelection:function(){var o,a,H=this.byId("blanket-source"),L,m=this.getView().getModel(),S,t=this.byId("Files"),i=t.getSelectedIndex()-t.getFirstVisibleRow();if(i>=0){o=t.getRows()[i].getBindingContext();a=o.getObject("name");L=m.getProperty("/linesOfContext");S=m.getObject("/coverageData").files[a];H.setContent('<div class="blanket-source">'+g(S,L,m.getProperty("/showHits"))+"</div>");H.setVisible(true);}else{H.setContent("<div></div>");}}});function d(S,H,L,m,n){var o=0,t=-Infinity,P=L.reduce(z,[]).sort(v),u=0;function v(a,b){return a.line-b.line||a.column-b.column;}function w(){var a="";if(u>0){a="<div class='ellipsis'><span>...</span>";if(n){a+="<span class='hits'>&nbsp;</span>";}a+="<span class='skipped'>"+u+" lines skipped</span></div>";u=0;}return a;}function x(i,a){a=e(a);if(a&&o){t=i;a="<span class='highlight'>"+a+"</span>";}return a;}function y(i,a){var b=0,R="";while(P.length&&i===P[0].line){R+=x(i,a.slice(b,P[0].column));b=P[0].column;o+=P.shift().delta;}R+=x(i,a.slice(b));return R;}function z(P,a){a.start.delta=+1;P.push(a.start);a.end.delta=-1;P.push(a.end);return P;}if(m===undefined){m=Infinity;}return S.reduce(function(a,b,A){var i,N=P.length&&P[0].line||Infinity,B;function D(){a+="<div";if(H[A]===0){a+=" class='miss'";t=A;}else if(n&&H[A]>0){a+=" class='hit'";}a+="><span>"+A+"</span>";if(n){a+="<span class='hits'>"+(H[A]>=0?H[A]+"x":"&nbsp;")+"</span>";}a+=y(A,b)+"</div>";}if(n){for(i=A;i<H.length;i+=1){if(H[i]!==undefined){B=i;break;}}}else{B=H.indexOf(0,A);}if(B>=0&&B<N){N=B;}if(A>=N-m||A<=t+m||N-t===2*(m+1)){a+=w();D();}else{u+=1;}return a;},"")+w();}function g(S,L,b){var a=S.branchTracking?S.branchTracking.reduce(i,[]):[];function i(a,R){if(!R.falsy){a.push(R.alternate);}if(!R.truthy){a.push(R.consequent);}return a;}return d(S.source,S,a,b?Infinity:L,b);}function p(m,t){return t?(t-m)/t*100:100;}function f(S){S.lines.coverage=p(S.lines.missed,S.lines.total);S.branches.coverage=p(S.branches.missed,S.branches.total);}function h(o,L,t,T){var S={},a={files:[],lines:{total:0,missed:0,coverage:100},branches:{total:0,missed:0,coverage:100},coverageData:o,filterThreshold:!!t,branchTracking:false,showHits:false};function b(m){var n=o.files[m],u={name:m,lines:{total:0,missed:0,coverage:100},branches:{total:0,missed:0,coverage:100}},i;if(m in S){return;}S[m]=true;for(i=0;i<n.length;i++){if(n[i]!==undefined){u.lines.total++;if(n[i]===0){u.lines.missed++;}}}if(n.branchTracking){a.branchTracking=true;u.branches.total=n.branchTracking.length;for(i=0;i<n.branchTracking.length;i++){if(!n.branchTracking[i].falsy||!n.branchTracking[i].truthy){u.branches.missed++;}}}f(u);a.files.push(u);a.lines.total+=u.lines.total;a.lines.missed+=u.lines.missed;a.branches.total+=u.branches.total;a.branches.missed+=u.branches.missed;}if(T&&T.every(function(i){return i in o.files;})){a.filterThreshold=false;}else{T=Object.keys(o.files);}T.sort().forEach(b);a.linesOfContext=L;a.threshold=t;a.visible=Math.min(Math.max(a.files.length,3),10);f(a);return new J(a);}function j(m,D){X.create({viewName:"sap.ui.test.BlanketReporterUI",models:m}).then(function(v){v.placeAt(D);});}function k(m){var M=r.exec(m);return!M||M[2]===".integration"?undefined:q.sap.getResourceName(M[1]);}function l(){var D=document.createElement("div"),S=document.createElement("style");D.setAttribute("id","blanket-view");D.setAttribute("class","sapUiBody");document.body.appendChild(D);S.innerHTML=s;document.head.appendChild(S);return D;}return function(L,t,G,o){var D,m,T,u=U.fromQuery(window.location.search);function i(M){var a=r.exec(M);return a&&!a[2];}if(!document.getElementById("blanket-view")){T=G();m=h(o,L,t,T&&T.map(k));D=l();if(o.stats.failures||u.get("filter")||u.get("testId")||T&&!T.every(i)){j(m,D);return;}if(m.getProperty("/lines/coverage")<t){j(m,D);throw new Error("Line coverage too low! "+m.getProperty("/lines/coverage")+" < "+t);}if(m.getProperty("/branches/coverage")<t){j(m,D);throw new Error("Branch coverage too low! "+m.getProperty("/branches/coverage")+" < "+t);}D.setAttribute("class","coverageSummary");D.innerHTML='<a href="" id="coverage">Blanket Code Coverage: OK</a>';q("#coverage").one("click",function(M){M.preventDefault();q(D).fadeOut(function(){j(m,l());});});}};},false);
