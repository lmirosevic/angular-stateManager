'use strict';

angular.module("Animals", ["Animals.services"])
	.config(function($locationProvider) {
		$locationProvider.html5Mode(false).hashPrefix('!'); 
	})