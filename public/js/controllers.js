// controllers.js

function RootCtrl($scope, stateManager) {
	stateManager.registerInitialiser(function(pathComponents) {
		$scope.htmlTitle = "Cloudpulse";
	})($scope)

	$scope.setTitle = function(title) {
		// $scope.htmlTitle = title + " - Cloudpulse";
		$("title").text(title + " - Cloudpulse");
	}
}

function ConsoleCtrl($scope, stateManager) {
	// stateManager.registerInitialiser(
	// 	[0],
	// 	function stateChanged(pathComponents) {
	// 		modifyContent(pathComponents[0]);
	// 	},
	// 	function default() {
	// 		modifyContent("services");
	// 		stateManager.replaceState(["services"]);
	// 	}
	// )($scope)
	
	stateManager.registerInitialiser(function(pathComponents) {
		if (pathComponents[0]) {
			modifyContent(pathComponents[0]);
		} else {
			modifyContent("services");
			stateManager.replaceState(["services"]);
		}
	})($scope)

	$scope.showPage = function(page) {
		modifyContent(page);
		stateManager.pushState([page]);
	}

	/* utils */
	function modifyContent(page) {
		$scope.consoleContent = "/partials/console/"+page;
		$scope.setTitle(page);
	}
}

function MonitorsCtrl($scope, stateManager) {
	stateManager.registerInitialiser(function(pathComponents) {
		if (pathComponents[1]) {
			modifyContent(pathComponents[1]);
		}
		else {
			modifyContent("default");
			stateManager.replaceState([null, "default"]);
		}
	})($scope)

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
	stateManager.registerInitialiser(function(pathComponents) {
	})($scope)

}

function EditCtrl($scope, stateManager) {
	stateManager.registerInitialiser(function(pathComponents) {
		//todo
	})($scope)

}

function DefaultCtrl($scope, stateManager) {
	stateManager.registerInitialiser(function(pathComponents) {
		//todo
	})($scope)
}

function ServicesCtrl($scope, stateManager) {
	stateManager.registerInitialiser(function(pathComponents) {
		//todo
	})($scope)
}