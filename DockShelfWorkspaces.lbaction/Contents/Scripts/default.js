// LaunchBar Action Script
function run() {
	return runWithString("");
}

function runWithString(argument) {
	var results = [];
	var loop = 0;
	var ws = LaunchBar.execute("/usr/libexec/PlistBuddy", "-c", "Print workspaces:system.objects:"+ loop +":title", "/Users/" + LaunchBar.userName + "/Library/DockShelf/workspaces.dsworkspaces");
	do {
		results.push({
			title: ws,
			subtitle: "DockShelf Workspace Selection",
			icon: "icon.png",
			action: 'gotoWorkSpace',
			actionArgument: ws.trim(),
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
		loop++;
		ws = LaunchBar.execute("/usr/libexec/PlistBuddy", "-c", "Print workspaces:system.objects:"+ loop +":title", "/Users/" + LaunchBar.userName + "/Library/DockShelf/workspaces.dsworkspaces");
	} while(ws != ""); 
	return results;
}

function gotoWorkSpace( Space ) {
	LaunchBar.openURL("dockshelf://workspace?name=" + Space );
}

