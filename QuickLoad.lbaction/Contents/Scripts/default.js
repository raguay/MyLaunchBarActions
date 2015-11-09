//
// LaunchBar Action:     QuickLoad
//
// Description:                This action script gets
//				 The most recently modified
//				file in the directory interested
//				in and sends it to LaunchBar
//				for actioning.
//

//
// The base directory in the user's home to search.
//
searchDir = "/Downloads/"

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
	var dirFull = LaunchBar.homeDirectory + searchDir;

	//
	// List the directory getting the most recently
	// modified file.
	//
	var uri = dirFull + LaunchBar.execute("/bin/ls",  "-tU1", dirFull).split('\n')[0];

	//
	// Sent it to the LaunchBar using a
	// command URL
	//
	LaunchBar.openCommandURL('x-launchbar:select?file=' + uri);
}
