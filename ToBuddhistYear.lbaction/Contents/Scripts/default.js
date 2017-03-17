// LaunchBar Action Script

function run(argument) {
  //
  // Get the current Date.
  //
  var now = new Date();

  //
  // If some text was given, then parse
  // the text as a date.
  //
  if (argument != null) {
    now = new Date(argument);
  }

  //
  // Convert to Buddhist calendar.
  //
  var buddhistNow = LaunchBar.formatDate(now, {
    calendar: 'buddhist'
  });

  //
  // Save to the Clipboard.
  //
  LaunchBar.setClipboardString(buddhistNow);

  //
  // Show the user.
  //
  LaunchBar.displayNotification({
    string: buddhistNow,
    title: "Buddhist Date"
  });
}
