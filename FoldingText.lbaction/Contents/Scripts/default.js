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
	string = string.toLowerCase();

	//
	// This function should be called to produce a new list. Create it.
	//
	if("foldingtext documents".search(string) != -1) {
		result.push({
			title: "FoldingText Documents",
			subtitle: "FoldingText Actions",
			icon: "icon",
			children: [
				{
					title: "SDK Page",
					url: "x-foldingtext://sdk"
				},
				{
					title: "User Guide",
					url: "x-foldingtext://guides/user"
				},
				{
					title: "Nodepath Guide",
					url: "x-foldingtext://guides/nodepath"
				}
			]
		});
	}
	if("open selection".search(string) != -1) {
		result.push({
			title: "Open Selection",
			subtitle: "FoldingText Actions",
			icon: "icon",
			action: 'opensel',
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
	}
	if("get visible text".search(string) != -1) {
		result.push({
			title: "Get Visible Text",
			subtitle: "FoldingText Actions",
			icon: "icon",
			action: 'getvisible',
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
	}
	if("chrome tabs".search(string) != -1) {
		result.push({
			title: "Chrome Tabs",
			subtitle: "FoldingText Actions",
			icon: "icon",
			action: 'chrome',
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
	}
	if("safari tabs".search(string) != -1) {
		result.push({
			title: "Safari Tabs",
			subtitle: "FoldingText Actions",
			icon: "icon",
			action: 'safari',
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
	}
	if("remove tag".search(string) != -1) {
		result.push({
			title: "Remove Tag",
			subtitle: "FoldingText Actions",
			icon: "icon",
			action: 'tagremove',
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
	}
	if("marked".search(string) != -1) {
		result.push({
			title: "Marked",
			subtitle: "FoldingText Actions",
			icon: "icon",
			action: 'marked',
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
	}
	if("next".search(string) != -1) {
		result.push({
			title: "Next",
			subtitle: "FoldingText Actions",
			icon: "icon",
			action: 'goNext',
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
	}

	//
	// Return the resulting menu list.
	//
	return(result);
}

//
// Function: 		opensel
//
// Description: 	This function uses an osascript to get the current selection from
//						Finder or PathFinder, and open it in FoldingText.
//
function opensel(obj) {
	LaunchBar.execute("/usr/bin/osascript","OpenSel.scpt");
}

//
// Function: 		getvisible
//
// Description: 	This function calls a osascript to get all the currently visible,
//						unfolded text and paste it to the clipboard.
//
function getvisible(obj) {
	LaunchBar.execute("/usr/bin/osascript","getvisible.scpt");
}

//
// Function: 		chrome
//
// Description: 	This function calls an osascript create a link to
//						all the current tabs in the current Chrome browser
//						into the topmost FoldingText document.
//
function chrome(obj) {
	LaunchBar.execute("/usr/bin/osascript","chrometabs.scpt");
}

//
// Function: 		safari
//
// Description: 	This function calls an osascript create a link to
//						all the current tabs in the current Safari browser
//						into the topmost FoldingText document.
//
function safari(obj) {
	LaunchBar.execute("/usr/bin/osascript","safaritabs.scpt");
}

//
// Function: 		goNext
//
// Description: 	This function calls an osascript to move to the next
//						to do item by first marking the current as @done and the
//						next todo item as @next.
//
function goNext(obj) {
	LaunchBar.execute("/usr/bin/osascript","next.scpt");
}

//
// Function: 		tagremove
//
// Description: 	This function calls an osascript to prompt the user
//						for a tag to remove and remove it from the current
//						document.
//
function tagremove(obj) {
	LaunchBar.execute("/usr/bin/osascript","removetag.scpt");
}

//
// Function: 		marked
//
// Description: 	This opens the topmost FoldingText Document in
//						Marked. It this tries to position the two programs
//						side by side on the screen.
//
function marked(obj) {
	LaunchBar.execute("/usr/bin/osascript","marked.scpt");
}
