//
// Function:         runWithPaths (paths)
//
// Description:      This function is called by Launchbar with a path
//							is sent to the action.
//
// Inputs:
//							paths 	The paths sent to the action.
//
function runWithPaths(paths) {
    //
    // Save the path to the ~/.tpProjectFile location.
    //
    File.writeText(paths[0], LaunchBar.homeDirectory + "/.tpProjectFile");
}

//
// Function: 		run
//
// Description: 	This function is called by LaunchBar whenever the action is called with a string.
//						It creates a menu that LaunchBar will give to the user. The menu items list
//						actual functions to call to cause an action to happen in FoldingText.
//
// Inputs:
//						string 			A string given by the user.
//
function run(string) {
    //
    // Create variables that will be used.
    //
    var result = [];
    if(typeof(string) == "string")
        string = string.trim();
    else
        string = "";

    //
    // Get a list of tags from the current document.
    //
    var tags = getProjectsFromDocument().split(",");

    //
    // This function should be called to produce a new list. Create it.
    //
    //
    // Foreach tag, add an menu entry as a child.
    //
    tags.forEach(function(item) {
        //
        // This adds to the AddToTag command.
        //
        result.push({
            title: item,
            subtitle: "TaskPaper: Add to Project",
            icon: "icon",
            action: 'addToProject',
            actionArgument: item.trim() + "|" + string,
            actionRunsInBackground: true,
            actionReturnsItems: false
        });
    });

    //
    // Return the resulting menu list.
    //
    return (result);
}

//
// function: 		getProjectsFromDocument
//
// Description: 	This function will use an osascript to query the topmost FoldingText
//						document for a list of tags. This list is returned to the calling
//						routine.
//
function getProjectsFromDocument() {
    var result = "";
    var pFile = getCurrentFileOrDefault();
    if (File.exists(pFile)) {
        var tFile = File.readText(pFile).split('\n');
        tFile.forEach(function(element, index, array) {
            element = element.trim();
            if ((element.indexOf(":") > 0)&&(element[0] != '-')) {
                result += element.substr(0, element.indexOf(':')) + ", ";
            }
        });
    }
    return (result.substr(0, result.length - 2));
}

//
// function: 		addToProject
//
// Description: 	This function will use an osascript to add a user supplied string
//						to the first tag of the type given to the script. The information
//						given to the script is "tag|text" where tag is a tag and text is
//                the text to be added.
//
function addToProject(projectString) {
    //
    // For some reason, the Launchbar will not
    // disappear without this. But, this will not
    // paste anything eiter.
    //
    LaunchBar.paste("");

    //
    // Find the Project's location in the file.
    //
    var parts = projectString.split("|");
    var pFile = getCurrentFileOrDefault();
    if (File.exists(pFile)) {
        var tFile = File.readText(pFile).split('\n');
        var index = tFile.findIndex(function(element, index, array) {
            element = element.trim();
            if ((element.indexOf(":") > 0)&&(element[0] != '-')) {
                project = element.substr(0, element.indexOf(':'));
                if (project == parts[0]) {
                    return (true);
                }
            }
        });

        //
        // Add the new item.
        //
        var result = tFile.slice(0, index + 1).join('\n') + "\n\t- " + parts[1] + "\n" + tFile.slice(index + 1).join('\n');

        //
        // Save the file.
        //
        File.writeText(result, pFile);
    }
}

//
// Function:         getCurrentFileOrDefault
//
// Description:      This function will see if TaskPaper is already running. If it is, then
// 						it will return the file it has open. Otherwise, it will return the last
//							saved TaskPaper file location.
//
// Inputs:
//
function getCurrentFileOrDefault() {
    var pFile = LaunchBar.executeAppleScript('if application "TaskPaper" is running then',
        'tell application id (id of application "TaskPaper")',
        '	set a to file of the front document',
        ' 	return POSIX path of a',
        'end tell',
        'else',
        '	return ""',
        'end if').trim();
    if (pFile == "") {
        pFile = File.readText(LaunchBar.homeDirectory + "/.tpProjectFile");
    } else {
        //
        // Save the path to the ~/.tpProjectFile location.
        //
        File.writeText(pFile, LaunchBar.homeDirectory + "/.tpProjectFile");
    }

    //
    // Return the project file location.
    //
    return (pFile);
}
