//
// LaunchBar Action Script:  List Processing Action
//
// Description:         This action allows the user to
//                      sequence through a list of items.
//

function run(argument) {
    if (argument == undefined) {
        //
        // This gives the next item in the list.
        //
        LaunchBar.paste(getNextItem());
    } else {
        //
        // This receives the new list and resets all
        // variables.
        //
        saveList(argument);
    }
}

//
// Function:         getNextItem
//
// Description:      This function gets the next element from
//                   the list and returns it.
//
// Inputs:
//
function getNextItem() {
    var result = "";
    var options = {};

    if (File.exists(LaunchBar.homeDirectory + "/.lpaList")) {
        var list = File.readText(LaunchBar.homeDirectory + "/.lpaList");
        if (File.exists(LaunchBar.homeDirectory + "/.lpaOptions")) {
            options = File.readJSON(LaunchBar.homeDirectory + "/.lpaOptions");
        } else {
            LaunchBar.alert("Options haven't been set. Will use defaults.");
            options = {
                seperator: ',',
                position: 0,
                forwards: true
            };
            File.writeJSON(options, LaunchBar.homeDirectory + "/.lpaOptions")
        }

        //
        // Get the next item from the list.
        //
        list = list.split(options.seperator);
        result = list[options.position];

        //
        // Increment the location for the next round. Make sure it
        // doesn't get too large of an index.
        //
        if(options.forwards) {
            options.position += 1;
            if(options.position >= list.length) {
                options.position = list.length - 1;
            }
        } else {
            options.position -= 1;
            if(options.position < 0) {
                options.position = 0;
            }
        }

        //
        // Save the options file.
        //
        File.writeJSON(options, LaunchBar.homeDirectory + "/.lpaOptions")
    } else {
        LaunchBar.alert("No list is stored.");
    }
    return (result.trim());
}

//
// Function:         saveList
//
// Description:      This function saves the list to the
//                    .lpaList in the user's home directory.
//
// Inputs:
//                    list     List to save.
//
function saveList(list) {
    //
    // Save the list.
    //
    File.writeText(list, LaunchBar.homeDirectory + "/.lpaList");

    //
    // Get the options.
    //
    if (File.exists(LaunchBar.homeDirectory + "/.lpaOptions")) {
        options = File.readJSON(LaunchBar.homeDirectory + "/.lpaOptions");
    } else {
        LaunchBar.alert("Options haven't been set. Will use defaults.");
        options = {
            seperator: ',',
            position: 0,
            forwards: true
        };
        File.writeJSON(options, LaunchBar.homeDirectory + "/.lpaOptions")
    }

    //
    // Split up the list so that we can get a count.
    //
    list = list.split(options.seperator);

    //
    // If we are processing forwards, set position to 0. Otherwise,
    // set the position to the last most entry.
    //
    if(options.forwards)
        options.position = 0;
    else
        options.position = list.length -1;

    //
    // Save the options.
    //
    File.writeJSON(options,LaunchBar.homeDirectory + "/.lpaOptions");
}
