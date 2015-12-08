//
// Load libraries used.
//
include("./node_modules/handlebars/dist/handlebars.js");
include("/node_modules/moment/min/moment-with-locales.js");

//
// Function: MergeRecursive
//
// Description: Recursively merge properties of two objects
//
// Inputs:
// obj1 The first object to merge
// obj2 The second object to merge
//
function MergeRecursive(obj1, obj2) {

   for (var p in obj2) {
      try {
         // Property in destination object set; update its value.
         if (obj2[p].constructor == Object) {
            obj1[p] = MergeRecursive(obj1[p], obj2[p]);

         } else {
            obj1[p] = obj2[p];

         }

      } catch (e) {
         // Property in destination object not set; create it and set its value.
         obj1[p] = obj2[p];

      }
   }

   return obj1;
}

//
// Function: MergeRenameRecursive
//
// Description: Recursively merge properties of two objects
//
// Inputs:
// obj1 The first object to merge
// obj2 The second object to merge
// tadd A string to add to the title.
//
function MergeRenameRecursive(obj1, obj2, tadd) {

   for (var p in obj2) {
      try {
         // Property in destination object set; update its value.
         if (obj2[p].constructor == Object) {
            obj1[p + tadd] = MergeRecursive(obj1[p], obj2[p]);

         } else {
            obj1[p + tadd] = obj2[p];

         }

      } catch (e) {
         // Property in destination object not set; create it and set its value.
         obj1[p + tadd] = obj2[p];

      }
   }

   return obj1;
}

