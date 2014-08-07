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
	var parts = string.split("|");
	string = parts[0].toLowerCase();
	var bks = getbookmarks();

	//
	// This function should be called to produce a new list. Create it.
	//
	if("goto a bookmark".search(string) != -1) {
		var tmp = {
			title: "Go to a Bookmark",
			subtitle: "FoldingText Actions",
			icon: "icon",
			children: [],
			actionRunsInBackground: true,
			actionReturnsItems: false
		};
		bks.forEach(function(each) {
			var tmp2 = {
				title: each.title,
				subtitle: "FoldingText: Goto Bookmark",
				icon: "icon",
				action: 'gotobk',
				actionArgument: each.url,
				actionRunsInBackground: true,
				actionReturnsItems: false
			}
			tmp.children.push(tmp2);
		});
		result.push(tmp);
	}
	if("remove bookmarks".search(string) != -1) {
		var tmp = {
			title: "Remove a Bookmark",
			subtitle: "FoldingText Actions",
			icon: "icon",
			children: [],
			actionRunsInBackground: true,
			actionReturnsItems: false
		};
		bks.forEach(function(each) {
			var tmp2 = {
				title: each.title,
				subtitle: "FoldingText: Remove Bookmark",
				icon: "icon",
				action: 'removebookmark',
				actionArgument: each.title,
				actionRunsInBackground: true,
				actionReturnsItems: false
			}
			tmp.children.push(tmp2);
		});
		result.push(tmp);
	}
	if("make bookmark".search(string) != -1) {
		result.push({
			title: "Make Bookmark",
			subtitle: "FoldingText Actions",
			icon: "icon",
			action: 'mkbookmark',
			actionArgument: parts[1],
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
	}
	if("install bookmarker".search(string) != -1) {
		result.push({
			title: "Install Bookmark Activator",
			subtitle: "FoldingText Actions",
			icon: "icon",
			action: 'installBKA',
			actionArgument: '',
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
// Function: 		gotobk
//
// Description: 	This function will open a bookmark uri.
//
function gotobk(obj) {
	var loc = obj.toString().trim();
	LaunchBar.openURL(loc);
}

//
// The name of the bookmark json file.
//
var bookmarkfilename = "bookmarks.json";

//
// Function: 		getbookmarks
//
// Description: 	This function reads all the bookmarks from
//						the bookmark file and returns it.
//
function getbookmarks() {
	var bklist = [];

	//
	// See if the file exists.
	//
	if(File.exists(Action.supportPath + bookmarkfilename)) {
		try {
			//
			// The file is there, read it in.
			//
    		bklist = File.readJSON(Action.supportPath + bookmarkfilename);
		} catch (exception) {
			//
			// The file had a problem. Tell the user.
			//
    		LaunchBar.alert('Bookmarks not readable: ' + exception);
		}
	}
	return(bklist);
}

//
// Function: 		savebookmarks
//
// Description: 	This function takes an array of bookmarks and
//						saves it into it's json file for later use.
//
// Input:
//						bkmarks 		array of bookmarks
//
function savebookmarks(bkmarks) {
	try {
		//
		// Write the bookmarks into it's json file.
		//
		File.writeJSON(bkmarks,Action.supportPath + bookmarkfilename);
	} catch (exception) {
		//
		// Something went wrong. Tell the user.
		//
		LaunchBar.alert("Could not save bookmarks: " + exception);
	}
}

//
// Function: 		mkbookmark
//
// Description: 	This function calls an osascript to figure out the
//						proper URI for the topmost FoldingText document to
//						make the bookmark. It then adds that bookmark to the
//						bookmarks in the bookmark file.
//
function mkbookmark(obj) {
	//
	// Get the URI.
	//
	var bkmark = LaunchBar.execute("/usr/bin/osascript", "./FTCopyAsURL.scpt");

	//
	// Get all the other bookmarks.
	//
	var bkmarks = getbookmarks();

	//
	// Add the new bookmark to the list.
	//
	bkmarks.push({
		title: obj.toString(),
		url: bkmark
	});

	//
	// Save the bookmark list.
	//
	savebookmarks(bkmarks);
}

//
// Function: 		removebookmark
//
// Description: 	This function removes the bookmark that matches
//						the title given from the bookmark list.
//
// Input:
//						obj 	The title of the bookmark to remove.
//
function removebookmark(obj) {
	//
	// Clean up the given title string.
	//
	var rembk = obj.toString().trim();

	//
	// Get the bookmarks.
	//
	var bkmarks = getbookmarks();

	//
	// Create a new array by filtering out all items that have
	// a matching title.
	//
	var newbkmarks = bkmarks.filter(function(item) {
		if(item.title.trim() != rembk) {
			return(true);
		} else {
			return(false);
		}
	});

	//
	// Save the new array of bookmarks.
	//
	savebookmarks(newbkmarks);
}

//
// Function:  		installBKA
//
// Description: 	This function executes the program that will
//						install the URI processing for our bookmarks.
//
function installBKA(obj) {
	LaunchBar.execute("/usr/bin/open","OpenFTDocAtLine.app");
}
