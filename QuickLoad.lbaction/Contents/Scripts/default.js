//
// LaunchBar Action:     QuickLoad
//
// Description:                This action script gets
//				 The most recently modified
//				 file in the directory interested
//				 in and sends it to LaunchBar
//				 for actioning.
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
	//
	// Get the full path to the directory to check.
	//
	var listFlag = "U";
	var searchDir = LaunchBar.homeDirectory + "/Downloads/";
	var orderNum = 1;

	//
	// Get the user specified list flag.
	//
	listFlagFile = LaunchBar.homeDirectory + "/.qloptions";
	if (File.exists(listFlagFile)) {
		var options = File.readJSON(listFlagFile);
		listFlag = options.flags;
		searchDir = options.dir;
		orderNum = options.orderNum;
 	}

	//
	// List the directory getting the most recently
	// modified file.
	//
	var uri = LaunchBar.execute("/bin/ls",  "-1t" + listFlag, searchDir).split('\n');

	//
	// Make sure we are not going out of the bounds and is
	// a non-empty element.
	//
	if(uri.length < orderNum)
		orderNum = uri.length;
	if(uri[orderNum-1] == "")
		orderNum = orderNum - 1;

	//
	// Sent it to the LaunchBar using a
	// command URL
	//
	LaunchBar.openCommandURL('x-launchbar:select?file=' + searchDir + "/" + uri[orderNum - 1]);
}
