// controllers.js

function RootCtrl($scope, stateManager) {
	console.log("rootCtrl instantiated");
	stateManager.registerInitialiser(function(pathComponents) {
		//initialisation function
		console.log("rootCtrl setup");

		//do own init
		$scope.htmlTitle = "Cloudpulse";
	});

	$scope.setTitle = function(title) {
		$scope.htmlTitle = title + " - Cloudpulse";
	}
}

function ConsoleCtrl($scope, stateManager) {
	console.log("consoleCtrl instantiated");
	stateManager.registerInitialiser(function(pathComponents) {
		console.log("consoleCtrl setup with: "+pathComponents[0]);

		modifyContent(pathComponents[0]);
	})

	$scope.showPage = function(page) {
		modifyContent(page);
		stateManager.pushState([page]);
	}

	/* utils */
	function modifyContent(page) {
		$scope.consoleContent = "/partials/console/"+page;
		// $scope.setTitle(page);
	}
}

function MonitorsCtrl($scope, stateManager) {
	console.log("monitorsCtrl instantiated");
	stateManager.registerInitialiser(function(pathComponents) {
		console.log("monitorsCtrl setup with: "+pathComponents[1]);

		if (pathComponents[1]) {
			modifyContent(pathComponents[1]);
		}
		else {
			modifyContent("default");
		}
		//this is the place where you get a chance to set default values if the ones coming frmo the sm are undefined
	})

	$scope.showMode = function(mode) {
		modifyContent(mode);
		stateManager.pushState([null, mode]);
	}

	/* utils */
	function modifyContent(mode) {
		$scope.monitorsContent = "/partials/console/monitors/"+mode;
		$scope.setTitle(mode);		
	}
}

function ViewCtrl($scope, stateManager) {
	console.log("view controlelr instantiated");
	stateManager.registerInitialiser(function(pathComponents) {
		console.log("view controller setup");
	})
}

function EditCtrl($scope, stateManager) {
	console.log("edit controlelr instantiated");
	stateManager.registerInitialiser(function(pathComponents) {
		console.log("edit controller setup");
	})
}

function DefaultCtrl($scope, stateManager) {
	console.log("default controlelr instantiated");
	stateManager.registerInitialiser(function(pathComponents) {
		console.log("default controller setup");
	})
}

function ServicesCtrl($scope, stateManager) {
	console.log("servicesCtrl instantiated");

	stateManager.registerInitialiser(function(pathComponents) {
		console.log("servicesCtrl setup with: "+pathComponents[1]);
	})
}