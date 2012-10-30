// controllers.js

function RootCtrl($scope, stateManager) {
	console.log("root");
	stateManager.registerInitialiser(function rootz(pathComponents) {
		console.log("root INIT");
	})($scope, "root")

	$scope.setTitle = function(title) {
		// $scope.htmlTitle = title + " - Cloudpulse";
		$("title").text(title + " - Cloudpulse");
	}

	$scope.bearSpace = function() {
		console.log("\n");
	}
}

function ConsoleCtrl($scope, stateManager, $location) {
	console.log("console");
	//this is an attempt to structure the initialiser a little more, and abstract even more away
	//use this one and never let the top one modify the url

	//otherwise, store a separate stack for each url

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

	stateManager.registerInitialiser(function consolez(pathComponents) {
		console.log("console INIT");

		if (pathComponents[0]) {
			modifyContent(pathComponents[0]);
		} else {
			modifyContent("services");
			stateManager.replaceState(["services"]);
		}		

		// if (fresh) {
		// 	modifyContent("services");
		// 	stateManager.replaceState(["services"]);

		// }
		// else {
		// 	modifyContent(pathComponents[0]);
		// }
		$scope.setTitle("Console");
	})($scope, "console")

	// stateManager.registerInitialiser(function(pathComponents) {
	// 	console.log("console INIT");

	// 	if (pathComponents[0]) {
	// 		modifyContent(pathComponents[0]);
	// 	} else {
	// 		modifyContent("services");
	// 		stateManager.replaceState(["services"]);
	// 	}
	// })($scope, "console")

	// $scope.bearSetTitle = function(title) {
	// 	$("title").text(title);
	// }

	// $scope.bearSetPath  = function(page) {
	// 	$location.path("/"+page);
	// }

	// $scope.bearTitleThenPath = function(param) {
	// 	$("title").text(param);
	// 	$location.path("/"+param);		
	// }

	// $scope.bearPathThenTitle = function(param) {
	// 	$location.path("/"+param);
	// 	// $("title").text(param);

	// }

	$scope.showPage = function(page) {
		stateManager.pushState([page]);
		modifyContent(page);
	}

	/* utils */
	function modifyContent(page) {
		//foo hack, need to defer execution until the service is finished	
		// setTimeout(function() {
		// 	$scope.setTitle(page);
		// }, 100);

		$scope.consoleContent = "/partials/console/"+page;
	}
}

function MonitorsCtrl($scope, stateManager) {
	console.log("monitors");
	stateManager.registerInitialiser(function monitorz(pathComponents) {
		console.log("monitors INIT: "+pathComponents.join("/"));
		// console.log(pathComponents)
		if (pathComponents[1]) {
			modifyContent(pathComponents[1]);
		}
		else {
			modifyContent("default");
			stateManager.replaceState([null, "default"]);
		}

		$scope.setTitle("Monitors");
	})($scope, "monitors")


	// stateManager.registerInitialiser(function(pathComponents) {
	// 	console.log("monitors INIT");
	// 	if (pathComponents[1]) {
	// 		modifyContent(pathComponents[1]);
	// 	}
	// 	else {
	// 		modifyContent("default");
	// 		stateManager.replaceState([null, "default"]);
	// 	}
	// })($scope, "monitors")

	$scope.showMode = function(mode) {
		stateManager.pushState([null, mode]);
		modifyContent(mode);
	}

	/* utils */
	function modifyContent(mode) {
		// setTimeout(function() {
		// 	$scope.setTitle(mode);
		// }, 100);

		$scope.monitorsContent = "/partials/console/monitors/"+mode;
	}
}

function ViewCtrl($scope, stateManager) {
	console.log("view");
	stateManager.registerInitialiser(function viewz(pathComponents) {
		console.log("view INIT");
		$scope.setTitle("View");
	})($scope, "view")

}

function EditCtrl($scope, stateManager) {
	console.log("edit");
	stateManager.registerInitialiser(function editz(pathComponents) {
		console.log("edit INIT");
		//todo
		$scope.setTitle("Edit");
	})($scope, "edit")

}

function DefaultCtrl($scope, stateManager) {
	console.log("default");
	stateManager.registerInitialiser(function defaultz(pathComponents) {
		console.log("default INIT");
		$scope.setTitle("Default");
		//todo
	})($scope, "default")
}

function ServicesCtrl($scope, stateManager) {
	console.log("services");
	stateManager.registerInitialiser(function servicez(pathComponents) {
		console.log("services INIT");
		$scope.setTitle("Services");
		//todo
	})($scope, "services")
}