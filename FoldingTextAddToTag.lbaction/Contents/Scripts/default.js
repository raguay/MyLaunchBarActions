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
	// Get a list of tags from the current document.
	//
	var tags = getTagsFromDocument().split(",");

	//
	// This function should be called to produce a new list. Create it.
	//
	//
	// Foreach tag, add an menu entry as a child.
	//
	tags.forEach(function(item){
		//
		// This adds to the AddToTag command.
		//
		result.push({
			title: item,
			subtitle: "FoldingText: Add to Tag",
			icon: "icon",
			action: 'addToTag',
			actionArgument: item.trim() + "|" + string,
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
	});

	//
	// Return the resulting menu list.
	//
	return(result);
}

//
// function: 		getTagsFromDocument
//
// Description: 	This function will use an osascript to query the topmost FoldingText
//						document for a list of tags. This list is returned to the calling
//						routine.
//
function getTagsFromDocument() {
	var result = LaunchBar.execute("/usr/bin/osascript","getListOfTags.scpt");
	return(result);
}

//
// function: 		addToTag
//
// Description: 	This function will use an osascript to add a user supplied string
//						to the first tag of the type given to the script. The information
//						given to the script is "tag|text" where tag is a tag and text is
//                the text to be added.
//
function addToTag(obj) {
	LaunchBar.execute("/usr/bin/osascript","notetag.scpt",obj.toString());
}
