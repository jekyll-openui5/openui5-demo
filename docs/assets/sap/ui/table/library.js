/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Core','sap/ui/model/TreeAutoExpandMode','sap/ui/core/library','sap/ui/unified/library'],function(C,T){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.table",version:"1.96.7",dependencies:["sap.ui.core","sap.ui.unified"],designtime:"sap/ui/table/designtime/library.designtime",types:["sap.ui.table.NavigationMode","sap.ui.table.RowActionType","sap.ui.table.SelectionBehavior","sap.ui.table.SelectionMode","sap.ui.table.SortOrder","sap.ui.table.VisibleRowCountMode","sap.ui.table.TreeAutoExpandMode"],interfaces:[],controls:["sap.ui.table.AnalyticalColumnMenu","sap.ui.table.AnalyticalTable","sap.ui.table.ColumnMenu","sap.ui.table.CreationRow","sap.ui.table.Table","sap.ui.table.TreeTable","sap.ui.table.RowAction"],elements:["sap.ui.table.AnalyticalColumn","sap.ui.table.Column","sap.ui.table.Row","sap.ui.table.RowActionItem","sap.ui.table.RowSettings","sap.ui.table.rowmodes.RowMode","sap.ui.table.rowmodes.FixedRowMode","sap.ui.table.rowmodes.InteractiveRowMode","sap.ui.table.rowmodes.AutoRowMode","sap.ui.table.plugins.MultiSelectionPlugin","sap.ui.table.plugins.SelectionPlugin"],extensions:{flChangeHandlers:{"sap.ui.table.Table":{"moveElements":"default"},"sap.ui.table.AnalyticalTable":{"moveElements":"default"}},"sap.ui.support":{publicRules:true}}});var t=sap.ui.table;t.NavigationMode={Scrollbar:"Scrollbar",Paginator:"Paginator"};t.RowActionType={Custom:"Custom",Navigation:"Navigation",Delete:"Delete"};t.SelectionBehavior={Row:"Row",RowSelector:"RowSelector",RowOnly:"RowOnly"};t.SelectionMode={MultiToggle:"MultiToggle",Multi:"Multi",Single:"Single",None:"None"};t.SortOrder={Ascending:"Ascending",Descending:"Descending"};t.VisibleRowCountMode={Fixed:"Fixed",Interactive:"Interactive",Auto:"Auto"};t.SharedDomRef={HorizontalScrollBar:"hsb",VerticalScrollBar:"vsb"};t.GroupEventType={group:"group",ungroup:"ungroup",ungroupAll:"ungroupAll",moveUp:"moveUp",moveDown:"moveDown",showGroupedColumn:"showGroupedColumn",hideGroupedColumn:"hideGroupedColumn"};t.ResetAllMode={Default:"Default",ServiceDefault:"ServiceDefault",ServiceReset:"ServiceReset"};t.ColumnHeader=t.Column;t.TreeAutoExpandMode=T;if(!t.TableHelper){t.TableHelper={addTableClass:function(){return"";},createLabel:function(c){throw new Error("no Label control available!");},createTextView:function(c){throw new Error("no TextView control available!");},bFinal:false};}return t;});
