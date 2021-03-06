/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// intended to be used by all OPA modules that need to create a logger
sap.ui.define([
	"jquery.sap.global"
], function ($) {
	"use strict";

	// component names of all loggers created by OPA components
	var aLoggerComponents = [];
	// DEBUG is the default maximum log level for OPA
	var iLogLevel = $.sap.log.Level.DEBUG;

	return {
		// _OpaLogger might also be loaded in an iFrame. setLevel should be called for each iFrame
		// $.sap.log reference changes depending on the contentWindow
		setLevel: function (sNewLogLevel) {
			var sLogLevel = sNewLogLevel && sNewLogLevel.toUpperCase();
			var iNewLogLevel = sLogLevel && $.sap.log.Level[sLogLevel];
			iLogLevel = iNewLogLevel || iLogLevel;
			aLoggerComponents.forEach(function (sComponent) {
				$.sap.log.setLevel(iLogLevel, sComponent);
			});
		},
		getLogger: function (sComponent) {
			aLoggerComponents.push(sComponent);
			var logger = $.sap.log.getLogger(sComponent, iLogLevel);
			logger.timestamp = function (marker) {
				/* eslint-disable no-console */
				if (console.timeStamp && this.getLevel() >= $.sap.log.Level.DEBUG) {
					console.timeStamp(marker);
				}
				/* eslint-enable no-console */
			};
			return logger;
		},
		getLevel: function () {
			return iLogLevel;
		}
	};

}, true);
