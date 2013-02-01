// controllers.js

function RootCtrl($scope, stateManager) {
	stateManager.registerInitialiser(function (pathComponents) {
		console.log("root INIT");
	})($scope);

	$scope.setTitle = function(title) {
		document.title = title + " - angular-stateManager by Luka Mirosevic"; 
	}
}

function AnimalsCtrl($scope, stateManager, $location) {
	stateManager.registerInitialiser(function (pathComponents) {
		console.log("Animals INIT");

		//if the url contains a component at position 0, then load that page
		if (pathComponents[0]) {
			modifyContent(pathComponents[0]);
		}
		//otherwise if its fresh dont do anything
		else {
			//uncomment the following two lines to add some default behaviour when the url component is not set to anything

			// modifyContent("cats");
			// stateManager.replaceState(["cats"]);
		}		

		$scope.setTitle("Animals");
	})($scope);

	//loads a new animal by 1)pushing a new piece of state onto the statemanager, and 2)loading the content
	$scope.showAnimal = function(animal) {
		stateManager.pushState([animal]);
		modifyContent(animal);
	}

	//utility function to abstract away loading of a page inside angular
	function modifyContent(page) {
		$scope.animalsContent = "/partials/animals/"+page;
	}
}

function DogsCtrl($scope, stateManager, $location) {
	stateManager.registerInitialiser(function (pathComponents) {
		console.log("Dogs INIT");

		//if a specific dog is set in the url, then just load that view in
		if (pathComponents[1]) {
			modifyContent(pathComponents[1]);
		}
		//if nothing is set, then load the husky by default, but we are now changing state programatically (from "nothing" to "husky") so we need to tell the statemanager to record it
		else {
			modifyContent("husky");
			stateManager.replaceState([null, "husky"]);
		}

		$scope.setTitle("Dogs");
	})($scope);

	$scope.showDog = function(dog) {
		stateManager.pushState([null, dog]);
		modifyContent(dog);
	}

	/* utils */
	function modifyContent(dog) {
		$scope.dogsContent = "/partials/animals/dogs/"+dog;
	}
}

function HuskyCtrl($scope, stateManager) {
	stateManager.registerInitialiser(function (pathComponents) {
		console.log("Husky INIT");
		$scope.setTitle("Husky");
	})($scope);
}

function GermanShepherdCtrl($scope, stateManager) {
	stateManager.registerInitialiser(function (pathComponents) {
		console.log("German Shepherd INIT");
		$scope.setTitle("German Shepherd");
	})($scope);
}

function LabradorCtrl($scope, stateManager) {
	stateManager.registerInitialiser(function (pathComponents) {
		console.log("Labrador INIT");
		$scope.setTitle("Labrador");
	})($scope);
}

function CatsCtrl($scope, stateManager) {
	stateManager.registerInitialiser(function (pathComponents) {
		console.log("Cats INIT");
		$scope.setTitle("Cats");
	})($scope);
}