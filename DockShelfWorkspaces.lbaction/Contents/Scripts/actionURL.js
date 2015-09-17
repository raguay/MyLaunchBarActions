// LaunchBar Action Script

function runWithURL(URL, details)
{
	LaunchBar.alert(details.queryParameters);
	LaunchBar.openURL("dockshelf://workspace?name=" + details.queryParameters["name"] );
}
