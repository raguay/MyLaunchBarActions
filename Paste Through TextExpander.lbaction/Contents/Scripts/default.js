// LaunchBar Action Script

function run(argument) {
   if (argument == undefined) {
      // Inform the user that there was no argument
      LaunchBar.alert('No text was passed to the action.');
   } else {
/*      LaunchBar.executeAppleScript('set theQuery to "' + fixQuotes(argument) + '"',
         'delay 1',
         'tell application "TextExpander"',
         ' tell group "User Testing"',
         ' set temporarySnippet to make new snippet with properties {plain text expansion:theQuery, abbreviation:"temporary_snippet_ok_to_delete"}',
         ' end tell',
         ' expand snippet temporarySnippet',
         ' delete temporarySnippet',
         'end tell');
         */
      File.writeText(argument,LaunchBar.homeDirectory + "/.cliptxt");
      LaunchBar.execute("./copy.sh",LaunchBar.homeDirectory + "/.cliptxt");
      LaunchBar.executeAppleScript('set theQuery to (the Clipboard as text)',
         'delay 1',
         'tell application "TextExpander"',
         ' tell group "User Testing"',
         ' set temporarySnippet to make new snippet with properties {plain text expansion:theQuery, abbreviation:"temporary_snippet_ok_to_delete"}',
         ' end tell',
         ' expand snippet temporarySnippet',
         ' delete temporarySnippet',
         'end tell');
   }
}
//
// Function:         fixQuotes
//
// Description:      This function escapes all double and signal quates and makes
//                   them single quotes.
//
// Inputs:
//                   unsafe      String to process.
//
function fixQuotes(unsafe) {
    return unsafe
         .replace(/"/g, "\'")
         .replace(/'/g, "\'");
 }
