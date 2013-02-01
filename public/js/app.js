'use strict';

angular.module("Animals", ["stateManager"])
	.config(function($locationProvider) {
		$locationProvider.html5Mode(false).hashPrefix('!');	//turn html5 mode off
		// $locationProvider.html5Mode(true);					//turn html5 mode on
	});