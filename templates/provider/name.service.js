'use strict';
import angular from 'angular';

export function <%= cameledName %>Provider() {
  // Private variables
  var salutation = 'Hello';

  // Private constructor
  function Greeter() {
    this.greet = function() {
      return salutation;
    };
  }

  // Public API for configuration
  this.setSalutation = function(s) {
    salutation = s;
  };

  // Method for instantiating
  this.$get = function() {
    return new Greeter();
  };
}

export default angular.module('<%= moduleName %>')
  .provider('<%= cameledName %>', <%= cameledName %>Provider)
  .name;
