// LaunchBar Action Script

//
// Function:         run
//
// Description:      This function is called by LaunchBar
//					 whenever the action is requested by the
//					 user.
//
// Inputs:
// 					 argument 	Optional string from the user
//
function run(argument) {
    //
    // Get the options.
    //
    var options = getOptions();
    var result = [];
    result.push({
        "title": 'Separator: ' + options.seperator,
        "action": 'processOptionSep',
        "actionArgument": argument,
        "actionRunsInBackground": true,
        "actionReturnsItems": false
    });
    result.push({
        "title": 'Position: ' + options.position.toString(),
        "action": 'processOptionPos',
        "actionArgument": argument,
        "actionRunsInBackground": true,
        "actionReturnsItems": false
    });
    var child = [];
    child.push({
        	"title": "Forwards",
        	"actionArgument": "true",
        	"action": 'processOptionDir',
        	"actionRunsInBackground": true,
        	"actionReturnsItems": false
        });
    child.push({
        	"title": "Backwards",
        	"actionArgument": "false",
        	"action": 'processOptionDir',
        	"actionRunsInBackground": true,
        	"actionReturnsItems": false
        });
    result.push({
        "title": 'Forwards: ' + options.forwards.toString(),
        "children": child
    });
    return (result);
}

function processOptionSep(arg) {
	var options = getOptions();
	options.seperator = arg;
	writeOptions(options);
}

function processOptionDir(arg) {
	var options = getOptions();
	if(arg == "true") {
		options.forwards = true;
	} else {
		options.forwards = false;
	}
	writeOptions(options);
}

function processOptionPos(arg) {
	var options = getOptions();
	options.position = parseInt(arg);
	writeOptions(options);
}

function getOptions(){

	var options;
    if (File.exists(LaunchBar.homeDirectory + "/.lpaOptions")) {
    	//
    	// It exists. Read them.
    	//
        options = File.readJSON(LaunchBar.homeDirectory + "/.lpaOptions");
    } else {
    	//
    	// There isn't an options file. Set the defaults.
    	//
        LaunchBar.alert("Options haven't been set. Will use defaults.");
        options = {
            seperator: ',',
            position: 0,
            forwards: true
        };
        writeOptions(options);
    }
    return(options);
}

function writeOptions(opt) {
    File.writeJSON(opt, LaunchBar.homeDirectory + "/.lpaOptions")
}
