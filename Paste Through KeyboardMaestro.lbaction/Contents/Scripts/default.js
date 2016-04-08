// LaunchBar Action Script

function run(argument) {
   if (argument == undefined) {
      // Inform the user that there was no argument
      LaunchBar.execute("/usr/bin/open","../Resources/Paste from Alfred.kmmacros");
   } else {

      File.writeText(argument,LaunchBar.homeDirectory + "/.cliptxt");
      LaunchBar.execute("./copy.sh",LaunchBar.homeDirectory + "/.cliptxt");
      LaunchBar.executeAppleScript('tell Application "Keyboard Maestro Engine" to do Script "Paste from Alfred"');
   }
}
