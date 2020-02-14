// LaunchBar Action Script

function run(argument) {
   if (argument == undefined) {
      // Inform the user that there was no argument
      LaunchBar.alert('I have to have something to put.');
   } else {
      runWithItem(argument)
   }
}

function runWithItem(item) {
   //
   // A note was sent. Save to notepad.
   //
   if (item instanceof String) {
      runWithString(item.title)
   } else if (typeof item.title !== 'undefined') {
      runwithString(item.title)
   }
}

function runWithString(msg) {
   //
   // It is definitely a string. Save.
   //
   return([
         {
            title: 'To ScriptPad 1',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 1
            }
         },
         {
            title: 'To ScriptPad 2',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 2
            }
         },
         {
            title: 'To ScriptPad 3',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 3
            }
         },
         {
            title: 'To ScriptPad 4',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 4
            }
         },
         {
            title: 'To ScriptPad 5',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 5
            }
         },
         {
            title: 'To ScriptPad 6',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 6
            }
         },
         {
            title: 'To ScriptPad 7',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 7
            }
         },
         {
            title: 'To ScriptPad 8',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 8
            }
         },
         {
            title: 'To ScriptPad 9',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 9
            }
         },
      ])
}

function appendOrWrite(obj) {
   return([         {
            title: 'Append to Note',
            action: 'pasteToScriptPad',
            actionArgument: {
               msg: obj.msg,
               noteid: obj.noteid,
               append: 'a'
            }
         },
         {
            title: 'Overwrite Note',
            action: 'pasteToScriptPad',
            actionArgument: {
               msg: obj.msg,
               noteid: obj.noteid,
               append: 'w'
            }
         },
      ])
}

function pasteToScriptPad(obj) {
   var url = 'http://localhost:9978/api/note/' + obj.noteid + '/' + obj.append
   var req = HTTP.createRequest(url, {
      method: 'PUT',
      body: { note: obj.msg },
      bodyType: 'json'
   })
   var res = HTTP.loadRequest(req)
}