//
// Function: processSnippet
//
// Description: This function processes a snippet.
//
// Inputs:
// snippetDir This directory for the snippet to expand.
//
function processSnippet(snippetDir) {
   //
   // Setup variables.
   //
   var data = [];
   var template = "";
   listFlagFile = LaunchBar.homeDirectory + "/.qvoptions";
   if (File.exists(listFlagFile)) {
      var options = File.readJSON(listFlagFile);
      var defaultsDir = options.snippetsDir + "/" + options.defaultsDir;
      try {
         //
         // Get the global data.
         //
         if (File.exists(defaultsDir)) {
            //
            // The Global data file exists!
            //
            var theTemplateFile = defaultsDir + "/content.json";
            if (File.exists(theTemplateFile)) {
               //
               // And it has a proper content.json file.
               //
               var templateJSON = File.readJSON(theTemplateFile);
               for (var i = 0; i < templateJSON["cells"].length; i++) {
                  //
                  // Check each cell for being a "code" cell.
                  //
                  if (templateJSON["cells"][i]["type"] == "code") {
                     //
                     // Okay, now "json" language cells are part of the data, and "handlebars"
                     // cells are part of the template.
                     //
                     if (templateJSON["cells"][i]["language"] == "json") {
                        //
                        // Add the JSON file to the data array.
                        //
                        data = MergeRecursive(JSON.parse(templateJSON["cells"][i]["data"]), data);
                     }
                  }
               }
            } else
               LaunchBar.alert("File doesn't exist: " + theTemplateFile + "\n");
         } else {
            LaunchBar.alert("Defauls not set right")
         }

         //
         // Get the template and template data.
         //
         if (File.exists(snippetDir)) {
            //
            // Okay, the template's directory exists.
            //
            var theTemplateFile = snippetDir + "/content.json";
            if (File.exists(theTemplateFile)) {
               //
               // And, it has a proper content.json file! Good to go. Read in the JSON file.
               //
               templateJSON = File.readJSON(theTemplateFile);
               for (var i = 0; i < templateJSON["cells"].length; i++) {
                  //
                  // Check each cell for being a "code" cell.
                  //
                  if (templateJSON["cells"][i]["type"] == "code") {
                     //
                     // Okay, now "json" language cells are part of the data, and "handlebars"
                     // cells are part of the template.
                     //
                     if (templateJSON["cells"][i]["language"] == "json") {
                        //
                        // It is a JSON Data. Add it to the data array.
                        //
                        data = MergeRecursive(JSON.parse(templateJSON["cells"][i]["data"]), data);
                     } else if (templateJSON["cells"][i]["language"] == "handlebars") {
                        //
                        // It is a Handlebars cell. Add it to the template.
                        //
                        template += templateJSON["cells"][i]["data"];
                     }
                  }
               }
            } else
               process.stdout.write("File doesn't exist: " + theTemplateFile + "\n");
         } else {
            if (snippetDir == "{{clipboard}}") {
               template = LaunchBar.getClipboardString();
            } else {
               //
               // The wrong information was passed. Tell the user.
               //
               LaunchBar.alert("Sorry, the file '" + snippetDir + "' doesn't exist.");
               process.exit(1);
            }
         }

         //
         // Create various default targets for the templater.
         //
         data["cDateMDY"] = moment().format("MMMM DD, YYYY");
         data["cDateDMY"] = moment().format("DD MMMM YYYY");
         data["cDateDOWDMY"] = moment().format("dddd, DD MMMM YYYY");
         data["cDateDOWMDY"] = moment().format("dddd MMMM DD, YYYY");
         data["cDay"] = moment().format("DD");
         data["cMonth"] = moment().format("MMMM");
         data["cYear"] = moment().format("YYYY");
         data["cMonthShort"] = moment().format("MMM");
         data["cYearShort"] = moment().format("YY");
         data["cDOW"] = moment().format("dddd");
         data["cMDthYShort"] = moment().format("MMM Do YY");
         data["cMDthY"] = moment().format("MMMM Do YYYY");
         data["cHMSampm"] = moment().format("h:mm:ss a");
         data["cHMampm"] = moment().format("h:mm a");
         data["cHMS24"] = moment().format("H:mm:ss");
         data["cHM24"] = moment().format("H:mm");
         data["filename"] = "Not Implemented Yet.";

         //
         // Create the helpers functions for Handlebars.
         //
         Handlebars.registerHelper('save', function(name, text) {
            Handlebars.registerHelper(name, function() {
               return text;
            });
            return text;
         });

         Handlebars.registerHelper('clipboard', function() {
            return LaunchBar.getClipboardString();
         });

         Handlebars.registerHelper('date', function(dFormat) {
            return moment().format(dFormat);
         })

         Handlebars.registerHelper('cdate', function(cTime, dFormat) {
            return moment(cTime).format(dFormat);
         })

         //
         // Parse the Template
         //
         var tpTemplate = Handlebars.compile(template);

         //
         // Parse the template to create the results and
         // return the results. This currently doesn't work.
         //
         /*
         LaunchBar.executeAppleScript('set theQuery to "' + tpTemplate(data) + '"',
         'delay 1',
         'tell application "TextExpander"',
         ' tell group "User Testing"',
         ' set temporarySnippet to make new snippet with properties {plain text expansion:theQuery, abbreviation:"temporary_snippet_ok_to_delete"}',
         ' end tell',
         ' expand snippet temporarySnippet',
         ' delete temporarySnippet',
         'end tell');
         */
         LaunchBar.paste(tpTemplate(data));
      } catch (error) {
         LaunchBar.alert("There was an error: " + error);
      }
   } else {
      LaunchBar.alert("Snippet directory isn't set.");
   }
}
//
// Function: run
//
// Description: This function is called by LaunchBar whenever the user
// activates the action.
//
// Inputs:
// argument What the user passes on to the action
//
function run(argument) {
   //
   // Get the defaults.
   //
   var listFlagFile = LaunchBar.homeDirectory + "/.qvoptions";
   var options = File.readJSON(listFlagFile);
   var results = [];

   try {
      var dc = File.getDirectoryContents(options.snippetsDir);
      for (var i = 0; i < dc.length; i++) {
         var metaF = options.snippetsDir + "/" + dc[i] + "/meta.json";
         if (File.exists(metaF)) {
            var sp = File.readJSON(metaF);
            if (sp.title != "Defaults") {
               results.push({
                  "title": sp.title,
                  "action": 'processSnippet',
                  "actionArgument": options.snippetsDir + "/" + dc[i],
                  "actionReturnsItems": false,
                  "actionRunsInBackground": true,
                  "actionReturnsItems": false
               });
            }
         }
      }
   } catch (e) {
      LaunchBar.alert("Snippet Directory not set.");
   }
   //
   // Add the clipboard option.
   //
   results.push({
      "title": "Clipboard",
      "action": 'processSnippet',
      "actionArgument": "{{clipboard}}",
      "actionReturnsItems": false,
      "actionRunsInBackground": true,
      "actionReturnsItems": false
   });

   //
   // Return the results.
   //
   return (results);
}


