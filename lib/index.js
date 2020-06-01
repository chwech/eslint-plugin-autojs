/**
 * @fileoverview eslint plugin for auto.js
 * @author chwech(804699297@qq.com)
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  environments: {
    autojs: {
      globals: {
        'app': 'readonly',
        'auto': 'readonly',
        'toastLog': 'readonly',
        'descContains': 'readonly',
        'sleep': 'readonly',
        'click': 'readonly',
        'desc': 'readonly',
        'console': 'readonly',
        'className': 'readonly'
      }
    }
  }
}




