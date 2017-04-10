(function () {
  'use strict';
  Polymer({

    is: 'adom-list',

    properties: {
      items: {
        type: Array,
        value: function() {
          return [];
        }
      },
      column: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    },

  });
}());