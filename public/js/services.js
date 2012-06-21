'use strict';

angular.module("cloudpulse.services", [])
	.factory("stateManager", ["$rootScope", "$location", function factory(rootScope, location) {
		//define the StateManager object
		function StateManager() {
			var initialiserStack = new Array();
			var fresh = true;//sentinel to signify first load

			this.registerInitialiser = function(initialiser) {
				//if its the first time, register the onhashchange event
				if (fresh) {
					//register state change event and give it the root initialiser
					window.onhashchange = function() {
						//trigger update cascade
						for (var i in initialiserStack) {
							initialiserStack[i](getProperPathComponents());
						}
						rootScope.$apply();
					}					
					fresh = false;
				}

				//initialise the controller by calling its constructor, because the controller was just loaded
				initialiser(getProperPathComponents());

				//add it to the stack so it can reinitialised in case the state changes in the future due to onhashchange
				initialiserStack.push(initialiser);

				//return a function to the controller that it should execute immediately; it will make that controller report back to the statemanager when its destroyed so that we can free up memory
				return function(ctrlScope) {
					ctrlScope.$on("$destroy", function() {
						var index = initialiserStack.indexOf(initialiser);
						if (index != -1) {
							initialiserStack.splice(index, 1);
						}
					})
				}
			}

			this.pushState = function(modifiedPathComponents) {
				//merge the changes into a new array
				var currentPathComponents = getProperPathComponents();
				var newPathComponents = new Array();
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
			function getProperPathComponents() {
				return location.path().substring(1).split("/");
			}
		}

		//return a new instance of the StateManager
		return new StateManager();
	}])