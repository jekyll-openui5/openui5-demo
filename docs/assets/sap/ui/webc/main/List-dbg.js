/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.main.List.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/List"
], function(WebComponent, library) {
	"use strict";

	var ListGrowingMode = library.ListGrowingMode;
	var ListMode = library.ListMode;
	var ListSeparators = library.ListSeparators;

	/**
	 * Constructor for a new <code>List</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * The <code>sap.ui.webc.main.List</code> component allows displaying a list of items, advanced keyboard handling support for navigating between items, and predefined modes to improve the development efficiency. <br>
	 * <br>
	 * The <code>sap.ui.webc.main.List</code> is а container for the available list items:
	 * <ul>
	 *     <li><code>sap.ui.webc.main.StandardListItem</code></li>
	 *     <li><code>sap.ui.webc.main.CustomListItem</code></li>
	 *     <li><code>sap.ui.webc.main.GroupHeaderListItem</code></li>
	 * </ul> <br>
	 * <br>
	 * To benefit from the built-in selection mechanism, you can use the available selection modes, such as <code>SingleSelect</code>, <code>MultiSelect</code> and <code>Delete</code>. <br>
	 * <br>
	 * Additionally, the <code>sap.ui.webc.main.List</code> provides header, footer, and customization for the list item separators.
	 *
	 * <br>
	 * <br>
	 * <h3>Keyboard Handling</h3> The <code>sap.ui.webc.main.List</code> provides advanced keyboard handling. When a list is focused the user can use the following keyboard shortcuts in order to perform a navigation: <br>
	 *
	 *
	 *
	 * <ul>
	 *     <li>[UP/DOWN] - Navigates up and down the items</li>
	 *     <li>[HOME] - Navigates to first item</li>
	 *     <li>[END] - Navigates to the last item</li>
	 * </ul>
	 *
	 * The user can use the following keyboard shortcuts to perform actions (such as select, delete), when the <code>mode</code> property is in use:
	 * <ul>
	 *     <li>[SPACE] - Select an item (if <code>type</code> is 'Active') when <code>mode</code> is selection</li>
	 *     <li>[DELETE] - Delete an item if <code>mode</code> property is <code>Delete</code></li>
	 * </ul> <br>
	 * <br>
	 *
	 * @author SAP SE
	 * @version 1.96.7
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @alias sap.ui.webc.main.List
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var List = WebComponent.extend("sap.ui.webc.main.List", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-list-ui5",
			properties: {

				/**
				 * Sets the accessible aria name of the component.
				 */
				accessibleName: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Receives id(or many ids) of the elements that label the input
				 */
				accessibleNameRef: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines the accessible role of the component. <br>
				 * <br>
				 * <b>Note:</b> If you use notification list items, it's recommended to set <code>accessible-role="list"</code> for better accessibility.
				 */
				accessibleRole: {
					type: "string",
					defaultValue: "listbox"
				},

				/**
				 * Defines if the component would display a loading indicator over the list.
				 */
				busy: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
				 */
				busyDelay: {
					type: "int",
					defaultValue: 1000
				},

				/**
				 * Defines the footer text.
				 */
				footerText: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines whether the component will have growing capability either by pressing a <code>More</code> button, or via user scroll. In both cases <code>load-more</code> event is fired. <br>
				 * <br>
				 *
				 *
				 * Available options: <br>
				 * <br>
				 * <code>Button</code> - Shows a <code>More</code> button at the bottom of the list, pressing of which triggers the <code>load-more</code> event. <br>
				 * <code>Scroll</code> - The <code>load-more</code> event is triggered when the user scrolls to the bottom of the list; <br>
				 * <code>None</code> (default) - The growing is off. <br>
				 * <br>
				 *
				 *
				 * <b>Limitations:</b> <code>growing="Scroll"</code> is not supported for Internet Explorer, on IE the component will fallback to <code>growing="Button"</code>.
				 */
				growing: {
					type: "sap.ui.webc.main.ListGrowingMode",
					defaultValue: ListGrowingMode.None
				},

				/**
				 * Defines the component header text. <br>
				 * <br>
				 * <b>Note:</b> If <code>header</code> is set this property is ignored.
				 */
				headerText: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines the height of the control
				 */
				height: {
					type: "sap.ui.core.CSSSize",
					defaultValue: null,
					mapping: "style"
				},

				/**
				 * Determines whether the list items are indented.
				 */
				indent: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the mode of the component. <br>
				 * <br>
				 * <b>Note:</b> Available options are <code>None</code>, <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code>, <code>MultiSelect</code>, and <code>Delete</code>.
				 */
				mode: {
					type: "sap.ui.webc.main.ListMode",
					defaultValue: ListMode.None
				},

				/**
				 * Defines the text that is displayed when the component contains no items.
				 */
				noDataText: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines the item separator style that is used. <br>
				 * <br>
				 * <b>Notes:</b>
				 * <ul>
				 *     <li>Avalaible options are <code>All</code>, <code>Inner</code>, and <code>None</code>.</li>
				 *     <li>When set to <code>None</code>, none of the items are separated by horizontal lines.</li>
				 *     <li>When set to <code>Inner</code>, the first item doesn't have a top separator and the last item doesn't have a bottom separator.</li>
				 * </ul>
				 */
				separators: {
					type: "sap.ui.webc.main.ListSeparators",
					defaultValue: ListSeparators.All
				},

				/**
				 * Defines the width of the control
				 */
				width: {
					type: "sap.ui.core.CSSSize",
					defaultValue: null,
					mapping: "style"
				}
			},
			defaultAggregation: "items",
			aggregations: {

				/**
				 * Defines the component header. <br>
				 * <br>
				 * <b>Note:</b> When <code>header</code> is set, the <code>headerText</code> property is ignored.
				 */
				header: {
					type: "sap.ui.core.Control",
					multiple: true,
					slot: "header"
				},

				/**
				 * Defines the items of the component. <br>
				 * <br>
				 * <b>Note:</b> Use <code>sap.ui.webc.main.StandardListItem</code>, <code>sap.ui.webc.main.CustomListItem</code>, and <code>sap.ui.webc.main.GroupHeaderListItem</code> for the intended design.
				 */
				items: {
					type: "sap.ui.webc.main.IListItem",
					multiple: true
				}
			},
			events: {

				/**
				 * Fired when an item is activated, unless the item's <code>type</code> property is set to <code>Inactive</code>.
				 */
				itemClick: {
					parameters: {
						/**
						 * The clicked item.
						 */
						item: {
							type: "HTMLElement"
						}
					}
				},

				/**
				 * Fired when the <code>Close</code> button of any item is clicked <br>
				 * <br>
				 * <b>Note:</b> This event is applicable to <code>sap.ui.webc.fiori.NotificationListItem</code> items only, not to be confused with <code>item-delete</code>.
				 */
				itemClose: {
					parameters: {
						/**
						 * the item about to be closed.
						 */
						item: {
							type: "HTMLElement"
						}
					}
				},

				/**
				 * Fired when the Delete button of any item is pressed. <br>
				 * <br>
				 * <b>Note:</b> A Delete button is displayed on each item, when the component <code>mode</code> property is set to <code>Delete</code>.
				 */
				itemDelete: {
					parameters: {
						/**
						 * the deleted item.
						 */
						item: {
							type: "HTMLElement"
						}
					}
				},

				/**
				 * Fired when the <code>Toggle</code> button of any item is clicked. <br>
				 * <br>
				 * <b>Note:</b> This event is applicable to <code>sap.ui.webc.fiori.NotificationListGroupItem</code> items only.
				 */
				itemToggle: {
					parameters: {
						/**
						 * the toggled item.
						 */
						item: {
							type: "HTMLElement"
						}
					}
				},

				/**
				 * Fired when the user scrolls to the bottom of the list. <br>
				 * <br>
				 * <b>Note:</b> The event is fired when the <code>growing='Scroll'</code> property is enabled.
				 */
				loadMore: {
					parameters: {}
				},

				/**
				 * Fired when selection is changed by user interaction in <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.
				 */
				selectionChange: {
					parameters: {
						/**
						 * An array of the selected items.
						 */
						selectedItems: {
							type: "Array"
						},

						/**
						 * An array of the previously selected items.
						 */
						previouslySelectedItems: {
							type: "Array"
						}
					}
				}
			}
		}
	});

	return List;
});