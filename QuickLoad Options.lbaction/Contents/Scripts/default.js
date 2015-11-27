//
// LaunchBar Action:     QuickLoad Options
//
// Description:                This action script is for setting
//				 the options for the QuickLoad
//				 action.
//

//
// Function:        run
//
// Description:    This function is called whenever
//			the action is ran. It will then get
//			the full path to the directory to be
//			searched, find's the most recent
//			and sends it to LaunchBar for
//			further actions.
//
function run(argument) {
	var listFlagFile = LaunchBar.homeDirectory + "/.qloptions";
	if (!File.exists(listFlagFile)) {
		//
		// The options file doesn't exist. Create it.
		//
		var options = {
			"flags": "U",
			"dir": LaunchBar.homeDirectory + "/Downloads",
			"orderNum": 1
		};

		File.writeJSON(options,listFlagFile);
 	}

	return([{
			title: 'Set for last Modified',
			action: 'lastModified',
			actionRunsInBackground: true,
			actionReturnsItems: false
		},{
			title: 'Set for last Added',
			action: 'lastAdded',
			actionRunsInBackground: true,
			actionReturnsItems: false
		}, {
			title: 'Set Order Number',
			children: [{
				title: '1st',
				subtitle: 'Order Number to Pull',
				action: 'setOrderNumber',
				actionArgument: '1',
				actionRunsInBackground: true,
				actionReturnsItems: false
			},{
				title: '2nd',
				subtitle: 'Order Number to Pull',
				action: 'setOrderNumber',
				actionArgument: '2',
				actionRunsInBackground: true,
				actionReturnsItems: false
			},{
				title: '3rd',
				subtitle: 'Order Number to Pull',
				action: 'setOrderNumber',
				actionArgument: '3',
				actionRunsInBackground: true,
				actionReturnsItems: false
			},{
				title: '4th',
				subtitle: 'Order Number to Pull',
				action: 'setOrderNumber',
				actionArgument: '4',
				actionRunsInBackground: true,
				actionReturnsItems: false
			},{
				title: '5th',
				subtitle: 'Order Number to Pull',
				action: 'setOrderNumber',
				actionArgument: '5',
				actionRunsInBackground: true,
				actionReturnsItems: false
			}]
		}
	]);
}

//
// Function: 		runWithPaths
//
// Description: 		This will set the directory to search.
//
// Inputs:
//				paths 	An array of paths
//
function runWithPaths(paths) {
	//
	// Set the directory path given.
	//
	listFlagFile = LaunchBar.homeDirectory + "/.qloptions";
	var options = File.readJSON(listFlagFile);
	options.dir = paths[0];
	File.writeJSON(options,listFlagFile);
}

//
// Function: 		lastModified
//
// Description: 		This function sets the ls flags to show
//				the most recently modified file in the
//				directory.
//
function lastModified() {
	//
	// Set the flag option to U.
	//
	listFlagFile = LaunchBar.homeDirectory + "/.qloptions";
	var options = File.readJSON(listFlagFile);
	options.flags = "U";
	File.writeJSON(options,listFlagFile);
}

//
// Function: 		lastAdded
//
// Description: 		This function sets the ls flags to show
//				the most recently added file.
//
function lastAdded() {
	//
	// Set the flage option to 'c'.
	//
	listFlagFile = LaunchBar.homeDirectory + "/.qloptions";
	var options = File.readJSON(listFlagFile);
	options.flags = "c";
	File.writeJSON(options,listFlagFile);
}

//
// Function: 		setOrderNumber
//
// Description: 		This function sets the order number to
//				get.
//
// Inputs:
//				num 		The order number to get.
//
function setOrderNumber(num) {
	//
	// Set the flage option to 'c'.
	//
	listFlagFile = LaunchBar.homeDirectory + "/.qloptions";
	var options = File.readJSON(listFlagFile);
	options.orderNum = num;
	File.writeJSON(options,listFlagFile);
}
