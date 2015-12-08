// LaunchBar Action Script

function run(argument) {
   if (argument == undefined) {
      // Inform the user that there was no argument
      LaunchBar.alert('No text was passed to the action.');
   } else {
      LaunchBar.executeAppleScript('set theQuery to "' + argument + '"',
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
