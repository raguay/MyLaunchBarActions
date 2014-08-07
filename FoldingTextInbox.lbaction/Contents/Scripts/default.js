//
// Function: 		run
//
// Description: 	This function is called by LaunchBar whenever the action is called without a string.
//						It creates a menu that LaunchBar will give to the user. The menu items list
//						actual functions to call to cause an action to happen in FoldingText. Simply call
//						the runWithString is an empty string.
//
function run() {
	runWithString("");
}

//
// Function: 		runWithString
//
// Description: 	This function is called by LaunchBar whenever the action is called with a string.
//						It creates a menu that LaunchBar will give to the user. The menu items list
//						actual functions to call to cause an action to happen in FoldingText.
//
// Inputs:
//						string 			A string given by the user.
//
function runWithString(string) {
	//
	// Create variables that will be used.
	//
	var result = [];
	string = string.trim();

	//
	// This function should be called to produce a new list. Create it.
	//
	result.push({
		title: "Inbox",
		subtitle: "FoldingText Actions",
		icon: "icon",
		action: 'inbox',
		actionArgument: string,
		actionRunsInBackground: true,
		actionReturnsItems: false
	});

	//
	// Return the resulting menu list.
	//
	return(result);
}


//
// Function: 		inbox
//
// Description: 	This function adds a user supplied text to the first FoldingText
//						document at the first @inbox tag. This is a specialized version
// 					of the addToTag function.
//
// Inputs:
//						obj 		The string passed from the user.
//
function inbox(obj) {
	LaunchBar.execute("/usr/bin/osascript","Inbox.scpt", obj.toString());
}
