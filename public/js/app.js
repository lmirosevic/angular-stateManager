'use strict';

angular.module("Animals", ["Animals.services"])
	.config(function($locationProvider) {
		$locationProvider.html5Mode(false).hashPrefix('!');	//turn html5 mode off
		// $locationProvider.html5Mode(true);					//turn html5 mode on
	});