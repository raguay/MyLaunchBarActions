// LaunchBar Action Script for Quiver Helper

//
// Function:         run
//
// Description:      This function is called whenever the action is ran. It
//					 will pass an argument sent to the action if present. For
//					 this action, it will parse out the argument and prompt the
//					 user for which expansion they would want to use. This
//					 action should never be called without an argument.
//
//					 This action is designed to be called from the Quiver Snippets
//					 action for processing a snippet with many variants.
//
// Inputs:
//					 argument 		String passed to the action.
//
function run(argument) {
    if (argument == undefined) {
        // Inform the user that there was no argument
        LaunchBar.alert('No argument was passed to the action');
    } else {
        //
        // Create the array of return values to allow the user to pick.
        //
        var results = [];
        var parts = argument.split("|");
        var action = "";

        switch(parts[0]) {
            case "0":
                action = "pasteSnippetNormal";
                break;

            case "1":
                action = "pasteSnippetTextExpander";
                break;

            case "2":
                action = "pasteSnippetKeyboardMaestro";
                break;

        }

        //
        // Trim the array down to not have the first element.
        //
        parts = parts.slice(1);

        //
        // Process the rest of the parts. There should be an even number
        // of items.
        //
        for (var i = 0; i < ((parts.length - 1) / 2); i++) {
            results.push({
                "title": parts[2 * i],
                "action": action,
                "actionArgument": parts[2 * i + 1],
                "actionRunsInBackground": true,
                "actionReturnsItems": false
            });

        }

        //
        // Return the results.
        //
        return results;
    }
}

//
// Function:         pasteSnippetNormal
//
// Description:      This function will paste the string given using
//					 Launchbar.
//
// Inputs:
//					 arg 		The string to paste.
//
function pasteSnippetNormal(arg) {
    LaunchBar.paste(arg);
}

//
// Function:         pasteSnippetTextExpander
//
// Description:      This function will paste the given string using
//					 TextExpander.
//
// Inputs:
//					 argument 		The string to paste.
//
function pasteSnippetTextExpander(argument) {
    //
    // Paste through Text Expander.
    //
    LaunchBar.performAction('Paste Through TextExpander', argument);
}

//
// Function:         pasteSnippetKeyboardMaestro
//
// Description:      This function will paste the given string using
//                     TextExpander.
//
// Inputs:
//                     argument         The string to paste.
//
function pasteSnippetKeyboardMaestro(argument) {
    //
    // Paste through Text Expander.
    //
    LaunchBar.performAction('Paste Through KeyboardMaestro', argument);
}
