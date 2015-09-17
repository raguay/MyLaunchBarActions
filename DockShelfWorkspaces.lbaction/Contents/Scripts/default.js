// LaunchBar Action Script
function run() {
	return runWithString("");
}

function runWithString(argument) {
	var results = [];
	var loop = 0;
	LaunchBar.openURL("dockshelf://dump");
	var spaces = File.readText("/Users/" + LaunchBar.userName + "/Library/DockShelf/workspaces_dump.txt").replace(/\"/g,"");
	spaces = spaces.split(",");
	for (var i=0;i<spaces.length;i++) {
		var space = spaces[i].trim();
		results.push({
			title: space,
			subtitle: "DockShelf Workspace Selection",
			icon: "icon.png",
			action: 'gotoWorkSpace',
			actionArgument: space,
			actionRunsInBackground: true,
			actionReturnsItems: false
		});
		loop++;
	}
	return results;
}

function gotoWorkSpace( Space ) {
	LaunchBar.openURL("dockshelf://workspace?name=" + Space );
}