//
// Function: runWithPaths
//
// Description: This will set the Quiver library File.
//
// Inputs:
// paths An array of paths
//
function runWithPaths(paths) {
   //
   // Ask and load the default notebooks.
   //
   if (LaunchBar.alert("Load Snippets Helpfile?", "This is a set of notes that explains the use of this action.", "Yes", "No") == 0) {
      LaunchBar.execute("/usr/bin/open", "./Quiver Action Help.qvnotebook");
   }
   if (LaunchBar.alert("Load Default Snippets?", "This is a collection of snippets that show the use of this action. After you select 'Yes', another requister will appear to ask if it is loaded. Do not answer it until you have loaded the Snippets into Quiver.", "Yes", "No") == 0) {
      LaunchBar.execute("/usr/bin/open", "./Snippets.qvnotebook");
      LaunchBar.alert("Is it done loading?", "", "Yes", "No");
   }

   //
   // Set the directory path given.
   //
   var listFlagFile = LaunchBar.homeDirectory + "/.qvoptions";
   var options = {};
   var quiverDir = paths[0].trim();
   if (File.exists(listFlagFile)) {
      //
      // Load in the options that have already been saved.
      //
      options = File.readJSON(listFlagFile);
   }
   if (quiverDir.indexOf("qvlibrary") > 1) {
      //
      // It is the main library file. Find the Snippets notebook and the
      // Defaults note.
      //
      options.quiverDir = quiverDir;
      if (File.exists(quiverDir)) {
         //
         // Get a list of directories.
         //
         var notebooks = File.getDirectoryContents(quiverDir);
         for (var i = 0; i < notebooks.length; i++) {
            var notebookM = quiverDir + "/" + notebooks[i] + "/meta.json";
            if (File.exists(notebookM)) {
               var notebookData = File.readJSON(notebookM);
               if (notebookData.name == "Snippets") {
                  //
                  // Okay, we found the Snippets notebook. Save it to the file.
                  //
                  options.snippetsDir = quiverDir + "/" + notebooks[i];

                  //
                  // Find the Defaults note in the Snippets notebook.
                  //
                  var notes = getDirectories(quiverDir + "/" + notebooks[i]);
                  for (var j = 0; j < notes.length; j++) {
                     var noteM = quiverDir + "/" + notebooks[i] + "/" + notes[j] + "/meta.json";
                     if (File.exists(noteM)) {
                        var noteData = File.readJSON(noteM);
                        if (noteData.title == "Defaults") {
                           //
                           // Found the Defaults notes. Save it and leave.
                           //
                           options.defaultsDir = notes[j];
                        }
                     }
                  }
               }
            }
         }
      }
   } else {
      if (quiverDir.indexOf("qvnotebook") > 1) {
         //
         // The Snippets directory was given. Find the Defaults
         // note in the Snippets notebook.
         //
         options.snippetsDir = quiverDir;
         var notes = File.getDirectoryContents(quiverDir);
         for (var j = 0; j < notes.length; j++) {
            var noteM = quiverDir + "/" + notes[j] + "/meta.json";
            if (File.exists(noteM)) {
               var noteData = File.readJSON(noteM);
               if (noteData.title == "Defaults") {
                  //
                  // Found the Defaults notes. Save it and leave.
                  //
                  options.defaultsDir = notes[j];
               }
            }
         }
      }
   }
   //
   // Write the options to the options file.
   //
   File.writeJSON(options, listFlagFile);
}
