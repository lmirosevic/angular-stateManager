'use strict';

angular.module("cloudpulse.services", [])
	.factory("stateManager", ["$rootScope", "$location", function factory(rootScope, location) {

		//define the StateManager object
		function StateManager() {

			// var initialiserStack = new Array();
			var initialisers = new Object();
			var currentState = new String();
			var fresh = true;//sentinel to signify first load

			// this.registerRootInitialiser = function(rootInitialiser) {
			// 	// console.log("init rootInitialiser, this shud happen when the page has first loaded to enable deep linking");
			// 	// rootInitialiser(getAssembledPayload());

			// 	//register state change event and give it the rootInitialiser
			// 	// window.onhashchange = function() {
			// 	// 	rootInitialiser(getAssembledPayload());
			// 	// }
			// }

			this.registerInitialiser = function(initialiser) {
				//check if its the first time
				if (fresh) {
					// console.log("register event on: "+initialiser);

					//register state change event and give it the root initialiser
					window.onhashchange = function() {
						console.log("state changed");
						//go through whole stack, and then clear stack
						// for (var i in initialiserStack) {
						// 	// console.log("tick");

						// 	initialiserStack[i](getAssembledPayload());
						// }

						// initialiserStack.length = 0;

						rootInitialiser(getAssembledPayload());

						rootScope.$apply();
					}

					rootInitialiser = initialiser;
					
					fresh = false;
				}

				//initialise because the controller was just loaded
				initialiser(getAssembledPayload());

				//add it to the stack so it can reinitialised in case the state changes
				// initialiserStack.push(initialiser);
			}

			this.pushState = function(modifiedPathComponents) {
				var currentPathComponents = getAssembledPayload();

				var newPathComponents = new Array();

				//merge the changes into a new array
				for (var i in modifiedPathComponents) {
					if (modifiedPathComponents[i]) {
						newPathComponents[i] = modifiedPathComponents[i];
					} else {
						newPathComponents[i] = currentPathComponents[i];
					}
				}

				//set the url bar
				location.path("/"+newPathComponents.join("/"));
			}

			/* utils */

			function getAssembledPayload() {
				return location.path().substring(1).split("/");
			}
		}

		//return a new instance of the StateManager
		return new StateManager();
	}])