'use strict';

//dependencies go inside square braces
// angular.module("cloudpulse", ["cloudpulse.directives", "cloudpulse.services"])
angular.module("cloudpulse", ["cloudpulse.services"])
	.config(function($locationProvider) {
		$locationProvider.html5Mode(false).hashPrefix('!'); 
	})