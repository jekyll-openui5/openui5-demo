sap.ui.define(["sap/ui/webc/common/thirdparty/base/types/DataType"],function(e){"use strict";function t(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var a=t(e);const n={None:"None",Normal:"Normal"};class s extends a{static isValid(e){return!!n[e]}}s.generateTypeAccessors(n);return s});